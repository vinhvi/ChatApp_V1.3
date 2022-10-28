import { FlatList, ImageBackground } from "react-native";
import ChatMessage from "../components/ChatMessage";
import InputBox from "../components/InputBox";
import BG from "../assets/images/BG.png";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import io from "socket.io-client";
import { host } from "../src/API";

const ChatRoomScreen = () => {
  const socket = io(host);
  // const [messages, setMessages] = useState([]);
  // const [socketConnected, setSocketConnected] = useState(false);
  const [chatRooms, setChatRooms] = useState();
  let STORAGE_KEY = "@user_input";
  let STORAGE_KEY2 = "@chatID";

  const getMessage = async () => {
    try {
      const token = await AsyncStorage.getItem(STORAGE_KEY);
      const chatID2 = await AsyncStorage.getItem(STORAGE_KEY2);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const { data } = await axios.get(
        `http:192.168.1.33:5000/api/message/${chatID2}`,
        config
      );
      setChatRooms(data);
      socket.emit("join chat", chatID2);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMessage();
  }, []);
  useEffect(() => {
    socket.on("message recieved", (newMessageRecieved) => {
      setChatRooms(newMessageRecieved);
    });
  }, []);
  return (
    <ImageBackground source={BG} style={{ width: "100%", height: "100%" }}>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />
      <InputBox />
    </ImageBackground>
  );
};
export default ChatRoomScreen;
