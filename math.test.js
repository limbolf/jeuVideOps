// ? Tests demandés dans le PDF

jest.mock("./js13k-2021/src/audio.js", () => ({
  __esModule: true,
  audioContext: { sampleRate: 44100 },
  default: jest.fn(),
}));

import {
  mapLinear,
  randFloatSpread,
  lerp,
  clamp,
  randFloat,
} from "./js13k-2021/src/math.js";

import { testScore, healthManager } from "./js13k-2021/src/maps";

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

// ? Tests unitaires persos

// * Lerp est l'abréviation de "Interpolation Linéaire", Définition de Wikipédia : L’interpolation linéaire est la méthode la plus simple pour estimer la valeur prise par une fonction continue entre deux points déterminés (interpolation). Elle consiste à utiliser pour cela la fonction affine (de la forme f(x) = m.x + b) passant par les deux points déterminés. Cette technique était d'un emploi systématique lorsque l'on ne disposait que de tables numériques pour le calcul avec les fonctions transcendantes : les tables comportaient d'ailleurs à cet effet en marge les « différences tabulaires », auxiliaire de calcul servant à l'interpolation linéaire.
// * Enfin l'interpolation linéaire est la base de la technique de quadrature numérique par la méthode des trapèzes. Dans ces tests nous allons voir si cette fonction retourne bien les informations correctes de départ/arrivée

test("Personnel 1 : lerp avec t=0 doit retourner la valeur de départ", () => {
  expect(lerp(10, 20, 0)).toBe(10);
});

test("Personnel 2 : lerp avec t=1 doit retourner la valeur d'arrivée", () => {
  expect(lerp(10, 20, 1)).toBe(20);
});

// * Le mappage linéaire (ou application linéaire) désigne une transformation mathématique qui préserve les opérations d'addition et de multiplication par un scalaire entre deux espaces vectoriels.  Il permet de relier des structures de données ou des espaces géométriques de manière proportionnelle, souvent représentée par une matrice ou une correspondance directe entre des vecteurs de base.

test("Personnel 3 : mapLinear avec x=a1 doit retourner b1", () => {
  expect(mapLinear(5, 5, 10, 100, 200)).toBe(100);
});

// * Fonction servant à limiter un nombre dans une intervalle donnée
test("Personnel 4 : clamp doit être dans l'intervalle min, max", () => {
  expect(clamp(40, 0, 10)).toBe(10);
  expect(clamp(-25, 0, 10)).toBe(0);
});

// * Fonction permettant de donner un nombre aléatoire
test("Personnel 5 : randFloat ne rend pas une valeur inférieur au minimum", () => {
  const result = randFloat(100, 200);
  expect(result).toBeGreaterThanOrEqual(100);
});

// ? Tests fonctionnels

test("Verification de la fonctionnalité du score", () => {
  expect((testScore.value = 0));
  expect((testScore.value += 100));
  expect(testScore.value).toBe(100);
});

test("Verification de la fonctionnalité lié à la vie", () => {
  expect((healthManager.value = 100));
  const damage = 20;
  healthManager.value -= damage;
  expect(healthManager.value).toBe(80);
});

test("Verification de l'affichage de l'écran de mort", () => {
  document.body.innerHTML = '<div class="e" hidden></div>';
  healthManager.value = 10;

  const takeDamage = (damage) => {
    healthManager.value -= damage;
    if (healthManager.value <= 0) {
      document.querySelector(".e").hidden = false;
    }
  };
  takeDamage(15);
  expect(document.querySelector(".e").hidden).toBe(false);
});
