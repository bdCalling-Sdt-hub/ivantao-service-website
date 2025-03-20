export interface ServiceType {
  id: string;
  provider_id: string;
  service_category_id: string;
  service_sub_categories_id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  service_type: string;
  created_at: string;
  updated_at: string;
  reviews_count: string;
  reviews_avg_rating: string | null;
  reviews: Review[];
}

interface Review {
  id: string;
  rating: string;
  user_id: string;
  service_id: string;
  user: User;
}

interface User {
  id: string;
  full_name: string;
  image: string;
}

interface Subcategory {
  id: string;
  service_category_id: string;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface ServiceResponse {
  current_page: string;
  data: ServiceType[];
  first_page_url: string;
  from: string;
  last_page: string;
  last_page_url: string;
  links: Link[];
  next_page_url: string | null;
  path: string;
  per_page: string;
  prev_page_url: string | null;
  to: string;
  total: string;
}
export interface serviceApiCallType {
  status: boolean;
  data: ServiceResponse;
  message?: string;
}

interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

export interface Category {
  id: string;
  provider_id: string;
  name: string;
  icon: string;
  created_at: string;
  updated_at: string;
  subcategories: Subcategory[];
}

interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

interface InnerCategoryApiResponseType {
  current_page: string;
  data: Category[];
  first_page_url: string;
  from: string;
  last_page: string;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: string;
  prev_page_url: string | null;
  to: string;
  total: string;
}

export interface CategoryApiResponseType {
  data: InnerCategoryApiResponseType;
  status: boolean;
}

export interface ServiceBrief {
  id: string;
  provider_id: string;
  service_category_id: string;
  service_sub_categories_id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  service_type: "virtual" | "in-person" | "hybrid";
  created_at: string;
  updated_at: string;
}

export interface ServiceDetailedType {
  service: ServiceBrief;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reviews: any[]; // You can replace 'any' with a proper Review interface if needed
  average_rating: string;
  total_reviews: string;
}
