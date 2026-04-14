// ? Test demandés dans le PDF

import { mapLinear, randFloatSpread, lerp } from "./js13k-2021/src/math.js";

test("Annexe: randFloatSpread(1) <= 1", () => {
  expect(randFloatSpread(1)).toBeLessThanOrEqual(1);
});

test("Annexe: randFloatSpread(1) >= -1", () => {
  expect(randFloatSpread(1)).toBeGreaterThanOrEqual(-1);
});

test("mapLinear retourne 3", () => {
  expect(mapLinear(1, 2, 3, 4, 5)).toBe(3);
});

test("map linear retourne 0.882352941176471", () => {
  expect(mapLinear(1, 20, 3, 40, 5)).toBeCloseTo(0.882352941176471, 10);
});

test("lerp retourne 41", () => {
  expect(lerp(1, 3, 20)).toBe(41);
});

test("lerp retourne -15.3", () => {
  expect(lerp(1.3, -7, 2)).toBeCloseTo(-15.3, 1);
});

// * Lors des ".toBeCloseTo", le 1 ou le 10 donnent le montant de nombres après la virgule à arrondir, donc pour l'exemple juste au dessus, la fonction va arrondir à 1 chiffre après la virgule.

// ? Test unitaires persos

// TODO : Ajouter un deuxième jeu et faire les tests unitaires de l'annexe.
