//newsItem
export interface NewsItem {
  id: string;
  author: string;
  title: string;
  description: string;
  category: NewsCategory;
  content: string;
  urlToImage: string;
}

//category
export type NewsCategory =
  | 'business'
  | 'sports'
  | 'entertainment'
  | 'health'
  | 'science'
  | 'technology'
  | 'general';

//User
export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}
