import type {
  ForgotPasswordViaEmailProps,
  ForgotPasswordViaPhoneProps,
  ResetPasswordBodyProps,
  SignInProps,
  SignUpBodyProps,
  SignUpAPIResponse,
  SignInAPIResponse,
  SignUpErrorResponse,
  SignInErrorResponse,
  ForgotPasswordViaEmailErrorResponse,
  CommonAuthorizationAPIResponse,
  ForgotPasswordViaPhoneErrorResponse,
  ResetPasswordErrorResponse,
  ChangePasswordBodyProps,
  ChangePasswordAPIResponse,
  ChangePasswordErrorResponse,
  VerifyAccessTokenAPIResponse,
  VerifyAccessTokenErrorResponse,
  RefreshAccessTokenAPIResponse,
  RefreshAccessTokenErrorResponse,
  GetUserProfileAPIResponse,
  GetUserProfileErrorResponse,
  UpdateUserProfileAPIResponse,
  UpdateUserProfileErrorResponse,
  DeleteUserProfileAPIResponse,
  DeleteUserProfileErrorResponse,
  LogoutAPIResponse,
  LogoutErrorResponse,
  VerifyEmailProps,
  VerifyEmailErrorResponse,
  InsuranceApplicationData,
  InsuranceApplicationResponse,
  TourBookingData,
  TourBookingResponse,
  VisaApplicationData,
  FeedbackData,
} from "../types/type";
import axiosInstance from "./apiInstance";
import axios, { AxiosError } from "axios";

const authAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const signUp = async (data: SignUpBodyProps) => {
  try {
    const response = await authAxiosInstance.post<SignUpAPIResponse>("/authorization/register", data);
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<SignUpErrorResponse>;
    if (axiosError.response?.data?.message?.email?.[0] === "custom user with this email address already exists.") {
      throw new Error("This email is already registered. Please try logging in instead.");
    }
    throw error;
  }
};

export const signIn = async (data: SignInProps) => {
  try {
    const response = await authAxiosInstance.post<SignInAPIResponse>("/authorization/login", data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<SignInErrorResponse>;
    if (axiosError.response?.data?.statusCode === "401") {
      throw new Error("No active account found with the given credentials");
    }
    throw error;
  }
};

export const signOut = async () => {
  try {
    const response = await axiosInstance.post<LogoutAPIResponse>("/authorization/logout");
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<LogoutErrorResponse>;
    if (axiosError.response?.data?.status_code === 400) {
      throw new Error("Invalid refresh token. Please try again.");
    }
    throw error;
  }
};

export const forgotPasswordViaEmail = async (data: ForgotPasswordViaEmailProps) => {
  try {
    const response = await axiosInstance.post<CommonAuthorizationAPIResponse>("/authorization/password-reset", data);
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<ForgotPasswordViaEmailErrorResponse>;
    if (axiosError.response?.data?.status_code === "invalid") {
      throw new Error("We couldn't find an account associated with that email. Please try a different e-mail address.");
    }
    throw error;
  }
};

export const forgotPasswordViaPhone = async (data: ForgotPasswordViaPhoneProps) => {
  try {
    const response = await axiosInstance.post<CommonAuthorizationAPIResponse>("/authorization/password-reset", data);
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<ForgotPasswordViaPhoneErrorResponse>;
    if (axiosError.response?.data?.status_code === "invalid") {
      throw new Error("We couldn't find an account associated with that phone number. Please try a different phone number.");
    }
    throw error;
  }
};

export const verifyEmail = async (data: VerifyEmailProps) => {
  try {
    const response = await axiosInstance.post<CommonAuthorizationAPIResponse>("/authorization/password-resetvalidate_token/", data);
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<VerifyEmailErrorResponse>;
    if (axiosError.response?.data?.status_code === "not_found") {
      throw new Error("Invalid token. Please try again.");
    }
    throw error;
  }
};

export const resetPassword = async (data: ResetPasswordBodyProps) => {
  try {
    const response = await axiosInstance.post<CommonAuthorizationAPIResponse>("authorization/password-resetconfirm/", data);
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<ResetPasswordErrorResponse>;
    if (axiosError.response?.data?.status_code === "not_found") {
      throw new Error("Invalid token. Please try again.");
    }
    throw error;
  }
};

export const changePassword = async (data: ChangePasswordBodyProps) => {
  try {
    const response = await axiosInstance.put<ChangePasswordAPIResponse>("/authorization/changepassword", data);
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<ChangePasswordErrorResponse>;
    if (axiosError.response?.data?.status_code === 400) {
      throw new Error("Invalid credentials. Please try again.");
    }
    throw error;
  }
};

export const submitFeedback = async (data: FeedbackData) => {
  return await axiosInstance.post("/authorization/feedback/submit", data);
};

export const verifyToken = async (token: string) => {
  try {
    const response = await axiosInstance.post<VerifyAccessTokenAPIResponse>("/authorization/token/verify", { token });
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<VerifyAccessTokenErrorResponse>;
    if (axiosError.response?.data?.status_code === "invalid") {
      throw new Error("Invalid token. Please try again.");
    }
    throw error;
  }
};

export const refreshToken = async () => {
  try {
    const response = await axiosInstance.post<RefreshAccessTokenAPIResponse>("/authorization/token/refresh");
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<RefreshAccessTokenErrorResponse>;
    if (axiosError.response?.data?.status_code === "invalid") {
      throw new Error("Invalid refresh token. Please try again.");
    }
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await axiosInstance.get<GetUserProfileAPIResponse>("/authorization/user_profile/");
    localStorage.setItem("user", JSON.stringify(response.data.data));
    return response.data.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<GetUserProfileErrorResponse>;
    if (axiosError.response?.data?.status_code === "authentication_failed") {
      throw new Error("Invalid token. Please try again.");
    }
    throw error;
  }
};

export const submitInsuranceApplication = async (data: InsuranceApplicationData): Promise<InsuranceApplicationResponse> => {
  return await axiosInstance.post("/insurance/apply/", data);
};

export const submitTourBooking = async (data: TourBookingData): Promise<TourBookingResponse> => {
  return await axiosInstance.post("/holiday/book/", data);
};

export const submitVisaApplication = async (data: VisaApplicationData) => {
  return await axiosInstance.post("/visa/apply/", data);
};

export const updateUser = async (data: FormData) => {
  try {
    const response = await axiosInstance.patch<UpdateUserProfileAPIResponse>("/authorization/user_profile/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    localStorage.setItem("user", JSON.stringify(response.data.data));
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<UpdateUserProfileErrorResponse>;
    if (axiosError.response?.data?.status_code === "authentication_failed") {
      throw new Error("Invalid token. Please try again.");
    }
    throw error;
  }
};

export const deleteUser = async () => {
  try {
    const response = await axiosInstance.delete<DeleteUserProfileAPIResponse>("/authorization/delete_user/");
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<DeleteUserProfileErrorResponse>;
    if (axiosError.response?.data?.status_code === "authentication_failed") {
      throw new Error("Invalid token. Please try again.");
    }
    throw error;
  }
};
