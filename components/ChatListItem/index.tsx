import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import { View, Text, Image, TouchableNativeFeedback } from "react-native";
import { ChatRoom } from "../../types";
import style from "./style";

export type ChatRoomProps = {
  chatRoom: ChatRoom; 
};
const ChatListItem = (props: ChatRoomProps) => {
  const { chatRoom } = props;
  const navigation = useNavigation();
  const user = chatRoom.users[1];
  const onclick = () => {
    navigation.navigate("ChatRoom", {
      id: chatRoom.id,
      name: user.name,
    })
  };

  return (
    <TouchableNativeFeedback onPress={onclick}>
      <View style={style.container}>
        <View style={style.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={style.avatar} />
          <View style={style.midContainer}>
            <Text style={style.username}>{user.name}</Text>
            <Text numberOfLines={2} style={style.lastMessage}>
              {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>
        <Text style={style.time}>
          {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};
export default ChatListItem;
