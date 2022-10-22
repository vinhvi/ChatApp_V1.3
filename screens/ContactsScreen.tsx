import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ContactListItem from "../components/ContactListItem";
import { View } from "../components/Themed";
// import { ChatState } from "../Context/ChatProvider";
export default function ContactsScreen() {
  // const { user } = ChatState();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const fetchUsers = async () => {
      try {
        const usersData = await axios.get(
          "http: 192.168.1.25:5000/api/user/getAllUser",
          config
        );
        setUsers(usersData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={users}
        renderItem={({ item }) => <ContactListItem user={item} />}
        // keyExtractor={(item) => item.id}
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
