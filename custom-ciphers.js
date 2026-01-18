/**
 * Custom Ciphers Page Logic
 * Handles UI interactions for creating, editing, and managing custom ciphers
 */

let currentEditingCipherId = null;

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('cipher-list')) {
    initializeCustomCiphersPage();
  }
});

function initializeCustomCiphersPage() {
  loadCipherList();
  updateStorageInfo();
  setupEventListeners();
  generateCipherGrid();
}

function setupEventListeners() {
  // Create new cipher button
  document.getElementById('create-new-cipher')?.addEventListener('click', () => {
    openCipherBuilder();
  });

  // Close builder
  document.getElementById('close-builder')?.addEventListener('click', closeCipherBuilder);
  document.getElementById('cancel-builder')?.addEventListener('click', closeCipherBuilder);

  // Quick fill presets
  document.querySelectorAll('.btn-preset').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const preset = e.target.dataset.preset;
      applyPreset(preset);
    });
  });

  // Form submission
  document.getElementById('cipher-builder-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    saveCipher();
  });

  // Grid inputs - live preview
  document.getElementById('cipher-grid')?.addEventListener('input', () => {
    updateLivePreview();
  });

  // Import/Export
  document.getElementById('export-all-btn')?.addEventListener('click', exportAllCiphers);
  document.getElementById('export-selected-btn')?.addEventListener('click', exportSelectedCiphers);
  document.getElementById('import-btn')?.addEventListener('click', () => {
    document.getElementById('import-file-input').click();
  });
  document.getElementById('import-file-input')?.addEventListener('change', handleImportFile);

  // Close overlay on background click
  document.getElementById('cipher-builder-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'cipher-builder-overlay') {
      closeCipherBuilder();
    }
  });
}

function generateCipherGrid() {
  const grid = document.getElementById('cipher-grid');
  if (!grid) return;

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  grid.innerHTML = '';

  alphabet.forEach(letter => {
    const cell = document.createElement('div');
    cell.className = 'cipher-grid-cell';
    cell.innerHTML = `
      <label for="letter-${letter}">${letter}</label>
      <input 
        type="number" 
        id="letter-${letter}" 
        name="letter-${letter}" 
        min="0" 
        step="1" 
        placeholder="0"
        required
      >
    `;
    grid.appendChild(cell);
  });
}

function applyPreset(presetName) {
  const presets = CipherManager.getPresets();
  let mapping;

  switch(presetName) {
    case 'sequential':
      mapping = presets.sequential;
      break;
    case 'reverse':
      mapping = presets.reverse;
      break;
    case 'pythagorean':
      mapping = presets.pythagorean;
      break;
    case 'clear':
      mapping = {};
      break;
    default:
      return;
  }

  // Apply to grid
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  alphabet.forEach(letter => {
    const input = document.getElementById(`letter-${letter}`);
    if (input) {
      input.value = mapping[letter] || '';
    }
  });

  updateLivePreview();
}

function updateLivePreview() {
  const previewDiv = document.getElementById('preview-result');
  if (!previewDiv) return;

  const mapping = getCurrentMapping();
  const testText = 'SAMPLE TEXT';
  
  // Check if mapping is complete
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const isComplete = alphabet.every(letter => mapping[letter] !== undefined && mapping[letter] !== '');

  if (!isComplete) {
    previewDiv.innerHTML = '<em>Enter values for all letters to see preview</em>';
    previewDiv.className = 'preview-result preview-incomplete';
    return;
  }

  // Calculate value
  let total = 0;
  for (const char of testText.toUpperCase()) {
    if (char in mapping) {
      total += parseInt(mapping[char]);
    }
  }

  previewDiv.innerHTML = `<strong>${testText}</strong> = <span class="preview-value">${total}</span>`;
  previewDiv.className = 'preview-result preview-complete';
}

function getCurrentMapping() {
  const mapping = {};
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  alphabet.forEach(letter => {
    const input = document.getElementById(`letter-${letter}`);
    if (input && input.value !== '') {
      mapping[letter] = parseInt(input.value);
    }
  });

  return mapping;
}

function openCipherBuilder(cipherId = null) {
  currentEditingCipherId = cipherId;
  const overlay = document.getElementById('cipher-builder-overlay');
  const title = document.getElementById('builder-title');
  const form = document.getElementById('cipher-builder-form');

  if (cipherId) {
    // Edit mode
    const cipher = CipherManager.getCipherById(cipherId);
    if (!cipher) return;

    title.textContent = 'Edit Custom Cipher';
    document.getElementById('cipher-name').value = cipher.name;
    document.getElementById('cipher-description').value = cipher.description || '';

    // Populate grid
    Object.entries(cipher.mapping).forEach(([letter, value]) => {
      const input = document.getElementById(`letter-${letter}`);
      if (input) input.value = value;
    });
  } else {
    // Create mode
    title.textContent = 'Create Custom Cipher';
    form.reset();
  }

  overlay.style.display = 'flex';
  updateLivePreview();
}

function closeCipherBuilder() {
  const overlay = document.getElementById('cipher-builder-overlay');
  overlay.style.display = 'none';
  currentEditingCipherId = null;
  document.getElementById('cipher-builder-form').reset();
}

