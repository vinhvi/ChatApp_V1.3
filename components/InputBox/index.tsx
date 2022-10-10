import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import style from "../InputBox/style";

const InputBox = () => {
  const [message, setMessage] = useState("");
  const onMicroPhone = () => {
    console.warn("on the microphone for you !!");
  };
  const sendMessage = () => {
    console.warn({message});
    setMessage("");
  };
  const onPress = () => {
    if (!message) {
      onMicroPhone();
    } else {
      sendMessage();
    }
  };
  return (
    <View style={style.container}>
      <View style={style.mainContainer}>
        <FontAwesome5 name="laugh" size={24} color="black" />
        <TextInput
          placeholder="type a message"
          style={style.textInput}
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <Entypo name="attachment" size={24} color="black" style={style.icon} />
        {!message && (
          <AntDesign name="camera" size={24} color="black" style={style.icon} />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={style.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" size={24} color="white" />
          ) : (
            <MaterialIcons name="send" size={24} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default InputBox;
