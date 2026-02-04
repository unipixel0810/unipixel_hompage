export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Feature {
  title: string;
  description: string;
  image: string;
}