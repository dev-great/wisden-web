import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import { forgotPasswordViaEmail } from "../services/api";
import * as Yup from "yup";
import { forgotPasswordInitialValues } from "../utils/formik";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import TawkWidget from "../components/TawkWidget";

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const formik = useFormik({
    initialValues: forgotPasswordInitialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      if (!values.email) {
        toast.error("Please enter your email address");
        setSubmitting(false);
        return;
      }
      setSubmitting(true);
      try {
        const response = await forgotPasswordViaEmail(values);
        if (response) {
          toast.success("OTP code has been successfully sent to your email");
          resetForm();
          setSubmitting(false);
          sessionStorage.setItem("resetPasswordEmail", values.email);
          navigate("/verify-token");
        }
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("OTP code sending failed. Please try again.");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <TawkWidget />
      <div className="flex flex-col bg-blue-100 text-foreground overflow-x-hidden">
        <main className="flex-grow flex items-center justify-center py-12 px-4">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {!isEmailSent ? (
                <>
                  {/* Header */}
                  <div className="mb-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Forgot Password?</h2>
                    <p className="text-sm text-gray-600">Enter your email address and we'll send you a link to reset your password.</p>
                  </div>

                  {/* Form */}
                  <form onSubmit={formik.handleSubmit} className="space-y-5">
                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter your email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                      {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" disabled={formik.isSubmitting} className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                      {formik.isSubmitting ? "Sending..." : "Send Reset Link"}
                    </button>
                  </form>

                  {/* Back to Login */}
                  <div className="mt-6 text-center">
                    <Link to="/login" className="text-sm text-orange-600 hover:underline font-medium">
                      ← Back to Login
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  {/* Success Message */}
                  <div className="text-center">
                    <div className="mb-4 mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Check Your Email</h2>

                    <p className="text-gray-600 mb-6">
                      We've sent a password reset link to <span className="font-semibold">{formik.values.email}</span>
                    </p>

                    <p className="text-sm text-gray-500 mb-8">Didn't receive the email? Check your spam folder or try again.</p>

                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          setIsEmailSent(false);
                          formik.resetForm();
                        }}
                        className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                      >
                        Try Different Email
                      </button>

                      <Link to="/login" className="block w-full text-center text-orange-600 hover:underline font-medium py-2">
                        Back to Login
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Don't have an account */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/login" className="text-orange-600 font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
