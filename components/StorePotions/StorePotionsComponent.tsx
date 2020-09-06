import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import useGame from "../../hooks/useGame"
import { PotionProps, HechiceroProps, GameStatsType } from '../../types';

export default function StorePotions({ player, resetPlayer }: { player: HechiceroProps; resetPlayer: (val: null) => void }) {
  const [potions, setPotion] = React.useState<PotionProps[]>([]);
  const [gameStats, setGameStats] = React.useState<GameStatsType | null>(null);
  const { gameResult, resetGame } = useGame();

  const addPotion = (potion: PotionProps) => {
    setPotion([...potions, potion]);
  };

  const startFigth = () => {
    const gameStats = gameResult(potions);
    setPotion([]);
    setGameStats(gameStats);
  }

  const endFigth = () => {
    resetGame(() => {
      setGameStats(null);
      resetPlayer(null);
    });
  }

  if (gameStats) {
    return <View style={styles.container}>
      <Text style={styles.title}>GAME STATS</Text>

      <View style={styles.gameStats}>
        {gameStats.combinations.map((combination, index) => {

          const isPlural = Boolean(combination > 1);

          return (
            <Text style={styles.gameStatsAttacks} key={index}>
              Ataque {index + 1}: usar
              {isPlural ? ` ${combination} ` : " una "}
              {isPlural ? " pociones " : " poción "}
              {isPlural && " distintas "}
              {isPlural ? " causan " : " causa "} un {gameStats.potionsDamage[index]}% de daño.
            </Text>
          )
        })}
        <Text style={styles.gameStatsTotal}>Total: {player && player.name} ha causado un {gameStats.damageTotal}% de daño.</Text>
      </View>

      <TouchableOpacity style={styles.attackButton} onPress={endFigth}>
        <Text style={styles.attackButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  }

  return <View style={styles.container}>
    <Text style={styles.title}>
      Store of Potions
    </Text>
    {
      Boolean(potions.length) && (
        <View style={styles.gameStartContainer}>
          <Text style={styles.bagPotions}>{potions.length}</Text>
          <Text style={styles.bagPotions}>{potions.length === 1 ? "Potion" : "Potions"}</Text>
          <TouchableOpacity style={styles.attackButton} onPress={startFigth}>
            <Text style={styles.attackButtonText}>Attack</Text>
          </TouchableOpacity>
        </View>
      )
    }
    <View style={styles.row}>
      {
        [
          {
            alias: "true-love",
            name: "True love!",
            description: "Con esta poción caerá rendido/a a tus pies.",
            color: "red",
            avatar: "https://raw.githubusercontent.com/yellyoshua/kata-idukay-react/master/src/icons/potions/love-potion.png"
          },
          {
            alias: "false-illusions",
            name: "False illusions",
            description: "Corromperás su alma.",
            color: "blue",
            avatar: "https://raw.githubusercontent.com/yellyoshua/kata-idukay-react/master/src/icons/potions/illusions-potion.png"
          },
          {
            alias: "fake-friends",
            name: "Fake friends",
            description: "Lastimarás su simpatía.",
            color: "green",
            avatar: "https://raw.githubusercontent.com/yellyoshua/kata-idukay-react/master/src/icons/potions/fake-friends-potion.png"
          },
          {
            alias: "blessed-ignorance",
            name: "Blessed ignorance",
            description: "Acabarás con su carrera.",
            color: "yellow",
            avatar: "https://raw.githubusercontent.com/yellyoshua/kata-idukay-react/master/src/icons/potions/ignorance-potion.png"
          },
          {
            alias: "defame",
            name: "Defame",
            description: "Acabarás con su orgullo.",
            color: "gray",
            avatar: "https://raw.githubusercontent.com/yellyoshua/kata-idukay-react/master/src/icons/potions/defame-potion.png"
          }
        ].map((potion: PotionProps, index: number) => (
          <PotionCard key={index} potion={potion} onPressed={addPotion} />
        ))
      }
    </View>
  </View>
}

export function PotionCard({ potion, onPressed }: { potion: PotionProps; onPressed?: (potion: PotionProps) => void }) {
  return <TouchableOpacity style={styles.potionCard} onPress={() => {
    if (onPressed) {
      onPressed(potion)
    }
  }}>
    <View style={[styles.underline, { backgroundColor: potion.color }]} />
    <Image style={styles.potionCardImage} resizeMode="cover" source={{ uri: potion.avatar }} />
    <Text style={styles.potionCardTitle}>{potion.name}</Text>
    <Text style={styles.potionCardDescription}>{potion.description}</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#fff",
    textAlign: "center"
  },
  row: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  potionCard: {
    width: 150,
    margin: 10,
    padding: 10,
    backgroundColor: "#33363e",
    borderRadius: 10,
    textAlign: "center"
  },
  underline: {
    width: '100%',
    height: 2,
    marginBottom: 10
  },
  potionCardImage: {
    width: 120,
    height: 120,
    marginHorizontal: "auto"
  },
  potionCardTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    paddingVertical: 10
  },
  potionCardDescription: {
    fontSize: 15,
    color: "#fff",
    paddingVertical: 10
  },
  gameStartContainer: {
    flex: 1,
    height: 42,
    flexDirection: "row",
    justifyContent: 'space-around',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    padding: 10
  },
  bagPotions: {
    fontSize: 17,
    color: 'black',
    fontWeight: "bold"
  },
  attackButton: {
    backgroundColor: "#FF5722",
    borderRadius: 10,
    padding: 10
  },
  attackButtonText: {
    fontSize: 17,
    color: 'white',
    fontWeight: "bold"
  },
  gameStats: {
    marginVertical: 10
  },
  gameStatsAttacks: {
    fontSize: 17,
    color: 'white',
    marginVertical: 10
  },
  gameStatsTotal: {
    fontSize: 17,
    color: 'white',
    fontWeight: "bold"
  },

});