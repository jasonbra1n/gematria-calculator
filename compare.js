/**
 * Phrase Comparison View Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // Only initialize if we are on the comparison page
    if (document.getElementById('phrase-inputs-container')) {
        initComparisonPage();
    }
});

function initComparisonPage() {
    const addPhraseBtn = document.getElementById('add-phrase-btn');
    const inputsContainer = document.getElementById('phrase-inputs-container');
    const systemsGrid = document.getElementById('comparison-systems-grid');
    const overlay = document.getElementById('systems-overlay');
    const openBtn = document.getElementById('open-systems-overlay');
    const closeBtn = document.getElementById('close-overlay');
    const saveBtn = document.getElementById('save-systems');

    // 1. Populate systems grid (standard + custom)
    populateComparisonSystems();

    // 2. Overlay controls
    openBtn.addEventListener('click', () => overlay.style.display = 'flex');
    closeBtn.addEventListener('click', () => overlay.style.display = 'none');
    saveBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        runComparison();
    });

    // 3. Add phrase input event listener
    addPhraseBtn.addEventListener('click', addPhraseInput);

    // 4. Delegate input events for all phrase inputs
    inputsContainer.addEventListener('input', (e) => {
        if (e.target.classList.contains('phrase-input')) {
            runComparison();
        }
    });

    // 5. Selection Shortcuts
    document.getElementById('select-base-systems').addEventListener('click', () => {
        const baseSystems = ['ordinal', 'reverse', 'reduction', 'reverse-reduction'];
        systemsGrid.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.checked = baseSystems.includes(cb.value);
        });
        // We don't auto-calculate here to stay consistent with overlay behavior
    });

    document.getElementById('select-all-systems').addEventListener('click', () => {
        systemsGrid.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.checked = true;
        });
    });

    document.getElementById('clear-selected-systems').addEventListener('click', () => {
        systemsGrid.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.checked = false;
        });
    });

    // 6. CSV Export
    document.getElementById('export-csv-btn').addEventListener('click', exportToCSV);

    // Initial run
    runComparison();
}

/**
 * Populate the systems selection grid with standard and custom ciphers
 */
function populateComparisonSystems() {
    const systemsGrid = document.getElementById('comparison-systems-grid');
    const standardSystems = [
        'ordinal', 'reduction', 'reverse', 'reverse-reduction', 
        'standard', 'reverse-standard', 'latin', 'sumerian', 
        'reverse-sumerian', 'satanic', 'reverse-satanic', 
        'single-reduction', 'kv-exception', 'skv-exception', 
        'single-reverse-reduction', 'ep-exception', 'ehp-exception', 
        'primes', 'trigonal', 'squares', 'fibonacci', 
        'reverse-primes', 'reverse-trigonal', 'reverse-squares', 
        'chaldean', 'septenary', 'keypad', 'alphanumeric'
    ];

    let html = '';
    
    // Add standard systems
    standardSystems.forEach(system => {
        const displayName = typeof getSystemDisplayName === 'function' ? getSystemDisplayName(system) : system;
        html += `
            <label class="system-checkbox-label">
                <input type="checkbox" value="${system}">
                ${displayName}
            </label>
        `;
    });

    // Add custom ciphers if available
    if (typeof CipherManager !== 'undefined') {
        const customCiphers = CipherManager.loadCustomCiphers();
        if (customCiphers.length > 0) {
            html += `
                <div class="custom-cipher-separator" style="grid-column: 1 / -1; margin: 10px 0; border-top: 1px solid var(--border-color); padding-top: 10px;">
                    <strong style="color: var(--primary-color);">Custom Ciphers</strong>
                </div>
            `;
            customCiphers.forEach(cipher => {
                html += `
                    <label class="system-checkbox-label">
                        <input type="checkbox" value="custom-${cipher.id}">
                        ${cipher.name}
                    </label>
                `;
            });
        }
    }

    systemsGrid.innerHTML = html;

    // Default select Ordinal and Reduction
    const defaultCheckboxes = systemsGrid.querySelectorAll('input[value="ordinal"], input[value="reduction"]');
    defaultCheckboxes.forEach(cb => cb.checked = true);
}

