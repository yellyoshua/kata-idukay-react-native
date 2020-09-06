export type RootStackParamList = {
  Home: undefined;
  NotFound: undefined;
};

export type HechiceroProps = {
  alias: string;
  name: string;
  avatar: any;
};

export type PotionProps = {
  alias: string;
  name: string;
  description: string;
  color: string;
  avatar: any;
};

export type GameStatsType = {
  potionsDamage: number[];
  damageTotal: number;
  combinations: number[];
};