import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Root() {
  return (
    <View>
      <Text>Teste</Text>
      <Link
        href={"/welcome"}
        style={{ color: "red", textDecorationLine: "underline" }}
      >
        CLIQUE AQUI
      </Link>
    </View>
  );
}
