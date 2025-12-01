import { toast } from "react-toastify";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signInInitialValues, signInSchema } from "../utils/formik";
import { signIn } from "../services/api";
import { setUser, setAccessToken, setIsAuthenticated } from "../store/slices/authSlice";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import TawkWidget from "../components/TawkWidget";
import Img from "../assets/images/new/home6.jpg";
const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const redirectUrl = searchParams.get("redirect") || "/";

  const formik = useFormik({
    initialValues: signInInitialValues,
    validationSchema: signInSchema,
    onSubmit: async (values, { setSubmitting }) => {
      if (!values.email || !values.password) {
        toast.error("Please fill in all fields");
        setSubmitting(false);
        return;
      }

      setSubmitting(true);

      try {
        const loginResponse = await signIn({
          email: values.email,
          password: values.password,
        });

        // Save to Redux store (which also saves to localStorage)
        if (loginResponse.auth?.access) {
          dispatch(setAccessToken(loginResponse.auth.access));
          dispatch(setUser(loginResponse.user));
          dispatch(setIsAuthenticated(true));

          toast.success("Login successful!");
          navigate(redirectUrl);
        } else {
          toast.error("Login failed. Please try again.");
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error("No active account found with the given credentials");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <TawkWidget />
      <main className="flex-1">
        <div className="bg-indigo-100 bg-opacity-50 flex items-center justify-center pt-10 pb-10 z-50 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full flex">
            {/* Left Side - Travel Image */}
            <div className="hidden md:block w-2/5 bg-gray-800 relative overflow-hidden animate-slide-left" style={{ animationDelay: "0.1s" }}>
              <img src={Img} alt="Travel" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>

            {/* Right Side - Form */}
            <div className="w-full md:w-3/5 p-8 md:p-12 relative animate-slide-right" style={{ animationDelay: "0.2s" }}>
              {/* Header */}
              <div className="mb-8 animate-slide-down" style={{ animationDelay: "0.3s" }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Welcome Back </h3>
                <p className="text-sm text-gray-600">Login to start booking today</p>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={formik.handleSubmit}>
                {/* Email */}
                <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-300" />
                  {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm mt-1 animate-fade-in">{formik.errors.email}</p>}
                </div>

                {/* Password */}
                <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input type={showPassword ? "text" : "password"} id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Password" className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-300" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-all duration-300 transform hover:scale-110" aria-label="Toggle password visibility">
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm mt-1 animate-fade-in">{formik.errors.password}</p>}
                </div>

                {/* Forgot Password */}
                <div className="flex justify-start animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <Link to="/forgot-password" className="!text-red-600 font-base hover:underline transition-all duration-300 transform hover:scale-105 inline-block">
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button type="submit" disabled={formik.isSubmitting} className="w-full bg-indigo-600 text-white py-3.5 !rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 mt-6 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg animate-fade-in" style={{ animationDelay: "0.7s" }}>
                  {formik.isSubmitting ? "Logging in..." : "Continue"}
                </button>
              </form>

              <p className="mt-6 text-center text-base text-gray-600 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                Don't have an account?{" "}
                <Link to="/register" className="text-indigo-600 font-medium hover:underline transition-all duration-300 transform hover:scale-105 inline-block">
                  Register
                </Link>
              </p>

              {/* Terms */}
              <p className="text-base text-gray-500 text-center !mt-6 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                By proceeding, you agree to Wishden Hotels{" "}
                <a href="#" className="text-indigo-600 hover:underline transition-colors duration-300">
                  Privacy Policy
                </a>
                ,{" "}
                <a href="#" className="text-indigo-600 hover:underline transition-colors duration-300">
                  User Agreement
                </a>{" "}
                and{" "}
                <a href="#" className="text-indigo-600 hover:underline transition-colors duration-300">
                  T&Cs
                </a>
              </p>
            </div>
          </div>

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

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-left {
          animation: slide-left 0.6s ease-out forwards;
        }

        .animate-slide-right {
          animation: slide-right 0.6s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out forwards;
        }
      `}</style>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
