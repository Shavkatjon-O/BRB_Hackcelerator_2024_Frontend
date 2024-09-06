export interface UserType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  image: string;
}

export interface DirectChatType {
  id: number;
  user1: UserType;
  user2: UserType;
}

export interface MessageType {
  id?: number;
  chat: DirectChatType;
  user: UserType;
  text: string;
  created_at?: string;
}
