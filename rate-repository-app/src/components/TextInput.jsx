import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  field: {
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    fontFamily: theme.fonts.main,
    padding: 10,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.field, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
