/**
 * Custom Cipher Manager
 * Handles CRUD operations for user-defined gematria ciphers
 * Data is persisted in browser localStorage
 */

const CipherManager = {
  STORAGE_KEY: 'customCiphers',
  MAX_CIPHERS: 50,

  /**
   * Generate a unique ID for a cipher
   * @returns {string} UUID v4 string
   */
  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },

  /**
   * Load all custom ciphers from localStorage
   * @returns {Array} Array of cipher objects
   */
  loadCustomCiphers() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (!data) return [];
      const ciphers = JSON.parse(data);
      return Array.isArray(ciphers) ? ciphers : [];
    } catch (error) {
      console.error('Error loading custom ciphers:', error);
      return [];
    }
  },

  /**
   * Validate a cipher mapping object
   * @param {Object} mapping - Letter to number mapping
   * @returns {Object} { valid: boolean, errors: Array }
   */
  validateMapping(mapping) {
    const errors = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    // Check all letters are present
    for (const letter of alphabet) {
      if (!(letter in mapping)) {
        errors.push(`Missing value for letter ${letter}`);
      } else {
        const value = mapping[letter];
        // Check value is a positive integer
        if (!Number.isInteger(value) || value < 0) {
          errors.push(`Invalid value for ${letter}: must be a non-negative integer`);
        }
      }
    }

    return {
      valid: errors.length === 0,
      errors
    };
  },

  /**
   * Save a new or updated custom cipher
   * @param {Object} cipherData - { id?, name, description?, mapping }
   * @returns {Object} { success: boolean, cipher?, error? }
   */
  saveCustomCipher(cipherData) {
    try {
      const ciphers = this.loadCustomCiphers();

      // Check cipher limit
      if (!cipherData.id && ciphers.length >= this.MAX_CIPHERS) {
        return {
          success: false,
          error: `Maximum of ${this.MAX_CIPHERS} custom ciphers reached. Please delete some before creating new ones.`
        };
      }

      // Validate mapping
      const validation = this.validateMapping(cipherData.mapping);
      if (!validation.valid) {
        return {
          success: false,
          error: `Invalid cipher mapping: ${validation.errors.join(', ')}`
        };
      }

      // Validate name
      if (!cipherData.name || cipherData.name.trim().length === 0) {
        return {
          success: false,
          error: 'Cipher name is required'
        };
      }

      const now = new Date().toISOString();
      let cipher;

      if (cipherData.id) {
        // Update existing cipher
        const index = ciphers.findIndex(c => c.id === cipherData.id);
        if (index === -1) {
          return {
            success: false,
            error: 'Cipher not found'
          };
        }
        cipher = {
          ...ciphers[index],
          name: cipherData.name.trim(),
          description: cipherData.description?.trim() || '',
          mapping: cipherData.mapping,
          lastModified: now
        };
        ciphers[index] = cipher;
      } else {
        // Create new cipher
        cipher = {
          id: this.generateId(),
          name: cipherData.name.trim(),
          description: cipherData.description?.trim() || '',
          mapping: cipherData.mapping,
          createdAt: now,
          lastModified: now
        };
        ciphers.push(cipher);
      }

      // Save to localStorage
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(ciphers));

      return {
        success: true,
        cipher
      };
    } catch (error) {
      console.error('Error saving cipher:', error);
      return {
        success: false,
        error: error.message || 'Failed to save cipher'
      };
    }
  },

  /**
   * Delete a custom cipher
   * @param {string} cipherId - Cipher ID to delete
   * @returns {Object} { success: boolean, error? }
   */
  deleteCustomCipher(cipherId) {
    try {
      const ciphers = this.loadCustomCiphers();
      const filteredCiphers = ciphers.filter(c => c.id !== cipherId);
      
      if (filteredCiphers.length === ciphers.length) {
        return {
          success: false,
          error: 'Cipher not found'
        };
      }

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredCiphers));
      return { success: true };
    } catch (error) {
      console.error('Error deleting cipher:', error);
      return {
        success: false,
        error: error.message || 'Failed to delete cipher'
      };
    }
  },

  /**
   * Get a specific cipher by ID
   * @param {string} cipherId - Cipher ID
   * @returns {Object|null} Cipher object or null
   */
  getCipherById(cipherId) {
    const ciphers = this.loadCustomCiphers();
    return ciphers.find(c => c.id === cipherId) || null;
  },

  /**
   * Get the mapping for a custom cipher (for calculations)
   * @param {string} cipherId - Cipher ID
   * @returns {Object|null} Letter-to-number mapping or null
   */
  getCustomCipherMap(cipherId) {
    const cipher = this.getCipherById(cipherId);
    return cipher ? cipher.mapping : null;
  },

  /**
   * Export selected ciphers as JSON
   * @param {Array} cipherIds - Array of cipher IDs to export
   * @returns {Object} { success: boolean, json?, error? }
   */
  exportCiphers(cipherIds) {
    try {
      const allCiphers = this.loadCustomCiphers();
      const ciphersToExport = cipherIds.length > 0
        ? allCiphers.filter(c => cipherIds.includes(c.id))
        : allCiphers;

      if (ciphersToExport.length === 0) {
        return {
          success: false,
          error: 'No ciphers to export'
        };
      }

      const exportData = {
        version: '1.0',
        exportDate: new Date().toISOString(),
        ciphers: ciphersToExport
      };

      return {
        success: true,
        json: JSON.stringify(exportData, null, 2)
      };
    } catch (error) {
      console.error('Error exporting ciphers:', error);
      return {
        success: false,
        error: error.message || 'Failed to export ciphers'
      };
    }
  },

  /**
   * Import ciphers from JSON
   * @param {string} jsonString - JSON string to import
   * @returns {Object} { success: boolean, imported?, skipped?, errors?, error? }
   */
  importCiphers(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      
      // Validate structure
      if (!data.ciphers || !Array.isArray(data.ciphers)) {
        return {
          success: false,
          error: 'Invalid import file: missing ciphers array'
        };
      }

      const currentCiphers = this.loadCustomCiphers();
      const imported = [];
      const skipped = [];
      const errors = [];

      for (const cipher of data.ciphers) {
        // Validate cipher structure
        if (!cipher.name || !cipher.mapping) {
          errors.push(`Skipped invalid cipher: missing name or mapping`);
          continue;
        }

        // Validate mapping
        const validation = this.validateMapping(cipher.mapping);
        if (!validation.valid) {
          errors.push(`Skipped "${cipher.name}": ${validation.errors.join(', ')}`);
          continue;
        }

        // Check if we're at the limit
        if (currentCiphers.length + imported.length >= this.MAX_CIPHERS) {
          errors.push(`Reached maximum of ${this.MAX_CIPHERS} ciphers. Remaining ciphers not imported.`);
          break;
        }

        // Check for duplicate names and handle
        let finalName = cipher.name.trim();
        let counter = 2;
        while (currentCiphers.some(c => c.name === finalName) || imported.some(c => c.name === finalName)) {
          finalName = `${cipher.name.trim()} (${counter})`;
          counter++;
        }

        if (finalName !== cipher.name.trim()) {
          skipped.push(`Renamed "${cipher.name}" to "${finalName}" (duplicate name)`);
        }

        // Create new cipher with fresh ID
        const now = new Date().toISOString();
        const newCipher = {
          id: this.generateId(),
          name: finalName,
          description: cipher.description?.trim() || '',
          mapping: cipher.mapping,
          createdAt: now,
          lastModified: now
        };

        imported.push(newCipher);
      }

      if (imported.length === 0) {
        return {
          success: false,
          error: 'No valid ciphers found in import file',
          errors
        };
      }

      // Save imported ciphers
      const updatedCiphers = [...currentCiphers, ...imported];
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedCiphers));

      return {
        success: true,
        imported: imported.length,
        skipped: skipped,
        errors: errors.length > 0 ? errors : undefined
      };
    } catch (error) {
      console.error('Error importing ciphers:', error);
      return {
        success: false,
        error: error.message || 'Failed to import ciphers'
      };
    }
  },

  /**
   * Get quick-fill presets for cipher creation
   * @returns {Object} Preset mappings
   */
  getPresets() {
    return {
      sequential: this.generateSequentialMapping(1, 26),
      reverse: this.generateReverseMapping(26, 1),
      ordinal: this.generateSequentialMapping(1, 26), // Same as sequential
      pythagorean: this.generatePythagoreanMapping()
    };
  },

  /**
   * Generate sequential mapping (A=start, B=start+1, ..., Z=start+25)
   */
  generateSequentialMapping(start = 1, end = 26) {
    const mapping = {};
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const step = (end - start) / 25;
    
    alphabet.forEach((letter, index) => {
      mapping[letter] = Math.round(start + (step * index));
    });
    
    return mapping;
  },

  /**
   * Generate reverse mapping (A=end, B=end-1, ..., Z=start)
   */
  generateReverseMapping(start = 26, end = 1) {
    const mapping = {};
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const step = (start - end) / 25;
    
    alphabet.forEach((letter, index) => {
      mapping[letter] = Math.round(start - (step * index));
    });
    
    return mapping;
  },

  /**
   * Generate Pythagorean/reduction mapping (A=1, B=2, ..., I=9, J=1, K=2, ...)
   */
  generatePythagoreanMapping() {
    const mapping = {};
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    alphabet.forEach((letter, index) => {
      mapping[letter] = (index % 9) + 1;
    });
    
    return mapping;
  },

  /**
   * Check localStorage usage
   * @returns {Object} { used: number, available: number, percentage: number }
   */
  getStorageInfo() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY) || '';
      const used = new Blob([data]).size;
      const total = 5 * 1024 * 1024; // 5MB typical limit
      
      return {
        used,
        available: total - used,
        percentage: (used / total) * 100,
        cipherCount: this.loadCustomCiphers().length
      };
    } catch (error) {
      return {
        used: 0,
        available: 0,
        percentage: 0,
        cipherCount: 0
      };
    }
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CipherManager;
}
