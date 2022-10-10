import React from "react";
import { Message } from "../../types";
import { Text, View } from "react-native";
import moment from "moment";
import style from "../ChatMessage/style";

export type ChatMessageProps = {
  message: Message;
};

const ChatMessage = (props: ChatMessageProps) => {
  const { message } = props;
  const isMyMessage = () => {
    return message.user.id == "u1";
  };
  return (
    <View style={style.container}>
      <View
        style={[
          style.messageBox,
          {
            backgroundColor: isMyMessage() ? "#DCF8C5" : "white",
            marginRight: isMyMessage() ? 0 : 50,
            marginLeft: isMyMessage() ? 50 : 0,
          },
        ]}
      >
        {!isMyMessage() && <Text style={style.name}>{message.user.name}</Text>}
        <Text style={style.message}>{message.content}</Text>
        <Text style={style.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};
export default ChatMessage;
