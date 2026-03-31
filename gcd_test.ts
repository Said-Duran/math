import { gcdBruteForce } from "./gcd.ts";

Deno.test("ggT von 1 und 1 ist 1", () => {
  const result = gdcsBruteForce(1,1);

  if (result !== 1) {
    throw new Error("Falsch");
  }
});

Deno.test("ggT von 6 und 3 ist 3", () => {
  const result = gcdBruteForce(6, 3);

          if (result !== 3) 
    throw new Error("Falsch");
  }
});

Deno.test("ggT von 8 und 12 ist 4", () => {
  if (gcdBruteForce(8, 12) !== 4) {
    throw new Error("Falsch");
  }
});

Deno.test("ggT von 7 und 5 ist 1", () => {
  if (gcdBruteForce(7, 5) !== 1) {
    throw new Error("Falsch");
  }
});

Deno.test("ggT von gleichen Zahlen", () => {
  if (gcdBruteForce(5, 5) !== 5) {
    throw new Error("Falsch");
  }
});

