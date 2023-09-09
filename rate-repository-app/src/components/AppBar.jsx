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
});

const AppBar = () => {
  const tabData = [
    {
      name: "Repositories",
      path: "/",
    },
    {
      name: "Sign in",
      path: "/signin",
    },
  ];
  return (
    <View style={styles.container}>
      <Pressable>
        <AppBarTab tabData={tabData} />
      </Pressable>
    </View>
  );
};

export default AppBar;
