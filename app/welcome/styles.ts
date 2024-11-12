import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppins-Bold",
  },
  boxTop: {
    height: Dimensions.get("window").height / 10,
    fontFamily: "Poppins",
    fontWeight: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
