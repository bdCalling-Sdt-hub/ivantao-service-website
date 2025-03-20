export interface postType {
  id: number;
  user_id: number;
  categories_id: number;
  title: string;
  comment: string;
  image: string;
  created_at: string;
  updated_at: string;
  time_ago: string;
  user: {
    id: number;
    full_name: string;
    image: string;
  };
}
