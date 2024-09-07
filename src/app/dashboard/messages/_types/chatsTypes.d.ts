interface UserType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  image: string;
}

interface DirectChatType {
  id: number;
  partner: UserType;
}

interface MessageType {
  id?: number;
  chat: DirectChatType;
  user: UserType;
  text: string;
  created_at?: string;
}

export {
  UserType,
  DirectChatType,
  MessageType,
}