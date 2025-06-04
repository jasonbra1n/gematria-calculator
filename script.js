const standardMap = {
  A: 1,  B: 2,  C: 3,  D: 4,  E: 5,  F: 6,  G: 7,  H: 8,  I: 9,
  J: 10, K: 20, L: 30, M: 40, N: 50, O: 60, P: 70, Q: 80, R: 90,
  S: 100, T: 200, U: 300, V: 400, W: 500, X: 600, Y: 700, Z: 800
};

const reverseStandardMap = {
  A: 800, B: 700, C: 600, D: 500, E: 400, F: 300, G: 200, H: 100,
  I: 90,  J: 80,  K: 70,  L: 60,  M: 50,  N: 40,  O: 30,  P: 20,
  Q: 10,  R: 9,   S: 8,   T: 7,   U: 6,   V: 5,   W: 4,   X: 3,
  Y: 2,   Z: 1
};

const latinMap = {
  A: 1,  B: 2,  C: 3,  D: 4,  E: 5,  F: 6,  G: 7,  H: 8,  I: 9, 
  K: 10, L: 20, M: 30, N: 40,
  O: 50, P: 60, Q: 70, R: 80, S: 90, T: 100, U: 200, X: 300, Y: 400, Z: 500,
  J: 600, V: 700, W: 900
};

const sumerianMap = {
  A: 6,   B: 12,  C: 18,  D: 24,  E: 30,  F: 36,  G: 42,  H: 48,  I: 54,
  J: 60,  K: 66,  L: 72,  M: 78,  N: 84,  O: 90,  P: 96,  Q: 102, R: 108,
  S: 114, T: 120, U: 126, V: 132, W: 138, X: 144, Y: 150, Z: 156
};

const reverseSumerianMap = {
  Z: 6,   Y: 12,  X: 18,  W: 24,  V: 30,  U: 36,  T: 42,  S: 48,  R: 54,
  Q: 60,  P: 66,  O: 72,  N: 78,  M: 84,  L: 90,  K: 96,  J: 102, I: 108,
  H: 114, G: 120, F: 126, E: 132, D: 138, C: 144, B: 150, A: 156
};

const satanicMap = {
  A: 36, B: 37, C: 38, D: 39, E: 40, F: 41, G: 42, H: 43, I: 44,
  J: 45, K: 46, L: 47, M: 48, N: 49, O: 50, P: 51, Q: 52, R: 53,
  S: 54, T: 55, U: 56, V: 57, W: 58, X: 59, Y: 60, Z: 61
};

const reverseSatanicMap = {
  Z: 36, Y: 37, X: 38, W: 39, V: 40, U: 41, T: 42, S: 43, R: 44,
  Q: 45, P: 46, O: 47, N: 48, M: 49, L: 50, K: 51, J: 52, I: 53,
  H: 54, G: 55, F: 56, E: 57, D: 58, C: 59, B: 60, A: 61
};

const singleReductionMap = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
};

const kvExceptionMap = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 11, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 22, W: 5, X: 6, Y: 7, Z: 8
};

const skvExceptionMap = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 11, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 10, T: 2, U: 3, V: 22, W: 5, X: 6, Y: 7, Z: 8
};

const singleReverseReductionMap = {
  A: 8, B: 7, C: 6, D: 5, E: 4, F: 3, G: 2, H: 1, I: 9,
  J: 8, K: 7, L: 6, M: 5, N: 4, O: 3, P: 2, Q: 1, R: 9,
  S: 8, T: 7, U: 6, V: 5, W: 4, X: 3, Y: 2, Z: 1
};

const epExceptionMap = {
  A: 8, B: 7, C: 6, D: 5, E: 22, F: 3, G: 2, H: 1, I: 9,
  J: 8, K: 7, L: 6, M: 5, N: 4, O: 3, P: 11, Q: 1, R: 9,
  S: 8, T: 7, U: 6, V: 5, W: 4, X: 3, Y: 2, Z: 1
};

const ehpExceptionMap = {
  A: 8, B: 7, C: 6, D: 5, E: 22, F: 3, G: 2, H: 10, I: 9,
  J: 8, K: 7, L: 6, M: 5, N: 4, O: 3, P: 11, Q: 1, R: 9,
  S: 8, T: 7, U: 6, V: 5, W: 4, X: 3, Y: 2, Z: 1
};

const primesMap = {
  A: 2, B: 3, C: 5, D: 7, E: 11, F: 13, G: 17, H: 19, I: 23,
  J: 29, K: 31, L: 37, M: 41, N: 43, O: 47, P: 53, Q: 59,
  R: 61, S: 67, T: 71, U: 73, V: 79, W: 83, X: 89, Y: 97, Z: 101
};

const trigonalMap = {
  A: 1, B: 3, C: 6, D: 10, E: 15, F: 21, G: 28, H: 36, I: 45,
  J: 55, K: 66, L: 78, M: 91, N: 105, O: 120, P: 136, Q: 153,
  R: 171, S: 190, T: 210, U: 231, V: 253, W: 276, X: 300, Y: 325, Z: 351
};

