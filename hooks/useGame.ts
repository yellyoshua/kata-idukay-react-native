import { PotionProps } from "../types";

export default function useGame() {
  const gameResult = (potions: PotionProps[]) => {
    const potionsAlias = potions.map(val => val.alias) || [];
    const gameStats = createGameStats(potionsAlias, damageRules);
    return gameStats;
  }
  const resetGame = (cb: () => void) => cb();
  return {
    gameResult,
    resetGame
  }
}

export const damageRules = (potionsCombinations: number): number => {
  switch (potionsCombinations) {
    case 1:
      return 3;
    case 2:
      return 5;
    case 3:
      return 10;
    case 4:
      return 20;
    case 5:
      return 25;
    default:
      return (potionsCombinations - 1) * 5;
  }
}

export const createAttacksStats = (potions: string[], lastAttack: number[]): number[] => {
  let newPotions = potions;
  let currentAtack: string[] = [];

  for (let index = 0; index < newPotions.length; index++) {
    const currentPotion = newPotions[index];

    if (Boolean(!currentAtack.includes(currentPotion))) {
      currentAtack.push(currentPotion);
      newPotions = newPotions.filter((val, i) => (i !== index));
      index = 0;
    }
  }
  const beUnderAtack = Boolean(newPotions.length);

  if (beUnderAtack) {
    return createAttacksStats(newPotions, [...lastAttack, currentAtack.length])
  }
  return [...lastAttack, currentAtack.length];
}

export const createGameStats = (potions: string[], cb: (i: number) => number): { potionsDamage: number[]; damageTotal: number; combinations: number[] } => {
  let newPotions = potions || [];
  const attacksStats = createAttacksStats(newPotions, []);
  const potionsDamage = attacksStats.map(cb);

  return {
    potionsDamage,
    damageTotal: potionsDamage.reduce((a, b) => a + b),
    combinations: attacksStats
  };
}