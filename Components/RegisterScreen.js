import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { AppForm, AppFormField, SubmitButton } from "./CustomComponents/form";
import * as Yup from "yup";
import {
  createUserWithEmailAndPassword,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import UserContext from "../utility/context/userContex";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = async ({ name, email, password }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const res = await addDoc(collection(db, "users"), {
        name,
        email,
        password,
        userId: auth.currentUser.uid,
        createdAt:auth.currentUser.metadata.creationTime
      });
      console.log(res)
      setUser({
        name,
        email,
        password,
        userId: auth.currentUser.uid,
        metaData: auth.currentUser.metadata,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{ email: "", password: "", name: "" }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name="name" icon="account" placeholder="Name" />
        <AppFormField
          name="email"
          icon="email"
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          icon="lock"
          placeholder="Password"
          autoCorrect={false}
          autoCapitalize="none"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="Register" />
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default RegisterScreen;
