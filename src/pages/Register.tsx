import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signUpInitialValues, signUpSchema } from "../utils/formik";
import { signIn, signUp } from "../services/api";
import { setUser, setAccessToken, setIsAuthenticated } from "../store/slices/authSlice";
import { Header } from "../components/Header";
import TawkWidget from "../components/TawkWidget";
import Footer from "../components/Footer";
import Img from "../assets/images/new/home6.jpg";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: signUpInitialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      if (!values.email || !values.password || !values.first_name || !values.last_name) {
        toast.error("Please fill in all fields");
        setSubmitting(false);
        return;
      }

      const signUpData = {
        email: values.email,
        password: values.password,
        first_name: values.first_name,
        last_name: values.last_name,
        referral_code: "",
        account_type: "USER",
        provider: "WEB",
        is_verify: false,
        fcm_token: "",
      };

      setSubmitting(true);

      try {
        const response = await signUp(signUpData);

        if (response.status_code === 201) {
          // Auto-login after successful registration
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

              toast.success("Account created successfully!");
              resetForm();
              navigate("/");
            }
          } catch (loginError) {
            // If auto-login fails, still show success but redirect to login
            console.error("Auto-login failed:", loginError);
            toast.success("Account created! Please login.");
            resetForm();
            navigate("/");
          }
        }
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("An error occurred during signup. Please try again.");
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
      <main className="flex-1">
        <div className="bg-blue-100 bg-opacity-50 flex items-center justify-center pt-10 pb-10 z-50 animate-fade-in min-h-screen">
          <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden flex relative">
            {/* Left Side - Travel Image */}
            <div className="hidden md:block w-2/5 bg-gray-800 relative overflow-hidden animate-slide-left" style={{ animationDelay: "0.1s" }}>
              <img src={Img} alt="Travel" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>

            {/* Right Side - Form */}
            <div className="w-full md:w-3/5 p-8 md:p-12 relative animate-slide-right" style={{ animationDelay: "0.2s" }}>
              {/* Header */}
              <div className="mb-8 animate-slide-down" style={{ animationDelay: "0.3s" }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Create your account</h3>
                <p className="text-sm text-gray-600">Join us and start your travel journey</p>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={formik.handleSubmit}>
                {/* First Name */}
                <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input type="text" id="first_name" name="first_name" value={formik.values.first_name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter First Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300" />
                  {formik.touched.first_name && formik.errors.first_name && <p className="text-red-500 text-sm mt-1 animate-fade-in">{formik.errors.first_name}</p>}
                </div>

                {/* Last Name */}
                <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input type="text" id="last_name" name="last_name" value={formik.values.last_name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Last Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300" />
                  {formik.touched.last_name && formik.errors.last_name && <p className="text-red-500 text-sm mt-1 animate-fade-in">{formik.errors.last_name}</p>}
                </div>

                {/* Email */}
                <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300" />
                  {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm mt-1 animate-fade-in">{formik.errors.email}</p>}
                </div>

                {/* Password */}
                <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input type={showPassword ? "text" : "password"} id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Password" className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-all duration-300 transform hover:scale-110" aria-label="Toggle password visibility">
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm mt-1 animate-fade-in">{formik.errors.password}</p>}
                </div>

                {/* Checkbox */}
                <div className="flex items-start animate-fade-in" style={{ animationDelay: "0.8s" }}>
                  <input id="terms" type="checkbox" name="is_verify" checked={formik.values.is_verify || false} onChange={formik.handleChange} className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1 transition-all duration-300 cursor-pointer" />
                  <label htmlFor="terms" className="text-sm text-gray-600 ml-2 cursor-pointer">
                    I agree to the{" "}
                    <a href="/privacy-policy" className="text-blue-600 hover:underline transition-colors duration-300">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/terms-of-service" className="text-blue-600 hover:underline transition-colors duration-300">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <button type="submit" disabled={formik.isSubmitting} className="w-full bg-blue-600 text-white py-3.5 !rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 mt-6 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg animate-fade-in" style={{ animationDelay: "0.9s" }}>
                  {formik.isSubmitting ? "Creating Account..." : "Create Account"}
                </button>
              </form>

              <p className="mt-6 text-center text-base text-gray-600 animate-fade-in" style={{ animationDelay: "1s" }}>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 font-medium hover:underline transition-all duration-300 transform hover:scale-105 inline-block">
                  Sign In
                </Link>
              </p>

              {/* Terms */}
              <p className="text-base text-gray-500 text-center !mt-6 animate-fade-in" style={{ animationDelay: "1.1s" }}>
                By proceeding, you agree to Wishden Hotels{" "}
                <a href="#" className="text-blue-600 hover:underline transition-colors duration-300">
                  Privacy Policy
                </a>
                ,{" "}
                <a href="#" className="text-blue-600 hover:underline transition-colors duration-300">
                  User Agreement
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:underline transition-colors duration-300">
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
        <Footer />
      </main>
    </div>
  );
};

export default Register;
