import { assertAlmostEquals } from "@std/assert";
import { Circle, Point2D } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("Distanz zwischen zwei Punkten", () => {
  const p1 = new Point2D(0, 0);
  const p2 = new Point2D(3, 4);

  const dist = p1.distanceTo(p2);

  if (dist !== 5) {
    throw new Error("Distanz falsch berechnet");
  }
});

Deno.test("Kreisfläche korrekt", () => {
  const c = new Circle(new Point2D(0, 0), 1);

  const area = c.area();

  if (Math.abs(area - Math.PI) > 0.0001) {
    throw new Error("Fläche falsch");
  }
});

Deno.test("Kreisumfang korrekt", () => {
  const c = new Circle(new Point2D(0, 0), 1);

  const u = c.circumference();

  if (Math.abs(u - 2 * Math.PI) > 0.0001) {
    throw new Error("Umfang falsch");
  }
});

Deno.test("Durchmesser korrekt", () => {
  const c = new Circle(new Point2D(0, 0), 5);

  if (c.diameter() !== 10) {
    throw new Error("Durchmesser falsch");
  }
});
