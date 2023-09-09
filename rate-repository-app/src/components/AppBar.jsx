import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    padding: 12,
    height: 80,
    justifyContent: "flex-end",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  tabContainer: {
    flexDirection: "row",
    gap: 12,
  },
});

const AppBar = () => {
  const tabNames = ["Repositories", "Sign in"];
  return (
    <View style={styles.container}>
      <Pressable style={styles.tabContainer}>
        <AppBarTab tabNames={tabNames} />
      </Pressable>
    </View>
  );
};

export default AppBar;
