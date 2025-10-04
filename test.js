/*
  Baseline Sentinel JavaScript Stress Test
*/

// Modern Array Methods
const array = [1, 2, 3, 4, 5];
const last = array.at(-1); // [Warning] Polyfill recommendation
const reversed = array.toReversed(); // [Warning] Polyfill recommendation

// Modern Object Methods
const obj = { one: 1, two: 2 };
if (Object.hasOwn(obj, 'one')) { // [Warning] Polyfill recommendation
  console.log('Has one');
}

// Modern Promise APIs
async function fetchAll() {
  try {
    // TIP: 'Promise.allSettled' is not Baseline. Consider a polyfill. (baseline-disable-next-line api.Promise.allSettled)
    const results = await Promise.allSettled([ // [Warning] Polyfill recommendation
      fetch('/api/a'),
      fetch('/api/b')
    ]);
    console.log(results);
  } catch (e) {
    // ...
  }
}

// Deprecated Property
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) { // [Warning] Replacement fix (e.key)
    console.log('Spacebar was pressed');
  }
});

// APIs requiring feature detection
async function copyToClipboard() {
  if (navigator.clipboard) { // [Warning] Will still be flagged, as it's a "best practice" warning
    await navigator.clipboard.writeText('Hello, world!');
  }
}

// New Browser APIs
async function shareContent() {
  if (navigator.share) { // [Warning] Best practice warning
    await navigator.share({ title: 'Test', text: 'Hello' });
  }
}

const observer = new ResizeObserver(entries => { // [Warning] Polyfill recommendation
  // ...
});