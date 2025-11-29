import { CustomUser } from "./user.types";

export type Gender = "male" | "female" | "other";

export interface InsuranceApplicationData {
  fullName: string;
  email: string;
  phone: string;
  travelDates: string;
  destination: string;
  tripCost: string;
  travelers: string;
  insuranceType: string;
}

export interface InsuranceApplicationResponse {
  status_code: number;
  message: string;
  data: null;
}

export interface TourBookingData {
  tourId: string;
  tourTitle: string;
  fullName: string;
  email: string;
  phone: string;
  numberOfTravelers: number;
  specialRequests: string;
  totalPrice: number;
  bookingDate: string;
}

export interface FeedbackData {
  name: string;
  email: string;
  subject: string;
  message: string;
  rating: string;
  submittedAt: string;
}

export interface VisaApplicationData {
  visaId: string;
  visaTitle: string;
  visaCountry: string;
  fullName: string;
  email: string;
  phone: string;
  state: string;
  city: string;
  passport: string;
  specialRequests: string;
}

export interface TourBookingResponse {
  status_code: number;
  message: string;
  data: null;
}

export interface VerifyEmailProps {
  token: string;
}

export interface VerifyEmailErrorResponse {
  status_code: string;
  message: string;
  type: string;
  data: null;
}

export interface contactProps {
  email: string;
  name: string;
  subject: string;
  message: string;
}

export interface ContactAPIResponse {
  status_code: number;
  message: string;
  data: object;
}

export interface SignUpProps {
  email: string;
  password: string;
  referral_code?: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
  account_type: string;
  provider: string;
  is_verify: boolean;
  fcm_token?: string;
}

export interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
  fillColor?: string;
  onClick?: () => void;
}

export interface SignUpBodyProps {
  email: string;
  password: string;
  referral_code?: string;
  first_name: string;
  last_name: string;
  account_type: string;
  provider: string;
  is_verify: boolean;
  fcm_token?: string;
}

export interface SignUpAPIResponse {
  status_code: number;
  message: string;
  data: {
    user: CustomUser;
    access: string;
  };
}

export interface SignUpErrorResponse {
  status_code: number;
  message: {
    email?: string[];
  };
  type: string;
  data: null;
}

export interface SignInProps {
  email: string;
  password: string;
}

export interface SignInAPIResponse {
  auth: {
    access: string;
  };
  user: CustomUser;
}

export interface SignInErrorResponse {
  error: string;
  message: string;
  statusCode: string;
}

export interface CommonAuthorizationAPIResponse {
  status: string;
}

export interface ForgotPasswordViaEmailProps {
  email: string;
}

export interface ForgotPasswordViaEmailErrorResponse {
  status_code: string;
  message: string;
  type: string;
  data: string;
}

export interface ForgotPasswordViaPhoneProps {
  phone_number: string;
}

export interface ForgotPasswordViaPhoneErrorResponse {
  status_code: string;
  message: string;
  type: string;
  data: string;
}

export interface ResetPasswordProps {
  password: string;
  confirm_password: string;
}

export interface ResetPasswordBodyProps {
  password: string;
  token: string;
}

export interface ResetPasswordErrorResponse {
  status_code: string;
  message: string;
  type: string;
  data: null;
}

export interface ChangePasswordProps {
  old_password: string;
  new_password: string;
  confirm_password: string;
}

export interface ChangePasswordBodyProps {
  old_password: string;
  new_password: string;
}

export interface ChangePasswordAPIResponse {
  status_code: number;
  message: string;
  data: null;
}

export interface GeneralAPIResponse {
  status_code: number;
  message: string;
  data: null;
}

export interface ChangePasswordErrorResponse {
  status_code: number;
  message: {
    old_password?: string[];
  };
  type: string;
  data: null;
}

export interface VerifyAccessTokenAPIResponse {
  status_code: number;
  message: string;
  data: object;
}

export interface VerifyAccessTokenErrorResponse {
  status_code: string;
  message: string;
  type: string;
  data: string;
}

export interface RefreshAccessTokenAPIResponse {
  status_code: number;
  message: string;
  data: {
    auth: {
      access: string;
    };
    message: string;
  };
}

export interface RefreshAccessTokenErrorResponse {
  status_code: string;
  message: string;
  type: string;
  data: string;
}

export interface LogoutAPIResponse {
  status_code: number;
  message: string;
  data: null;
}

export interface LogoutErrorResponse {
  status_code: number;
  message: string;
  type: string;
  data: string;
}

export interface GetUserProfileAPIResponse {
  status_code: number;
  message: string;
  data: CustomUser;
}

export interface GetUserProfileErrorResponse {
  status_code: string;
  message: string;
  type: string;
  data: string;
}

export interface UpdateUserProfileProps {
  first_name: string;
  last_name: string;
  phone_number: string;
}

export interface UpdateUserProfileAPIResponse {
  status_code: number;
  message: string;
  data: CustomUser;
}

export interface UpdateUserProfileErrorResponse {
  status_code: string;
  message: string;
  type: string;
  data: string;
}

export interface SuspendUserAPIResponse {
  status_code: number;
  message: string;
  data: null;
}

export interface DeleteUserProfileAPIResponse {
  status_code: number;
  message: string;
  data: null;
}

export interface DeleteUserProfileErrorResponse {
  status_code: string;
  message: string;
  type: string;
  data: string;
}

export interface GeneralAPIErrorResponse {
  status_code: string;
  message: string;
  type: string;
  data: string;
}

// ============================================
// 2. src/types/user.types.ts
// ============================================
export interface CustomUser {
  id: string;
  email: string;
  title?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  last_name?: string | null;
  image?: string | File;
  phone_number?: string | null;
  account_type: string;
  nationality?: string | null;
  dob?: string | null;
  gender?: string | null;
  official_email?: string | null;
  other_email?: string | null;
  official_number?: string | null;
  other_number?: string | null;
  about_you?: string | null;
  address?: string | null;
  disability?: string | null;
  emergency_contact?: string | null;
  accessibility_needs?: string | null;
  provider: string;
  is_verify: boolean;
  date_joined: string;
}
