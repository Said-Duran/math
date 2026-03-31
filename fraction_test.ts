import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  left.add(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});
Deno.test("Division durch Bruch mit 0 im Zähler", () => {
  const a = new Fraction(1, 2);
  const b = new Fraction(0, 1);

  a.divide(b);
});

Deno.test("toFloat rundet korrekt", () => {
  const f = new Fraction(1, 3);

  const result = f.toFloat(2);

  if (result !== 0.33) {
    throw new Error("Rundung falsch");
  }
});

Deno.test("Multiplikation mit 0", () => {
  const a = new Fraction(1, 2);
  const b = new Fraction(0, 5);

  a.multiply(b);

  if (a.toString() !== "0/10") {
    throw new Error("Multiplikation mit 0 falsch");
  }
});

Deno.test("1/1 bleibt 1/1", () => {
  const f = new Fraction(1, 1);

  f.cancel();

  if (f.toString() !== "1/1") {
    throw new Error("Cancel falsch");
  }
});

Deno.test("2/4 wird zu 1/2", () => {
  const f = new Fraction(2, 4);

  f.cancel();

  if (f.toString() !== "1/2") {
    throw new Error("Nicht korrekt gekürzt");
  }
});
