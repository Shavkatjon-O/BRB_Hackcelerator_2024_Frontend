export interface UserType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  image: string;
}

export interface MessageType {
  id: number;
  chat: number;
  user: number;
  text: string;
  created_at: string;
}