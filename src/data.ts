// Editable placeholder content for Хусейн Чиллаев website
// All real projects and descriptions should be replaced by the owner.

export interface Project {
  id: number
  title: string
  description: string
  year: string
  category: string
  tags: string[]
}

export interface Comic {
  id: number
  title: string
  description: string
  year: string
  panels: number
  category: string
}

export interface GalleryItem {
  id: number
  caption: string
  type: string
}

export interface VideoItem {
  id: number
  title: string
  description: string
  year: string
  youtubeId?: string // optional real embed id if known
  link: string
}

// PROJECTS — placeholders
export const projects: Project[] = [
  {
    id: 1,
    title: "[НАЗВАНИЕ ПРОЕКТА]",
    description: "[ОПИСАНИЕ]",
    year: "2024",
    category: "Короткометражный",
    tags: ["Короткометражный", "Детство"],
  },
  {
    id: 2,
    title: "[НАЗВАНИЕ ПРОЕКТА]",
    description: "[ОПИСАНИЕ]",
    year: "2023",
    category: "Короткометражный",
    tags: ["Короткометражный"],
  },
  {
    id: 3,
    title: "[НАЗВАНИЕ ПРОЕКТА]",
    description: "[ОПИСАНИЕ]",
    year: "2024",
    category: "Клип",
    tags: ["Клип", "Музыка"],
  },
  {
    id: 4,
    title: "[НАЗВАНИЕ ПРОЕКТА]",
    description: "[ОПИСАНИЕ]",
    year: "2022",
    category: "Короткометражный",
    tags: ["Короткометражный", "Юмор"],
  },
  {
    id: 5,
    title: "[НАЗВАНИЕ ПРОЕКТА]",
    description: "[ОПИСАНИЕ]",
    year: "2025",
    category: "Сериал",
    tags: ["Сериал"],
  },
  {
    id: 6,
    title: "[НАЗВАНИЕ ПРОЕКТА]",
    description: "[ОПИСАНИЕ]",
    year: "2023",
    category: "Клип",
    tags: ["Клип"],
  },
]

// COMICS — placeholders
export const comics: Comic[] = [
  {
    id: 1,
    title: "[КОМИКС]",
    description: "[ОПИСАНИЕ]",
    year: "2024",
    panels: 6,
    category: "Мини-комикс",
  },
  {
    id: 2,
    title: "[КОМИКС]",
    description: "[ОПИСАНИЕ]",
    year: "2023",
    panels: 4,
    category: "Мини-комикс",
  },
  {
    id: 3,
    title: "[КОМИКС]",
    description: "[ОПИСАНИЕ]",
    year: "2024",
    panels: 8,
    category: "История",
  },
  {
    id: 4,
    title: "[КОМИКС]",
    description: "[ОПИСАНИЕ]",
    year: "2022",
    panels: 5,
    category: "Мини-комикс",
  },
  {
    id: 5,
    title: "[КОМИКС]",
    description: "[ОПИСАНИЕ]",
    year: "2025",
    panels: 12,
    category: "История",
  },
]

// GALLERY — all hand-drawn SVGs will be used, captions are placeholders
export const galleryItems: GalleryItem[] = [
  { id: 1, caption: "Кадр из [НАЗВАНИЕ ПРОЕКТА]", type: "кадр" },
  { id: 2, caption: "Эскиз персонажа", type: "скетч" },
  { id: 3, caption: "Кадр из [КОМИКС]", type: "комикс" },
  { id: 4, caption: "Фоновая иллюстрация", type: "иллюстрация" },
  { id: 5, caption: "Кадр из [ВИДЕО]", type: "кадр" },
  { id: 6, caption: "Персонаж [НАЗВАНИЕ ПРОЕКТА]", type: "персонаж" },
  { id: 7, caption: "Кадр из [НАЗВАНИЕ ПРОЕКТА]", type: "кадр" },
  { id: 8, caption: "Миниатюра [КОМИКС]", type: "комикс" },
]

// VIDEOS — use real channel link + placeholders. One embed example allowed if known
export const videos: VideoItem[] = [
  {
    id: 1,
    title: "[НАЗВАНИЕ ВИДЕО]",
    description: "[ОПИСАНИЕ]",
    year: "2024",
    link: "https://www.youtube.com/@Huseyn.Chillaev",
  },
  {
    id: 2,
    title: "[НАЗВАНИЕ ВИДЕО]",
    description: "[ОПИСАНИЕ]",
    year: "2023",
    link: "https://www.youtube.com/@Huseyn.Chillaev",
  },
  {
    id: 3,
    title: "[НАЗВАНИЕ ВИДЕО]",
    description: "[ОПИСАНИЕ]",
    year: "2025",
    link: "https://www.youtube.com/@Huseyn.Chillaev",
  },
  {
    id: 4,
    title: "[НАЗВАНИЕ ВИДЕО]",
    description: "[ОПИСАНИЕ]",
    year: "2022",
    link: "https://www.youtube.com/@Huseyn.Chillaev",
  },
]
