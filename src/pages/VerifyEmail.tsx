import { toast } from "react-toastify";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { verifyEmail } from "../services/api";
import { Loader2 } from "lucide-react";
import { Header } from "../components/Header";
import TawkWidget from "../components/TawkWidget";
import Footer from "../components/Footer";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const email = searchParams.get("email") || "";

  // Countdown timer for resend
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (index: number, value: string) => {
    // Only allow alphanumeric characters (letters and numbers)
    if (value && !/^[a-zA-Z0-9]$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value; // Keep original case (uppercase or lowercase)
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);

    if (!/^[a-zA-Z0-9]+$/.test(pastedData)) {
      toast.error("Please paste only letters and numbers");
      return;
    }

    const newOtp = pastedData.split("");
    while (newOtp.length < 6) newOtp.push("");
    setOtp(newOtp);

    // Focus last filled input or first empty
    const focusIndex = Math.min(pastedData.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleVerify = async () => {
    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      toast.error("Please enter complete 6-character code");
      return;
    }

    setIsVerifying(true);

    try {
      const response = await verifyEmail({
        token: otpCode,
      });

      if (response.status === "OK") {
        toast.success("Email verified successfully!");
        // Navigate to reset password page with token
        navigate(`/reset-password?token=${otpCode}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Invalid or expired code. Please try again.");
      }
      // Clear OTP on error
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendCode = async () => {
    if (countdown > 0) return;

    setIsResending(true);

    try {
      // You can call your resend API here
      // await resendVerificationCode({ email });

      toast.success("Verification code resent to your email!");
      setCountdown(60);
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to resend code. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <TawkWidget />
      <main className="flex-1">
        <div className="flex flex-col bg-indigo-100 text-foreground overflow-x-hidden">
          <main className="flex-grow flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-md animate-fade-in">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* Header */}
                <div className="mb-8 text-center animate-slide-down" style={{ animationDelay: "0.1s" }}>
                  <div className="mb-4 mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Email</h2>

                  <p className="text-sm text-gray-600">We sent a verification code to</p>
                  <p className="text-sm font-semibold text-gray-900 mt-1 animate-pulse">{email || "your email"}</p>
                </div>

                {/* OTP Input - 6 digits */}
                <div className="mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  <label className="block text-sm font-medium text-gray-700 mb-3 text-center">Enter 6-character code</label>

                  <div className="flex gap-2 justify-center">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => {
                          inputRefs.current[index] = el;
                        }}
                        type="text"
                        inputMode="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={index === 0 ? handlePaste : undefined}
                        className="w-12 h-12 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300 transform hover:scale-105 animate-scale-in"
                        style={{
                          animationDelay: `${index * 0.05}s`,
                        }}
                        disabled={isVerifying}
                      />
                    ))}
                  </div>
                </div>

                {/* Verify Button */}
                <button onClick={handleVerify} disabled={isVerifying || otp.join("").length !== 6} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  {isVerifying ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    "Verify Email"
                  )}
                </button>

                {/* Resend Code */}
                <div className="mt-6 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <p className="text-sm text-gray-600 mb-2">Didn't receive the code?</p>

                  {countdown > 0 ? (
                    <p className="text-sm text-gray-500">
                      Resend code in <span className="font-semibold text-indigo-600 animate-pulse">{countdown}s</span>
                    </p>
                  ) : (
                    <button onClick={handleResendCode} disabled={isResending} className="text-sm text-indigo-600 font-semibold hover:underline disabled:opacity-50 transition-all duration-300 transform hover:scale-105">
                      {isResending ? "Sending..." : "Resend Code"}
                    </button>
                  )}
                </div>

                {/* Back to Login */}
                <div className="mt-8 text-center pt-6 border-t border-gray-200 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <Link to="/login" className="text-sm text-gray-600 hover:text-indigo-600 font-medium transition-all duration-300 transform hover:scale-105 inline-block">
                    ← Back to Login
                  </Link>
                </div>
              </div>

              {/* Help Text */}
              <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4 animate-slide-up" style={{ animationDelay: "0.6s" }}>
                <p className="text-sm text-indigo-800">
                  <span className="font-semibold">Note:</span> The verification code will expire in 10 minutes. Check your spam folder if you don't see the email.
                </p>
              </div>
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

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
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

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out forwards;
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

export default VerifyEmail;
