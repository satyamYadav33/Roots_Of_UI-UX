
export interface Principle {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Resource {
  id: string;
  name: string;
  type: 'PDF' | 'FIGMA' | 'TEMPLATE';
  downloadUrl: string;
  previewImage: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