/**
 * Add a new phrase input field
 */
function addPhraseInput() {
    const container = document.getElementById('phrase-inputs-container');
    const currentIndex = container.querySelectorAll('.phrase-input').length;
    
    const wrapper = document.createElement('div');
    wrapper.className = 'phrase-input-wrapper';
    
    // Add a remove button if it's not the first 3 (optional, but good UX)
    wrapper.innerHTML = `
        <input type="text" class="phrase-input" placeholder="Enter phrase..." data-index="${currentIndex}">
        <button class="remove-phrase-btn" title="Remove phrase">×</button>
    `;
    
    container.appendChild(wrapper);

    // Event listener for the remove button
    wrapper.querySelector('.remove-phrase-btn').addEventListener('click', () => {
        wrapper.remove();
        runComparison(); // Re-calculate after removal
    });

    // Focus the new input
    wrapper.querySelector('input').focus();
}

/**
 * Main calculation logic for the comparison table
 */
function runComparison() {
    const phrases = Array.from(document.querySelectorAll('.phrase-input'))
        .map(input => input.value.trim())
        .filter(val => val !== '');
        
    const selectedSystems = Array.from(document.querySelectorAll('#comparison-systems-grid input[type="checkbox"]:checked'))
        .map(cb => cb.value);

    const container = document.getElementById('comparison-results-container');
    const exportSection = document.getElementById('export-section');

    if (phrases.length === 0 || selectedSystems.length === 0) {
        container.innerHTML = `
            <div class="empty-results-message">
                <p>Enter phrases and select systems to see the comparison.</p>
            </div>
        `;
        exportSection.style.display = 'none';
        return;
    }

    // Generate result matrix
    const matrix = [];
    selectedSystems.forEach(system => {
        const row = {
            system: system,
            displayName: typeof getSystemDisplayName === 'function' ? getSystemDisplayName(system) : system,
            values: phrases.map(phrase => calculateSystemValue(phrase, system))
        };
        matrix.push(row);
    });

    renderComparisonTable(phrases, matrix);
    exportSection.style.display = 'block';
}

/**
 * Render the comparison result matrix into a table
 */
function renderComparisonTable(phrases, matrix) {
    const container = document.getElementById('comparison-results-container');
    
    let tableHTML = `
        <div class="comparison-results-table-container">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th class="cipher-name-cell">Cipher</th>
                        ${phrases.map(phrase => `<th>${escapeHtml(phrase)}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
    `;

    matrix.forEach(row => {
        // Find matches in this row
        const valueCounts = {};
        row.values.forEach(v => {
            if (v > 0) valueCounts[v] = (valueCounts[v] || 0) + 1;
        });

        tableHTML += `
            <tr>
                <td class="cipher-name-cell">${escapeHtml(row.displayName)}</td>
                ${row.values.map(val => {
                    const isMatch = val > 0 && valueCounts[val] > 1;
                    return `<td class="${isMatch ? 'match-highlight' : ''}">${val > 0 ? val : '-'}</td>`;
                }).join('')}
            </tr>
        `;
    });

    tableHTML += `
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = tableHTML;
}

/**
 * Export the current comparison table to CSV
 */
function exportToCSV() {
    const table = document.querySelector('.comparison-table');
    if (!table) return;

    let csvContent = "data:text/csv;charset=utf-8,";
    
    const rows = table.querySelectorAll('tr');
    rows.forEach(row => {
        const cols = row.querySelectorAll('th, td');
        const rowContent = Array.from(cols).map(col => {
            // Escape quotes and wrap in quotes
            const text = col.textContent.replace(/"/g, '""');
            return `"${text}"`;
        }).join(",");
        csvContent += rowContent + "\r\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `gematria-comparison-${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Helper to escape HTML (re-implementing if script.js version isn't loaded)
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
