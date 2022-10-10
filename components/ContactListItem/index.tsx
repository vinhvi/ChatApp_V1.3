
import React from "react";
import { View, Text, Image, TouchableNativeFeedback } from "react-native";
import { User } from "../../types";
import style from "./style";

export type ContactListItemProps = {
  user: User;
};
const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;
  const onclick = () => {};

  return (
    <TouchableNativeFeedback onPress={onclick}>
      <View style={style.container}>
        <View style={style.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={style.avatar} />
          <View style={style.midContainer}>
            <Text style={style.username}>{user.name}</Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
export default ContactListItem;
