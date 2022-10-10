import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { Component } from "react";

export default class SignUpScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 35,marginTop:20, }}>Đăng Ký</Text>
        </View>
        <View style={styles.viewtxtInput}>
          <TextInput
            placeholder="Họ và Tên"
            style={styles.textinput}
          ></TextInput>
          <TextInput
            placeholder="Năm Sinh"
            style={styles.textinput}
          ></TextInput>
          <TextInput
            placeholder="Giới Tính"
            style={styles.textinput}
          ></TextInput>
          <TextInput
            placeholder="Số điện thoại"
            style={styles.textinput}
          ></TextInput>
          <TextInput placeholder="Email" style={styles.textinput}></TextInput>
          <TextInput
            placeholder="Mật khẩu"
            style={styles.textinput}
          ></TextInput>
          <TextInput
            placeholder="Nhập lại mật khẩu"
            style={styles.textinput}
          ></TextInput>
          <TouchableOpacity style={styles.DK}>
            <Text style={{ color: "white", fontSize: 25 }}>Đăng Ký</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold" }}>Bạn đã có tài khoản ?</Text>
          <Text
            style={{ fontWeight: "bold", marginLeft: 10, color: "#2847B7" }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Đăng nhập ?
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
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
