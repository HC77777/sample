// TypeScript Test File for Baseline Sentinel

// Test 1: Array.at() - Should show warning
const numbers: number[] = [1, 2, 3, 4, 5];
// TIP: 'Array.prototype.at()' is not Baseline. Consider a polyfill. (baseline-disable-next-line api.Array.at)
const lastNumber = numbers.at(-1);
console.log('Last number:', lastNumber);

// Test 2: Object.hasOwn - Should show warning
const user = { name: 'Alice', age: 30 };
// TIP: 'Object.hasOwn' is not Baseline. Consider a polyfill. (baseline-disable-next-line api.Object.hasOwn)
if (Object.hasOwn(user, 'name')) {
  console.log('Has name property');
}

// Test 3: Promise.allSettled - Should show warning
async function fetchData(): Promise<void> {
  // TIP: 'Promise.allSettled' is not Baseline. Consider a polyfill. (baseline-disable-next-line api.Promise.allSettled)
  const results = await Promise.allSettled([
    fetch('/api/data1'),
    fetch('/api/data2')
  ]);
  console.log(results);
}

// Test 4: event.keyCode (deprecated) - Should show warning with replacement fix
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.keyCode === 27) {
    console.log('Escape key pressed');
  }
});

// Test 5: navigator.clipboard - Should show warning
async function copyText(): Promise<void> {
  // WARNING: The Clipboard API is not Baseline. Wrap calls in feature detection and handle permissions. (baseline-disable-next-line api.navigator.clipboard)
  await navigator.clipboard.writeText('Hello World');
}

// Test 6: Array.toReversed() - Should show warning
const original: string[] = ['a', 'b', 'c'];
// TIP: '.toReversed()' is not Baseline. Consider a polyfill. (baseline-disable-next-line api.Array.toReversed)
const reversed = original.toReversed();
console.log(reversed);

