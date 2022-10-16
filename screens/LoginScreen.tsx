import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useForm, Controller } from "react-hook-form";
import React, { Component, useEffect, useState } from "react";
import CustomInput from "../components/CustomTextinput/CustomTextInput";
import CustomButton from "../components/CustomButton/CustomButton";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { loginRoute } from "../src/API";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const onSignInPressed = async (data: any) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const email = data.email;
      const password = data.password;
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      await axios.post(loginRoute, { email, password }, config);
      navigation.navigate("Root");
    } catch (errors) {
      Alert.alert("Oops", errors.message);
    }
    setLoading(false);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSignUpPress = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={styles.root}>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/images/logo_chatap.png")}
        />
      </View>
      <CustomInput
        name="email"
        placeholder="Nhập Email"
        control={control}
        rules={{ required: "Email không được trống" }}
        secureTextEntry={undefined}
      />
      <CustomInput
        name="password"
        placeholder="Password"
        secureTextEntry
        control={control}
        rules={{
          required: "Password trống",
          minLength: {
            value: 3,
            message: "Password phải có 8 ký tự",
          },
        }}
      />
      <CustomButton
        text={loading ? "Loading..." : "Sign In"}
        onPress={handleSubmit(onSignInPressed)}
        bgColor={undefined}
        fgColor={undefined}
      />
      <CustomButton
        text="Don't have an account? Create one"
        type="TERTIARY"
        onPress={onSignUpPress}
        bgColor={undefined}
        fgColor={undefined}
      />

      {/* <View style={{ marginTop: 20 }}>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 40 }}>
          Đăng Nhập
        </Text>
        <TextInput
          placeholder="Nhập email"
          style={styles.textinput}
          value={"email"}
        ></TextInput>
        <TextInput
          placeholder="Nhập mật khẩu"
          style={styles.textinput}
        ></TextInput>
        <TouchableOpacity
          style={styles.DN}
          onPress={() => {
            // navigation.navigate("Root");
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View> */}
      {/* <View style={styles.DK}>
        <Text style={{ fontWeight: "bold" }}>Bạn chưa có tài khoản ?</Text>
        <Text
          style={{ fontWeight: "bold", marginLeft: 10, color: "#2847B7" }}
          onPress={() => {
            // navigation.navigate("SignUp");
          }}
        >
          Đăng ký ?
        </Text>
      </View> */}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    marginTop: 50,
    width: 300,
    height: 200,
  },
  textinput: {
    marginTop: 20,
    height: 50,
    width: 300,
    borderBottomWidth: 1,
    fontSize: 18,
  },
  DN: {
    marginTop: 40,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#2847B7",
  },
  DK: {
    marginTop: 20,
    flexDirection: "row",
  },
});
