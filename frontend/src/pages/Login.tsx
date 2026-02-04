import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { loginApi } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const validate = () => {

  if (!email.trim()) {
    toast.error("Email is required");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    toast.error("Please enter a valid email");
    return false;
  }

  if (!password) {
    toast.error("Password is required");
    return false;
  }

  if (password.length < 4) {
    toast.error("Password must be at least 4 characters");
    return false;
  }

  return true;
};


  const handleLogin = async () => {
    if (!validate()) return;
    try {
      const data = await loginApi({ email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role)
      toast.success("Login successful!");
      setTimeout(() => navigate("/"), 1500);
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
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                    stroke="#0d9488"
                    strokeWidth="2"
                  />
                  <path
                    d="M4 20c0-4 4-6 8-6s8 2 8 6"
                    stroke="#0d9488"
                    strokeWidth="2"
                  />
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

                <button
                  type="button"
                  className="w-full mt-4 bg-teal-600 text-white rounded-full py-2 font-medium cursor-pointer hover:opacity-90 transition"
                  onClick={handleLogin}
                >
                  Log in
                </button>

                <p className="text-sm text-center text-gray-600">
                  Don't have an account?{" "}
                  <span
                    className="text-teal-600 font-medium cursor-pointer hover:underline"
                    onClick={() => navigate("/signup")}
                  >
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
};

export default Login;