const squaresMap = {
  A: 1, B: 4, C: 9, D: 16, E: 25, F: 36, G: 49, H: 64, I: 81,
  J: 100, K: 121, L: 144, M: 169, N: 196, O: 225, P: 256, Q: 289,
  R: 324, S: 361, T: 400, U: 441, V: 484, W: 529, X: 576, Y: 625, Z: 676
};

const fibonacciMap = {
  A: 1, B: 1, C: 2, D: 3, E: 5, F: 8, G: 13, H: 21, I: 34,
  J: 55, K: 89, L: 144, M: 233, N: 233, O: 144, P: 89, Q: 55,
  R: 34, S: 21, T: 13, U: 8, V: 5, W: 3, X: 2, Y: 1, Z: 1
};

const reversePrimesMap = {
  Z: 2, Y: 3, X: 5, W: 7, V: 11, U: 13, T: 17, S: 19, R: 23,
  Q: 29, P: 31, O: 37, N: 41, M: 43, L: 47, K: 53, J: 59,
  I: 61, H: 67, G: 71, F: 73, E: 79, D: 83, C: 89, B: 97, A: 101
};

const reverseTrigonalMap = {
  Z: 1, Y: 3, X: 6, W: 10, V: 15, U: 21, T: 28, S: 36, R: 45,
  Q: 55, P: 66, O: 78, N: 91, M: 105, L: 120, K: 136, J: 153,
  I: 171, H: 190, G: 210, F: 231, E: 253, D: 276, C: 300, B: 325, A: 351
};

const reverseSquaresMap = {
  Z: 1, Y: 4, X: 9, W: 16, V: 25, U: 36, T: 49, S: 64, R: 81,
  Q: 100, P: 121, O: 144, N: 169, M: 196, L: 225, K: 256, J: 289,
  I: 324, H: 361, G: 400, F: 441, E: 484, D: 529, C: 576, B: 625, A: 676
};

const chaldeanMap = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 8, G: 3, H: 5, I: 1,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 7, P: 8, Q: 1, R: 2,
  S: 3, T: 4, U: 6, V: 6, W: 6, X: 5, Y: 1, Z: 7
};

const septenaryMap = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 6, I: 5,
  J: 4, K: 3, L: 2, M: 1, N: 1, O: 2, P: 3, Q: 4, R: 5,
  S: 6, T: 7, U: 6, V: 5, W: 4, X: 3, Y: 2, Z: 1
};

const keypadMap = {
  A: 2, B: 2, C: 2, D: 3, E: 3, F: 3, G: 4, H: 4, I: 4,
  J: 5, K: 5, L: 5, M: 6, N: 6, O: 6, P: 7, Q: 7, R: 7,
  S: 7, T: 8, U: 8, V: 8, W: 9, X: 9, Y: 9, Z: 9
};

const alphanumericQabbalaMap = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
  A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, G: 16, H: 17, I: 18,
  J: 19, K: 20, L: 21, M: 22, N: 23, O: 24, P: 25, Q: 26, R: 27,
  S: 28, T: 29, U: 30, V: 31, W: 32, X: 33, Y: 34, Z: 35
};

document.addEventListener('DOMContentLoaded', () => {
  const isIndexPage = document.getElementById('gematria-form');
  const isCiphersPage = document.getElementById('cipher-tables');

  if (isIndexPage) {
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

    if (gematriaWord.value) calculateGematria();

    document.getElementById("gematria-form").addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }

  if (isCiphersPage) {
    displayCipherTables();
  }
});

