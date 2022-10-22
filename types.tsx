import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  ChatRoom: undefined;
  Contact: undefined;
  Camera: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
export type User = {
  id: String;
  name: string;
  pic: string;
};

export type Message = {
  id: String;
  content: string;
  createdAt: string;
  user: User;
};
export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
};
