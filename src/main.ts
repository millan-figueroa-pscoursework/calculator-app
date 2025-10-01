


function add(a: number = 0, b: number = 0): number {
  return a + b;
}

function divide(a: number, b: number = 1): number | null {
  if (a == 0 || b == 0) {
    return 0;
  } else {
    return a / b;
  }
}

function subtract(a: number = 0, b: number = 0): number {
  return a - b;
}

function multiply(a: number, b: number = 1): number {
  return a * b;
}

// Function overloads for calculating squares or summing arrays
function calculate(value: number): number;
function calculate(value: number[]): number;

function calculate(input: number | number[]): number {
  if (typeof input === 'number') {
    return input ** 2;
  } else {
    return input.reduce((acc, value) => acc + value, 0);
  }
}
