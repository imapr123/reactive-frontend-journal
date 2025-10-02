export interface JournalEntry {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export type Theme = 'light' | 'dark';

export interface AppState {
  user: User | null;
  theme: Theme;
  entries: JournalEntry[];
}
