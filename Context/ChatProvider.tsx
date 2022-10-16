// import React, { createContext, useContext, useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import { User } from "../../types";

// const ChatContext = createContext(User);
// // contextAPI: qly state of our app -> fetch state directly from 1 place
// // truy cập accessAPI mọi nơi
// const ChatProvider = ({ children }) => {
//   const [selectedChat, setSelectedChat] = useState();
//   const [user, setUser] = useState();
//   const [notification, setNotification] = useState([]);
//   const [chats, setChats] = useState([]);

//   const history = useHistory();

//   useEffect(() => {
//     const userInfo = JSON.parse(localStorage.getItem("userInfor") || "");
//     setUser(userInfo);
//     if (!userInfo) {
//       history.push("/");
//     }
//   }, [history]);

//   return (
//     <ChatContext.Provider
//       value={{
//         user,
//         setUser,
//         selectedChat,
//         setSelectedChat,
//         notification,
//         setNotification,
//         chats,
//         setChats,
//       }}
//     >
//       {children}
//     </ChatContext.Provider>
//   );
// };

// export const ChatState = () => {
//   return useContext(ChatContext);
// };

// export default ChatProvider;
