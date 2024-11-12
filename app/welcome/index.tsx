import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { style } from "./styles";

export default function WelcomeScreen() {
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Text style={styles.customFont}>Seja bem-vindo(a) ao Ecovoix!</Text>
      </View>
      <View>
        <Text style={styles.customFont}>
          O projeto que visa tornar a sustentabilidade mais divertida!
        </Text>
        <Link href={"/welcome2"}>Teste</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  customFont: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
  },
});
