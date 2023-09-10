import FormikTextInput from "./FormikTextInput";

import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import Button from "./Button";

import * as yup from "yup";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Username needs to be at least 4 characters long!")
    .max(20, "Username cannot be longer than 20 characters!")
    .required("Username is required!"),
  password: yup
    .string()
    .min(6, "Password needs to be at least 6 characters long!")
    .max(20, "Password cannot be longer than 20 characters!")
    .required("Password is required!"),
});

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
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
