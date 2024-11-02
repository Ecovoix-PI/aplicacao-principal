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
import { style } from "./styles";
// import Logo from "../../assets/logo.png";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { Input } from "../../components/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  async function getLogin() {
    try {
      setLoading(true);

      if (!email || !password) {
        setLoading(false);
        return Alert.alert("Atenção!", "Informe os campos obrigatórios");
      }
      setTimeout(() => {
        if (email == "teste@gmail.com" && password === "teste123") {
          Alert.alert("Login bem sucedido!");
        } else {
          Alert.alert("Atenção!", "Usuário ou senha incorretos");
        }
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Text style={style.text}>Ecovoix</Text>
        <Text style={style.text}>Seja bem-vindo(a)</Text>
      </View>
      <View style={style.boxMid}>
        <Input
          title="Endereço de e-mail"
          value={email}
          onChangeText={setEmail}
          IconRigth={MaterialIcons}
          iconRightName="email"
        />
        <Input
          title="Senha"
          value={password}
          onChangeText={setPassword}
          IconRigth={Octicons}
          iconRightName={showPassword ? "eye-closed" : "eye"}
          secureTextEntry={showPassword}
          onIconRigthPress={() => setShowPassword(!showPassword)}
        />
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