function calculateGematria() {
  const word = document.getElementById('gematria-word').value.trim();
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

function calculateSystemValue(word, system) {
  const upperWord = word.toUpperCase();
  let total = 0;
  
  for (const char of upperWord) {
    if (system === 'alphanumeric') {
      if (char >= '0' && char <= '9') {
        total += parseInt(char, 10);
        continue;
      }
      total += alphanumericQabbalaMap[char] || 0;
    } else {
      const code = char.charCodeAt(0) - 64;
      if (code < 1 || code > 26) continue;
      
      switch(system) {
        case 'ordinal':
          total += code;
          break;
        case 'reduction':
          total += ((code - 1) % 9) + 1;
          break;
        case 'reverse':
          total += (27 - code);
          break;
        case 'reverse-reduction':
          total += ((26 - code) % 9) + 1;
          break;
        case 'standard':
          total += standardMap[char] || 0;
          break;
        case 'reverse-standard':
          total += reverseStandardMap[char] || 0;
          break;
        case 'latin':
          total += latinMap[char] || 0;
          break;
        case 'sumerian':
          total += sumerianMap[char] || 0;
          break;
        case 'reverse-sumerian':
          total += reverseSumerianMap[char] || 0;
          break;
        case 'satanic':
          total += satanicMap[char] || 0;
          break;
        case 'reverse-satanic':
          total += reverseSatanicMap[char] || 0;
          break;
        case 'single-reduction':
          total += singleReductionMap[char] || 0;
          break;
        case 'kv-exception':
          total += kvExceptionMap[char] || 0;
          break;
        case 'skv-exception':
          total += skvExceptionMap[char] || 0;
          break;
        case 'single-reverse-reduction':
          total += singleReverseReductionMap[char] || 0;
          break;
        case 'ep-exception':
          total += epExceptionMap[char] || 0;
          break;
        case 'ehp-exception':
          total += ehpExceptionMap[char] || 0;
          break;
        case 'primes':
          total += primesMap[char] || 0;
          break;
        case 'trigonal':
          total += trigonalMap[char] || 0;
          break;
        case 'squares':
          total += squaresMap[char] || 0;
          break;
        case 'fibonacci':
          total += fibonacciMap[char] || 0;
          break;
        case 'reverse-primes':
          total += reversePrimesMap[char] || 0;
          break;
        case 'reverse-trigonal':
          total += reverseTrigonalMap[char] || 0;
          break;
        case 'reverse-squares':
          total += reverseSquaresMap[char] || 0;
          break;
        case 'chaldean':
          total += chaldeanMap[char] || 0;
          break;
        case 'septenary':
          total += septenaryMap[char] || 0;
          break;
        case 'keypad':
          total += keypadMap[char] || 0;
          break;
        default:
          break;
      }
    }
  }
  return total;
}

function reduceNumber(num) {
  while (num > 9) {
    num = String(num)
      .split('')
      .reduce((sum, d) => sum + Number(d), 0);
  }
  return num;
}

function displayResults(results) {
  const container = document.getElementById('gematria-results');
  container.innerHTML = '';
  
  const resultsHTML = results.map(result => `
    <div class="result-column">
      <div class="system-name">${result.system === 'alphanumeric' ? 'Alphanumeric Qabbala (AQ)' : result.system}</div>
      <div class="primary-result">${result.value}</div>
      ${result.reduced ? `<div class="reduced-result">${result.reduced}</div>` : ''}
    </div>
  `).join('');

  container.innerHTML = `<div class="results-container">${resultsHTML}</div>`;
}

function showError(message) {
  document.getElementById('gematria-results').innerHTML = `
    <div class="result-error">${message}</div>
  `;
}

function clearResults() {
  document.getElementById('gematria-results').innerHTML = '';
}

function displayCipherTables() {
  const container = document.getElementById('cipher-tables');
  const cipherMaps = {
    'Ordinal': null,
    'Reduction': null,
    'Reverse': null,
    'Reverse Reduction': null,
    'Standard': standardMap,
    'Reverse Standard': reverseStandardMap,
    'Latin': latinMap,
    'Sumerian': sumerianMap,
    'Reverse Sumerian': reverseSumerianMap,
    'Satanic': satanicMap,
    'Reverse Satanic': reverseSatanicMap,
    'Single Reduction': singleReductionMap,
    'KV Exception': kvExceptionMap,
    'SKV Exception': skvExceptionMap,
    'Single Reverse Reduction': singleReverseReductionMap,
    'EP Exception': epExceptionMap,
    'EHP Exception': ehpExceptionMap,
    'Primes': primesMap,
    'Trigonal': trigonalMap,
    'Squares': squaresMap,
    'Fibonacci': fibonacciMap,
    'Reverse Primes': reversePrimesMap,
    'Reverse Trigonal': reverseTrigonalMap,
    'Reverse Squares': reverseSquaresMap,
    'Chaldean': chaldeanMap,
    'Septenary': septenaryMap,
    'Keypad': keypadMap,
    'Alphanumeric Qabbala': alphanumericQabbalaMap
  };

  let tablesHTML = '';
  for (const [name, map] of Object.entries(cipherMaps)) {
    tablesHTML += `
      <div class="cipher-card">
        <h3>${name}</h3>
        ${map ? generateTable(map) : generateDynamicTable(name.toLowerCase().replace(/ /g, '-'))}
      </div>
    `;
  }
  container.innerHTML = `<div class="cipher-container">${tablesHTML}</div>`;
}

function generateTable(map) {
  let tableHTML = '<table><tr><th>Character</th><th>Value</th></tr>';
  const keys = Object.keys(map).sort((a, b) => {
    if (a.match(/\d/) && b.match(/\d/)) return a - b;
    if (a.match(/\d/)) return -1;
    if (b.match(/\d/)) return 1;
    return a.localeCompare(b);
  });
  for (const key of keys) {
    tableHTML += `<tr><td>${key}</td><td>${map[key]}</td></tr>`;
  }
  tableHTML += '</table>';
  return tableHTML;
}

function generateDynamicTable(system) {
  let tableHTML = '<table><tr><th>Letter</th><th>Value</th></tr>';
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i);
    const value = calculateSystemValue(letter, system);
    tableHTML += `<tr><td>${letter}</td><td>${value}</td></tr>`;
  }
  tableHTML += '</table>';
  return tableHTML;
}
