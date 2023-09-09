import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    alignItems: "flex-end",
    flexGrow: 1,
    flexDirection: "row",
    backgroundColor: "#24292e",
    padding: 12,
    height: 80,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

const AppBar = () => {
  const tabNames = ["Repositories", "Sign in"];
  return (
    <View style={styles.container}>
      <Pressable>
        {/* <Text style={styles.text}>Repositories</Text> */}
        <AppBarTab tabNames={tabNames} />
      </Pressable>
    </View>
  );
};

export default AppBar;
