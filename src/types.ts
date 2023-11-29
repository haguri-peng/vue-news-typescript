interface News {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url: string;
  domain?: string;
}

interface Ask {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url: string;
}

interface Jobs {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url: string;
  domain?: string;
}

interface User {
  about: string;
  created_time: number;
  created: string;
  id: string;
  karma: number;
}

interface Comment {
  id: number;
  user: string;
  time: number;
  time_ago: string;
  type: string;
  content: string;
  comments: Comment[];
  comments_count: number;
  level: number;
  url: string;
}

interface Item {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  type: string;
  content: string;
  comments: Comment[];
  comments_count: number;
  url: string;
}

export type { News, Ask, Jobs, User, Item };
