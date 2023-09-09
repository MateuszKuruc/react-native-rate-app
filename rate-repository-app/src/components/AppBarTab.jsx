import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  container: {
    flexDirection: "row",
    gap: 12,
  },
});

const AppBarTab = ({ tabData }) => {
  const tabs = tabData;
  console.log(tabData);

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <Link key={tab.name} to={tab.path}>
          <Text style={styles.text}>{tab.name}</Text>
        </Link>
      ))}
    </View>
  );
};

export default AppBarTab;
