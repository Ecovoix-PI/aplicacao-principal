import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { style } from "../styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import { themas } from "../../global/themes";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);

      if (!email || !password) {
        return Alert.alert("Atenção!", "Informe os campos obrigatórios");
      }
      setTimeout(() => {
        if (email == "teste@gmail.com" && password === "teste123")
          Alert.alert("Login bem sucedido!");
        else Alert.alert("Atenção!", "Usuário ou senha incorretos");
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Text style={style.text}>Ecovoix</Text>
        {/* <Image source={Logo} style={style.logo} resizeMode="contain" /> */}
        <Text style={style.text}>Seja bem-vindo(a)</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.titleInput}>Endereço de e-mail</Text>
        <View style={style.boxInput}>
          <TextInput
            value={email}
            style={style.input}
            onChangeText={(e) => setEmail(e)}
          />
          <MaterialIcons name="email" size={20} color={themas.colors.gray} />
        </View>
        <Text style={style.titleInput}>Senha</Text>
        <View style={style.boxInput}>
          <TextInput
            value={password}
            style={style.input}
            onChangeText={setPassword}
          />
          <MaterialIcons
            name="remove-red-eye"
            size={20}
            color={themas.colors.gray}
          />
        </View>
      </View>
      <View style={style.boxBottom}>
        <TouchableOpacity style={style.button} onPress={() => getLogin()}>
          {loading ? (
            <ActivityIndicator color={"#FFFF"} size={"small"} />
          ) : (
            <Text style={style.textButton}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>
      <Text style={style.textBottom}>
        Não possuí uma conta?{" "}
        <Text style={{ color: themas.colors.primary }}>Crie agora!</Text>
      </Text>
    </View>
  );
}