function saveCipher() {
  const name = document.getElementById('cipher-name').value;
  const description = document.getElementById('cipher-description').value;
  const mapping = getCurrentMapping();

  const cipherData = {
    id: currentEditingCipherId,
    name,
    description,
    mapping
  };

  const result = CipherManager.saveCustomCipher(cipherData);

  if (result.success) {
    showNotification('Cipher saved successfully!', 'success');
    closeCipherBuilder();
    loadCipherList();
    updateStorageInfo();
  } else {
    showNotification(result.error, 'error');
  }
}

function loadCipherList() {
  const ciphers = CipherManager.loadCustomCiphers();
  const listDiv = document.getElementById('cipher-list');
  const emptyState = document.getElementById('empty-state');
  const countSpan = document.getElementById('cipher-count');

  if (countSpan) countSpan.textContent = ciphers.length;

  if (ciphers.length === 0) {
    listDiv.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  listDiv.innerHTML = ciphers.map(cipher => `
    <div class="cipher-list-item" data-cipher-id="${cipher.id}">
      <div class="cipher-item-header">
        <h4>${escapeHtml(cipher.name)}</h4>
        <div class="cipher-item-actions">
          <button class="btn-icon btn-edit" data-cipher-id="${cipher.id}" title="Edit">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </button>
          <button class="btn-icon btn-delete" data-cipher-id="${cipher.id}" title="Delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
      ${cipher.description ? `<p class="cipher-description">${escapeHtml(cipher.description)}</p>` : ''}
      <div class="cipher-meta">
        <span>Created: ${formatDate(cipher.createdAt)}</span>
        ${cipher.lastModified !== cipher.createdAt ? `<span>Modified: ${formatDate(cipher.lastModified)}</span>` : ''}
      </div>
      <div class="cipher-sample">
        Sample: "HELLO" = ${calculateSample(cipher.mapping, 'HELLO')}
      </div>
    </div>
  `).join('');

  // Attach event listeners
  document.querySelectorAll('.btn-edit').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cipherId = e.currentTarget.dataset.cipherId;
      openCipherBuilder(cipherId);
    });
  });

  document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cipherId = e.currentTarget.dataset.cipherId;
      deleteCipher(cipherId);
    });
  });
}

function deleteCipher(cipherId) {
  const cipher = CipherManager.getCipherById(cipherId);
  if (!cipher) return;

  if (confirm(`Are you sure you want to delete "${cipher.name}"? This cannot be undone.`)) {
    const result = CipherManager.deleteCustomCipher(cipherId);
    if (result.success) {
      showNotification('Cipher deleted successfully', 'success');
      loadCipherList();
      updateStorageInfo();
    } else {
      showNotification(result.error, 'error');
    }
  }
}

function calculateSample(mapping, text) {
  let total = 0;
  for (const char of text.toUpperCase()) {
    if (char in mapping) {
      total += mapping[char];
    }
  }
  return total;
}

function updateStorageInfo() {
  const info = CipherManager.getStorageInfo();
  const infoDiv = document.getElementById('storage-info');
  if (!infoDiv) return;

  const usedKB = (info.used / 1024).toFixed(2);
  const percentage = info.percentage.toFixed(1);

  let statusClass = 'storage-ok';
  if (percentage > 80) statusClass = 'storage-warning';
  if (percentage > 95) statusClass = 'storage-critical';

  infoDiv.innerHTML = `
    <div class="storage-bar ${statusClass}">
      <div class="storage-bar-fill" style="width: ${percentage}%"></div>
    </div>
    <div class="storage-text">
      Storage: ${usedKB} KB used (${percentage}% of browser limit)
    </div>
  `;
}

function exportAllCiphers() {
  const result = CipherManager.exportCiphers([]);
  if (result.success) {
    downloadJSON(result.json, 'gematria-custom-ciphers.json');
    showNotification('Ciphers exported successfully!', 'success');
  } else {
    showNotification(result.error, 'error');
  }
}

function exportSelectedCiphers() {
  // TODO: Implement selection UI
  showNotification('Please use "Export All" for now', 'info');
}

function handleImportFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const result = CipherManager.importCiphers(e.target.result);
    
    if (result.success) {
      let message = `Successfully imported ${result.imported} cipher(s)`;
      if (result.skipped && result.skipped.length > 0) {
        message += `\n\nNotes:\n${result.skipped.join('\n')}`;
      }
      if (result.errors && result.errors.length > 0) {
        message += `\n\nWarnings:\n${result.errors.join('\n')}`;
      }
      
      showNotification(message, 'success');
      loadCipherList();
      updateStorageInfo();
    } else {
      showNotification(result.error, 'error');
    }

    // Reset file input
    event.target.value = '';
  };

  reader.onerror = () => {
    showNotification('Failed to read file', 'error');
  };

  reader.readAsText(file);
}

function downloadJSON(jsonString, filename) {
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function showNotification(message, type = 'info') {
  // Simple alert for now - can be enhanced with custom notification UI
  alert(message);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}
