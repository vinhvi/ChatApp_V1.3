import { useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet } from "react-native";
import ChatListItem from "../components/ChatListItem";
import { View } from "../components/Themed";
import chatRooms from "../data/ChatRooms";
import { RootTabScreenProps } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import { getChatRom } from "../src/API";
export default function ChatScreen({
  navigation,
}: RootTabScreenProps<"Chats">) {
  const ENDPOINT = "http:192.168.1.25:5000";
  var socket = io();
  const [chatRooms, setChatRooms] = useState();
  const [socketConnected, setSocketConnected] = useState(false);
  let STORAGE_KEY = "@user_input";
  let STORAGE_KEY2 = "@chatID";
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.on("connected", () => setSocketConnected(true)); // client nhận được rồi mơi save dô client
  }, []);

  useEffect(() => {
    const abcd = async () => {
      try {
        const token = await AsyncStorage.getItem(STORAGE_KEY);
        const chatID2 = await AsyncStorage.getItem(STORAGE_KEY2);
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        const { data } = await axios.get(getChatRom, config);
        setChatRooms(data);
        socket.emit("join chat", chatID2);
      } catch (e) {
        console.log(e);
      }
    };

    abcd();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
