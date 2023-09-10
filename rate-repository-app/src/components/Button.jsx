import { TouchableOpacity, View, StyleSheet } from "react-native";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
  },
});

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={{ color: "white" }} fontWeight="bold">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
