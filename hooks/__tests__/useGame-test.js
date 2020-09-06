import { createGameStats, createAttacksStats, damageRules } from '../useGame';

describe('useGame hook funtions', () => {
  describe("attacksStats function", () => {
    test("should be returned the combinations of the Case 1", () => {
      const potions = ["roja", "roja", "azul", "verde"];
      const attacksStats = createAttacksStats(potions, []);
      expect(attacksStats).toStrictEqual([3, 1]);
    })

    test("should be returned the combinations of the Case 2", () => {
      const potions = ["roja", "roja", "azul", "azul", "verde", "amarilla", "gris"];
      const attacksStats = createAttacksStats(potions, []);
      expect(attacksStats).toStrictEqual([5, 1, 1]);
    });

    test("should be returned the combinations of the Case 3", () => {
      const potions = ["roja", "roja", "azul", "azul", "verde", "verde", "amarilla", "gris"];
      const attacksStats = createAttacksStats(potions, []);
      expect(attacksStats).toStrictEqual([5, 2, 1]);
    });
  });

  describe("gameStats function", () => {
    test("should be PASS the Case 1", () => {
      const potions = ["roja", "roja", "azul", "verde"];
      const gameStats = createGameStats(potions, damageRules);

      expect(gameStats.potionsDamage).toStrictEqual([10, 3]);
      expect(gameStats.damageTotal).toStrictEqual(13);
      expect(gameStats.combinations).toStrictEqual([3, 1]);
    });

    test("should be PASS the Case 2", () => {
      const potions = ["roja", "roja", "azul", "azul", "verde", "amarilla", "gris"];
      const gameStats = createGameStats(potions, damageRules);

      expect(gameStats.potionsDamage).toStrictEqual([25, 3, 3]);
      expect(gameStats.damageTotal).toStrictEqual(31);
      expect(gameStats.combinations).toStrictEqual([5, 1, 1]);
    });

    test("should be PASS the Case 3", () => {
      const potions = ["roja", "roja", "azul", "azul", "verde", "verde", "amarilla", "gris"];
      const gameStats = createGameStats(potions, damageRules);

      expect(gameStats.potionsDamage).toStrictEqual([25, 5, 3]);
      expect(gameStats.damageTotal).toStrictEqual(33);
      expect(gameStats.combinations).toStrictEqual([5, 2, 1]);
    });
  });
});