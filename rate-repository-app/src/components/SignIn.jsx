import Text from "./Text";
import FormikTextInput from "./FormikTextInput";

import { Pressable, View, StyleSheet, Button } from "react-native";
import { Formik } from "formik";

const initialValues = {
  username: "",
  password: "",
};

const LoginForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="username" />
      <FormikTextInput name="password" placeholder="password" />
      <Button title="Sign in" onPress={onSubmit} />
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
