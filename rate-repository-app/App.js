import Main from "./src/components/Main";
import RepositoryList from "./src/components/RepositoryList";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "lightgrey",
  },
});

const App = () => {
  return (
    <View style={styles.wrapper}>
      <Main />
      <RepositoryList />
    </View>
  );
};

export default App;
