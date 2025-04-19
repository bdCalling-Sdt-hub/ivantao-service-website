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
  id: string;
  job_role: string;
  job_category: string;
  description: string;
  job_type: string;
  address: string;
  deadline: string;
  created_at: string;
  updated_at: string;
}
export interface AdminJob {
  id: string;
  job_role: string;
  job_category: string;
  description: string;
  job_type: string;
  address: string;
  deadline: string;
  created_at: string;
  updated_at: string;
  applied_users_count: number;
}

export interface JobData {
  [category: string]: Job[];
}

export type ReportType = {
  id: string;
  user_id: string;
  reported_user_id: string;
  service_id: string;
  reason: string;
  description: string;
  created_at: string;
  updated_at: string;
  provider: {
    id: string;
    full_name: string;
    image: string;
  };
  reporter: {
    id: string;
    full_name: string;
    image: string;
  };
  reported_service: {
    id: string;
    title: string;
    service_type: string;
  };
};

export interface newsLetter {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
  date: string;
  time: string;
}
