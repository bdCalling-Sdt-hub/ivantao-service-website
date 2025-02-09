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
