import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  field: {
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
    borderWidth: 1,
    fontFamily: theme.fonts.main,
    padding: 10,
    marginVertical: 10,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.field, style];

  console.log("lolool", props);
  if (props.placeholder.includes("password")) {
    return (
      <NativeTextInput style={textInputStyle} {...props} secureTextEntry />
    );
  }

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
