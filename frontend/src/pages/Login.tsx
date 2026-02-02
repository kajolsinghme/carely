import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { loginApi } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";

export default function LoginUI() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const navigate = useNavigate();

  const handleLogin = async () => {
  try {
    const data = await loginApi({ email, password });
    localStorage.setItem("token", data.token);
    toast.success("Login successful!");
    setTimeout(() => navigate("/"), 2000 )
    
  } catch (err) {
  const error = err as AxiosError<{ error: string }>;
  toast.error(error.response?.data?.error || "Login failed");
}
};

  return (
    <>
      <Navbar />
      <div className="bg-[#f8f8f8]">
        <div className="flex items-center justify-center py-10">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-40 bg-teal-600 relative">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white p-3 rounded-xl shadow">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="#0d9488"
                    strokeWidth="2"
                  />
                  <path d="M3 8h18" stroke="#0d9488" strokeWidth="2" />
                </svg>
              </div>
            </div>

            <div className="px-6 py-8">
              <h2 className="text-xl font-semibold text-center mb-6">
                Log In to your account
              </h2>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-gray-300 focus:border-teal-600 outline-none py-2 text-sm"
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-b border-gray-300 focus:border-teal-600 outline-none py-2 text-sm"
                />

                <div className="text-right">
                  <button
                    type="button"
                    className="text-xs text-teal-600 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="button"
                  className="w-full bg-teal-600 text-white rounded-full py-2 font-medium cursor-pointer hover:opacity-90 transition"
                  onClick={handleLogin}
                >
                  Log in
                </button>

               <p className="text-sm text-center text-gray-600">
                Don't have an account?{" "}
                <span className="text-teal-600 font-medium cursor-pointer hover:underline" onClick={() => navigate('/signup')}>
                   Sign Up
                </span>
               </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
