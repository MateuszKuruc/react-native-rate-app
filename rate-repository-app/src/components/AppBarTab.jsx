import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

const AppBarTab = ({ tabNames }) => {
  const tabs = tabNames;

  return tabs.map((tab) => (
    <View key={tab}>
      <Text style={styles.text}>{tab}</Text>
    </View>
  ));
};

export default AppBarTab;
