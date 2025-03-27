export interface User {
  id: string;
  name: string;
  avatar: string;
  status?: string;
}

export interface Message {
  id: string;
  text: string;
  sender: User;
  timestamp: string;
  isOwn?: boolean;
}

export interface Conversation {
  id: string;
  user: User;
  lastMessage: string;
  timestamp: string;
}

export interface MessageType {
  id: number;
  sender_id: number;
  receiver_id: number;
  message: string;
  image: string;
  is_read: number;
  created_at: string;
  updated_at: string;
}
