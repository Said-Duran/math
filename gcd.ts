export function gcdBruteForce(a: number, B: number): number {
  const min = Math.min(a, b);

  for (let i = Math.floor(min / 2); i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
}

export function gcdEuclid(a: number, b: number): number {
  if (a === b) {
    return a;
  }

  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return gcdEuclid(min, max - min);
}
