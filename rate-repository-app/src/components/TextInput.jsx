import { TextInput as NativeTextInput } from "react-native";

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  console.log("lolool", props);
  if (props.placeholder.includes("password")) {
    return (
      <NativeTextInput style={textInputStyle} {...props} secureTextEntry />
    );
  }

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
