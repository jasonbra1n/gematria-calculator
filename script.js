const standardMap = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 10, K: 20, L: 30, M: 40, N: 50, O: 60, P: 70, Q: 80, R: 90,
  S: 100, T: 200, U: 300, V: 400, W: 500, X: 600, Y: 700, Z: 800
};

// [All other mapping objects remain the same...]

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('systems-overlay');
  const openBtn = document.getElementById('open-systems-overlay');
  const closeBtn = document.getElementById('close-overlay');
  const saveBtn = document.getElementById('save-systems');
  const gematriaWord = document.getElementById('gematria-word');

  openBtn.addEventListener('click', () => overlay.style.display = 'flex');
  closeBtn.addEventListener('click', () => overlay.style.display = 'none');
  saveBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    calculateGematria();
  });

  document.getElementById('select-base-systems').addEventListener('click', () => {
    const baseSystems = ['ordinal', 'reverse', 'reduction', 'reverse-reduction'];
    document.querySelectorAll('[name="system"]').forEach(cb => {
      cb.checked = baseSystems.includes(cb.value);
    });
  });

  document.getElementById('select-all-systems').addEventListener('click', () => {
    document.querySelectorAll('[name="system"]').forEach(cb => cb.checked = true);
  });

  document.getElementById('clear-selected-systems').addEventListener('click', () => {
    document.querySelectorAll('[name="system"]').forEach(cb => cb.checked = false);
  });

  gematriaWord.addEventListener('input', calculateGematria);

  if (gematriaWord.value) {
    calculateGematria();
  }
});

function calculateGematria() {
  const word = document.getElementById('gematria-word').value.trim().replace(/ /g, '');
  const showReduced = document.getElementById('overlay-display-reduced').checked;
  const systems = Array.from(document.querySelectorAll('[name="system"]:checked')).map(cb => cb.value);
  
  if (!word) {
    showError('Please enter a word or phrase');
    return;
  }

  if (systems.length === 0) {
    showError('Please select at least one system');
    return;
  }

  const results = systems.map(system => {
    const value = calculateSystemValue(word, system);
    return {
      system,
      value,
      reduced: showReduced ? reduceNumber(value) : null
    };
  });

  displayResults(results);
}

// [All other functions remain the same...]

function clearResults() {
  document.getElementById('gematria-results').innerHTML = '';
}

document.getElementById("gematria-form").addEventListener("submit", function(event) {
  event.preventDefault();
});
