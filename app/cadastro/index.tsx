import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import cadastroBackground from "../../assets/cadastro/cadastro-background.png";
import logo from "../../assets/cadastro/logo.png";
import { Link, router } from "expo-router";

export default function RegisterPage() {
  return (
    <ImageBackground
      source={cadastroBackground}
      style={styles.background}
      imageStyle={styles.image}
    >
      <KeyboardAvoidingView
        style={styles.overlay}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.fundo}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputtext}>Nome completo</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputtext}>Email</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputtext}>Nome de usuário</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputtext}>Criar senha</Text>
              <TextInput style={styles.input} secureTextEntry />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputtext}>Confirmar senha</Text>
              <TextInput style={styles.input} secureTextEntry />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Link href={"/login"}>
                <Text style={styles.label}>Possuo cadastro &gt;</Text>
              </Link>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  logo: {
    position: "absolute",
    top: 5,
    zIndex: 1,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  image: {
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fundo: {
    width: 370,
    padding: 20,
    backgroundColor: "white",
    opacity: 1,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  inputContainer: {
    marginBottom: 15,
    width: "100%",
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
  },
  inputtext: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
  },
  button: {
    width: 188,
    height: 45,
    backgroundColor: "#34CB3E",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginTop: 15,
  },
});
