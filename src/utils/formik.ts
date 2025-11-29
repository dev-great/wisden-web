import * as Yup from "yup";
import type { SignInProps, SignUpProps, ResetPasswordProps, VerifyEmailProps } from "../types/type";

export const signUpSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  phone_number: Yup.string().optional(),
});

export const signUpInitialValues: SignUpProps = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  phone_number: "",
  referral_code: "",
  account_type: "",
  provider: "",
  is_verify: false,
  fcm_token: "",
};

export const signInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const signInInitialValues: SignInProps = {
  email: "",
  password: "",
};

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export const forgotPasswordInitialValues = {
  email: "",
};

export const verifyEmailSchema = Yup.object().shape({
  token: Yup.string().length(6, "OTP must be 6 digits").required("OTP is required"),
});

export const verifyEmailInitialValues: VerifyEmailProps = {
  token: "",
};

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
  confirm_password: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), ""], "Passwords must match"),
});

export const resetPasswordInitialValues: ResetPasswordProps = {
  password: "",
  confirm_password: "",
};
