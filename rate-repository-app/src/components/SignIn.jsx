import FormikTextInput from "./FormikTextInput";

import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import Button from "./Button";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const initialValues = {
  username: "",
  password: "",
};

const LoginForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
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
