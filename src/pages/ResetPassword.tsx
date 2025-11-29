import { toast } from "react-toastify";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import { resetPassword } from "../services/api";
import * as Yup from "yup";
import { Eye, EyeOff, Lock, CheckCircle } from "lucide-react";
import TawkWidget from "../components/TawkWidget";
import { Header } from "../components/Header";
import Footer from "../components/Footer";

const resetPasswordSchema = Yup.object().shape({
  password: Yup.string().min(8, "Password must be at least 8 characters").matches(/[a-z]/, "Password must contain at least one lowercase letter").matches(/[A-Z]/, "Password must contain at least one uppercase letter").matches(/[0-9]/, "Password must contain at least one number").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const token = searchParams.get("token") || "";

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values, { setSubmitting }) => {
      if (!token) {
        toast.error("Invalid or missing reset token");
        navigate("/forgot-password");
        return;
      }

      setSubmitting(true);

      try {
        const response = await resetPassword({
          password: values.password,
          token: token,
        });

        if (response.status === "OK") {
          setIsSuccess(true);
          toast.success("Password reset successfully!");

          // Redirect to login after 3 seconds
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("Failed to reset password. Please try again.");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Password strength indicator
  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(formik.values.password);

  const getStrengthLabel = () => {
    if (passwordStrength <= 1) return { text: "Weak", color: "text-red-600", bg: "bg-red-600" };
    if (passwordStrength <= 3) return { text: "Fair", color: "text-yellow-600", bg: "bg-yellow-600" };
    if (passwordStrength <= 4) return { text: "Good", color: "text-green-600", bg: "bg-green-600" };
    return { text: "Strong", color: "text-green-600", bg: "bg-green-600" };
  };

  const strengthInfo = getStrengthLabel();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <TawkWidget />
      <main className="flex-1">
        <div className="flex flex-col  bg-gray-50 text-foreground overflow-x-hidden">
          <main className="flex-grow flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-md animate-fade-in">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {!isSuccess ? (
                  <>
                    {/* Header */}
                    <div className="mb-8 text-center animate-slide-down" style={{ animationDelay: "0.1s" }}>
                      <div className="mb-4 mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
                        <Lock className="w-8 h-8 text-blue-600" />
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Reset Password</h2>

                      <p className="text-sm text-gray-600">Enter your new password below</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={formik.handleSubmit} className="space-y-5 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                      {/* New Password */}
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                          New Password
                        </label>
                        <div className="relative">
                          <input type={showPassword ? "text" : "password"} id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter new password" className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300" />
                          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-300">
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                        {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm mt-1 animate-fade-in">{formik.errors.password}</p>}

                        {/* Password Strength Indicator */}
                        {formik.values.password && (
                          <div className="mt-3 animate-fade-in">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-gray-600">Password strength:</span>
                              <span className={`text-xs font-semibold ${strengthInfo.color}`}>{strengthInfo.text}</span>
                            </div>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((level) => (
                                <div
                                  key={level}
                                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${level <= passwordStrength ? strengthInfo.bg : "bg-gray-200"}`}
                                  style={{
                                    animation: `fill-bar 0.3s ease-out ${(level - 1) * 0.1}s forwards`,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Confirm Password */}
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                          Confirm New Password
                        </label>
                        <div className="relative">
                          <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Confirm new password" className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300" />
                          <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-300">
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                        {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="text-red-500 text-sm mt-1 animate-fade-in">{formik.errors.confirmPassword}</p>}
                      </div>

                      {/* Password Requirements */}
                      <div className="bg-gray-50 rounded-lg p-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                        <p className="text-xs font-semibold text-gray-700 mb-2">Password must contain:</p>
                        <ul className="space-y-1">
                          <li className={`text-xs flex items-center gap-2 transition-colors duration-300 ${formik.values.password.length >= 8 ? "text-green-600" : "text-gray-500"}`}>
                            <CheckCircle className="w-3 h-3" />
                            At least 8 characters
                          </li>
                          <li className={`text-xs flex items-center gap-2 transition-colors duration-300 ${/[a-z]/.test(formik.values.password) ? "text-green-600" : "text-gray-500"}`}>
                            <CheckCircle className="w-3 h-3" />
                            One lowercase letter
                          </li>
                          <li className={`text-xs flex items-center gap-2 transition-colors duration-300 ${/[A-Z]/.test(formik.values.password) ? "text-green-600" : "text-gray-500"}`}>
                            <CheckCircle className="w-3 h-3" />
                            One uppercase letter
                          </li>
                          <li className={`text-xs flex items-center gap-2 transition-colors duration-300 ${/[0-9]/.test(formik.values.password) ? "text-green-600" : "text-gray-500"}`}>
                            <CheckCircle className="w-3 h-3" />
                            One number
                          </li>
                        </ul>
                      </div>

                      {/* Submit Button */}
                      <button type="submit" disabled={formik.isSubmitting} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        {formik.isSubmitting ? "Resetting..." : "Reset Password"}
                      </button>
                    </form>

                    {/* Back to Login */}
                    <div className="mt-6 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
                      <Link to="/login" className="text-sm text-gray-600 hover:text-blue-600 font-medium transition-all duration-300 transform hover:scale-105 inline-block">
                        ← Back to Login
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Success State */}
                    <div className="text-center animate-fade-in">
                      <div className="mb-4 mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-bounce-gentle">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 mb-2 animate-slide-down">Password Reset Successfully!</h2>

                      <p className="text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                        Your password has been reset. You can now login with your new password.
                      </p>

                      <Link to="/login" className="inline-block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        Go to Login
                      </Link>

                      <p className="text-xs text-gray-500 mt-4 animate-pulse">Redirecting to login in 3 seconds...</p>
                    </div>
                  </>
                )}
              </div>

              {/* Security Note */}
              {!isSuccess && (
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 animate-slide-up" style={{ animationDelay: "0.6s" }}>
                  <p className="text-sm text-blue-800">
                    <span className="font-semibold">Security Tip:</span> Choose a strong password that you don't use for other accounts.
                  </p>
                </div>
              )}
            </div>
          </main>

          <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes fill-bar {
          from {
            transform: scaleX(0);
            opacity: 0;
          }
          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
      `}</style>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default ResetPassword;
