export type UserType = {
  id: number;
  full_name: string;
  email: string;
  email_verified_at: string;
  role: string;
  provider_description: string | null;
  about_yourself: string | null;
  address: string;
  contact: string | null;
  image: string;
  uaepass_id: string | null;
  google_id: string | null;
  otp: string | null;
  otp_expire_at: string | null;
  stripe_connect_id: string | null;
  completed_stripe_onboarding: boolean;
  status: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

interface ServiceCategory {
  id: number;
  provider_id: number;
  name: string;
  icon: string;
  created_at: string;
  updated_at: string;
}

export interface ProviderType {
  id: string;
  full_name: string;
  email: string;
  email_verified_at: string;
  role: string;
  provider_description: string | null;
  about_yourself: string | null;
  address: string;
  contact: string | null;
  image: string;
  uaepass_id: string;
  google_id: string | null;
  otp: string | null;
  otp_expire_at: string | null;
  stripe_connect_id: string | null;
  completed_stripe_onboarding: boolean;
  status: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  service_categories: ServiceCategory[];
}
