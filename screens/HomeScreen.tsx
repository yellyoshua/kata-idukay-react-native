import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { RootStackParamList, HechiceroProps } from '../types';
import SelectPlayer from "../components/SelectPlayer/SelectPlayerComponent";
import StorePotions from "../components/StorePotions/StorePotionsComponent";

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Home'>) {
  const [currentTab, setCurrentTab] = React.useState("");
  const [player, setPlayer] = React.useState<HechiceroProps | null>(null);

  React.useEffect(function () {
    if (player) {
      setCurrentTab("store");
    }
  }, [player]);

  if (Boolean(currentTab.includes("store")) && player) {
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <View style={styles.container}>
          <StorePotions player={player} resetPlayer={setPlayer} />
        </View>
      </ScrollView>
    )
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
      <View style={styles.container}>
        <SelectPlayer setPlayer={setPlayer} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#282c34'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
