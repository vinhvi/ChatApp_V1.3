import { FlatList, ImageBackground } from "react-native";
import ChatMessage from "../components/ChatMessage";
import InputBox from "../components/InputBox";
import ChatRooms from "../data/Chats";
import BG from "../assets/images/BG.png"

const ChatRoomScreen = () => {
  return (
    <ImageBackground source={BG} style={{ width: "100%", height: "100%" }}>
      <FlatList
        data={ChatRooms.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />
      <InputBox />
    </ImageBackground>
  );
};
export default ChatRoomScreen;
