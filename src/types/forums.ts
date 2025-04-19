export interface postType {
  id: string;
  user_id: number;
  categories_id: number;
  description?: string;
  title: string;
  reason?: string;
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
