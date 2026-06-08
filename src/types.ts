export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  cover: string; // we'll use 'svg' identifier
  year: number;
  duration: string;
  role: string;
  tags: string[];
}

export interface Comic {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  pages: number;
  cover: string;
  year: number;
  pagesContent: Array<{
    panel: number;
    caption?: string;
    dialogue?: string;
  }>;
}

export interface GalleryItem {
  id: number;
  title: string;
  medium: string;
  year: number;
  description: string;
  category: string;
}

export interface Video {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
  year: number;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  reaction: 'happy' | 'thinking' | 'excited' | 'surprised';
}
