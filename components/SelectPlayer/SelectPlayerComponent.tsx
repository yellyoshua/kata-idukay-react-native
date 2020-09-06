import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image, ImageSourcePropType } from 'react-native';
import { HechiceroProps } from "../../types";

export default function SelectPlayer({ setPlayer }: { setPlayer: (val: HechiceroProps) => void }) {

  return <View style={styles.container}>
    <Text style={styles.title}>
      Select your player
    </Text>
    <View style={styles.row}>
      {
        [
          { alias: "smurf", name: "Smurf", avatar: "https://raw.githubusercontent.com/yellyoshua/kata-idukay-react/master/src/icons/avatars/smurf.png" },
          { alias: "thor", name: "Thor", avatar: "https://raw.githubusercontent.com/yellyoshua/kata-idukay-react/master/src/icons/avatars/thor.png" },
          { alias: "wonder-woman", name: "Wonder Woman", avatar: "https://raw.githubusercontent.com/yellyoshua/kata-idukay-react/master/src/icons/avatars/wonder-woman.png" },
          { alias: "wizard-original", name: "Wizard Original", avatar: "https://raw.githubusercontent.com/yellyoshua/kata-idukay-react/master/src/icons/avatars/wizard-original.png" },
        ].map((player: HechiceroProps, index: number) => (
          <PlayerCard key={index} player={player} onPressed={setPlayer} />
        ))
      }
    </View>
  </View>
}

export function PlayerCard({ player, onPressed }: { player: HechiceroProps; onPressed?: (player: HechiceroProps) => void }) {
  return <TouchableOpacity style={styles.playerCard} onPress={() => {
    if (onPressed) {
      onPressed(player)
    }
  }}>
    <Image style={styles.playerCardImage} resizeMode="cover" source={{ uri: player.avatar }} />
    <Text style={styles.playerCardTitle}>{player.name}</Text>
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
  playerCard: {
    width: 150,
    margin: 10,
    padding: 10,
    backgroundColor: "#33363e",
    borderRadius: 10,
    textAlign: "center"
  },
  playerCardImage: {
    width: 120,
    height: 120,
    marginHorizontal: "auto"
  },
  playerCardTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    paddingVertical: 10
  }
});