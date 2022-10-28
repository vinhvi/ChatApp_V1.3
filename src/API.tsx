export const host = "http://192.168.1.33:5000";
export const loginRoute = `${host}/api/user/login`;
export const singupRoute = `${host}/api/user`;
export const getAllUserRoute = `${host}/api/user/`;
export const getChatRom = `${host}/api/chat`;
export const sendMessage1 = `${host}/api/message`;

export const getMessage = async (id: any) => {
  `${host}//api/message/${id}`;
};
