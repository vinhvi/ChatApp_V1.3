import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class LoginScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require("../assets/images/logo_chatap.png")}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 40 }}
          >
            Đăng Nhập
          </Text>
          <TextInput
            placeholder="Nhập email hoặc số điện thoại"
            style={styles.textinput}
          ></TextInput>
          <TextInput
            placeholder="Nhập mật khẩu"
            style={styles.textinput}
          ></TextInput>
          <TouchableOpacity style={styles.DN} onPress={()=>{
            navigation.navigate("Root");
          }}>
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.DK}>
          <Text style={{ fontWeight: "bold" }}>Bạn chưa có tài khoản ?</Text>
          <Text
            style={{ fontWeight: "bold", marginLeft: 10, color: "#2847B7" }}
            onPress={()=>{
              navigation.navigate("SignUp");
            }}
          >
            Đăng ký ?
          </Text>
        </View>

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
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
