import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";

const WelcomeScreen = () => {
  return (
    <Swiper loop={false} showsPagination={true}>
      <View style={styles.slide}>
        <Text style={styles.title}>Seja bem-vindo(a) a Ecovoix!</Text>
        <Text style={styles.subtitle}>
          O projeto que visa tornar a sustentabilidade divertida
        </Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.title}>Ecovoix</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.push("/login");
          }}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.push("/cadastro");
          }}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#34CB3E",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#34CB3E",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    width: Dimensions.get("window").width * 0.8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    color: "#34CB3E",
    fontSize: 16,
    marginTop: 15,
  },
});

export default WelcomeScreen;
