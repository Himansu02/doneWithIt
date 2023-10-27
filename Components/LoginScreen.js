import React, { useContext, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  SubmitButton,
} from "./CustomComponents/form/index";
import { getIdToken, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase";
import ErrorMessage from "./CustomComponents/ErrorMessage";
import { collection, getDoc,doc, getDocFromServer, query, where, getDocs} from "firebase/firestore";
import UserContext from "../utility/context/userContex";
import storage from "../utility/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const [error, setError] = useState(false);
  const {user,setUser}=useContext(UserContext)
  const [loading,setLoading]=useState(false)

  const handleSubmit = async ({ email, password }) => {
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const colRef=collection(db,'users')
      const q=query(colRef,where("userId","==",auth.currentUser.uid))
      const tokenId=await auth.currentUser.getIdToken()
      console.log(tokenId)
      const querySnapshot=await getDocs(q)
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          console.log(doc.id)
          setUser({...doc.data(),id:doc.id})
        });
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false)
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
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
        <ErrorMessage error="Invalid email or password." visible={error} />
        <SubmitButton title="Login" loading={loading}/>
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    padding: 10,
  },
});

export default LoginScreen;
