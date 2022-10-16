import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";
import React, { Component, useState } from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../components/CustomTextinput/CustomTextInput";
import CustomButton from "../components/CustomButton/CustomButton";
import navigation from "../navigation";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { singupRoute } from "../src/API";

export default function SignUpScreen() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignUpPress = () => {
    navigation.navigate("Login");
  };

  const onSignUpressed = async (data: any) => {
    setLoading(true);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const password2 = data.password2;
    const image =
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";
    if (password != password2) {
      Alert.alert("Lỗi password nhập lại không khớp ");
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      await axios.post(singupRoute, { name, email, password, image }, config);
      Alert.alert("Đăng ký thành công!!");
      navigation.navigate("Login");
    } catch (errors) {
      Alert.alert("Lỗi", errors.message);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 35, marginTop: 20 }}>
          Đăng Ký
        </Text>
      </View>
      <CustomInput
        name="name"
        placeholder="Nhập Name"
        control={control}
        rules={{ required: "Name không được trống" }}
        secureTextEntry={undefined}
      />
      <CustomInput
        name="email"
        placeholder="Nhập Email"
        control={control}
        rules={{ required: "Email không được trống" }}
        secureTextEntry={undefined}
      />
      <CustomInput
        name="password"
        placeholder="Nhập password"
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
      <CustomInput
        name="password2"
        placeholder="Nhập lại password"
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
        text={loading ? "Loading..." : "Đăng ký"}
        onPress={handleSubmit(onSignUpressed)}
        bgColor={undefined}
        fgColor={undefined}
      />
      <CustomButton
        text="Bạn đã có tài khoản ? Đăng nhập ?"
        type="TERTIARY"
        onPress={onSignUpPress}
        bgColor={undefined}
        fgColor={undefined}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  textinput: {
    fontSize: 20,
    fontWeight: "bold",
    borderBottomWidth: 1,
    width: 300,
    height: 50,
    marginTop: 10,
  },
  viewtxtInput: {
    marginTop: 15,
    paddingVertical: 15,
  },
  DK: {
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#2e78b7",
    alignItems: "center",
  },
});
