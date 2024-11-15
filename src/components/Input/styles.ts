import { Button, Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  boxInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    backgroundColor: themes.colors.lightGray,
    borderColor: themes.colors.lightGray,
  },
  input: {
    height: "100%",
    width: "90%",
    borderRadius: 40,
    paddingLeft: 5,
  },

  titleInput: {
    marginLeft: 5,
    marginTop: 20,
    color: themes.colors.gray,
  },
  Button: {
    width: "10%",
  },
  Icon: {
    width: "100%",
  },
});
