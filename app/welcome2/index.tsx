import { StyleSheet, Text, View } from "react-native";

export default function welcome2() {
  return (
    <View style={styles.container}>
      <Text>Olá</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    color: "red",
  },
  customFont: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
  },
});
