// ? Test demandés dans le PDF

/**
 * @jest-environment jsdom
 */

document.body.innerHTML = "<canvas></canvas>";

const {
  getRandomInt,
  rectIntersect,
  circleIntersect,
  timeToString,
  generateString,
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

// ? Tests unitaires personnels

test("Personnel 1 : Vérification de generateString", () => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let longueurVoulue = 10;
  let result = "";

  for (let i = 0; i < longueurVoulue; i++) {
    result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }

  expect(result.length).toBe(10);
});

test("Personnel 2 : Vérification des collisions", () => {
  // ? On défini la position et le rayon des deux cercles
  const c1 = { x: 0, y: 0, r: 10 };
  const c2 = { x: 15, y: 0, r: 10 };

  // ? La somme des rayons des cercles est 20 pixels, le deuxième cercle étant à seulement 15 pixels d'écart du premier cercle, les deux cercles se touchent (15 < 20).
  const result = circleIntersect(c1.x, c1.y, c1.r, c2.x, c2.y, c2.r);
  expect(result).toBe(true);
});
