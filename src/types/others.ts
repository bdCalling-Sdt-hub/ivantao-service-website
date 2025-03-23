export interface ReviewType {
  user_id: number;
  service_id: string;
  comment: string;
  rating: string;
  updated_at: string;
  created_at: string;
  id: number;
}

export interface experienceType {
  id: string;
  provider_id: string;
  company_name: string;
  job_role: string;
  description: string;
  join_date: string;
  resign_date: string | null;
  currently_working: boolean;
  created_at: string;
  updated_at: string;
}

export interface Job {
  id: number;
  job_role: string;
  job_category: string;
  description: string;
  job_type: string;
  address: string;
  deadline: string;
  created_at: string;
  updated_at: string;
}

export interface JobData {
  [category: string]: Job[];
}
