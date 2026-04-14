// ? Test demandés dans le PDF

/**
 * @jest-environment jsdom
 */

document.body.innerHTML = "<canvas></canvas>";
// import {
//   getRandomInt,
//   rectIntersect,
//   circleIntersect,
//   timeToString,
// } from "./js13k-spaceWord/script.js";

const {
  getRandomInt,
  rectIntersect,
  circleIntersect,
  timeToString,
} = require("./js13k-spaceWord/script.js");

test("PDF : getRandomInt inférieur à 43 retourne true", () => {
  expect(getRandomInt(-42, 42)).toBeLessThan(43);
});

test("PDF : getRandomInt 42, 42 doit retourner 42", () => {
  expect(getRandomInt(42, 42)).toBe(42);
});

test("PDF : rectIntersect renvoie false", () => {
  expect(rectIntersect(1, 1, 2, 1, 4, 1, 1, 2)).toBe(false);
});

test("PDF : rectIntersect renvoie true", () => {
  expect(rectIntersect(1, 1, 5, 2, 4, 1, 1, 2)).toBe(true);
});

test("PDF : cicleIntersect renvoie false", () => {
  expect(circleIntersect(3, 2, 1, 6, 1, 1.5)).toBe(false);
});

test("PDF : cicleIntersect renvoie true", () => {
  expect(circleIntersect(3, 2, 1, 3, -2, 4)).toBe(true);
});

test("PDF : timeToString renvoie 17:36:78", () => {
  expect(timeToString(123456789)).toBe("17:36:78");
});

test("PDF : timeToString renvoie NAN", () => {
  expect(timeToString("toto")).toBe("NaN:NaN:NaN");
});
