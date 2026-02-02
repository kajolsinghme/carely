import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { signUpApi } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();
  
  const validate = () => {
  if (!name.trim()) {
    toast.error("Name is required");
    return false;
  }

  if (name.trim().length < 2) {
    toast.error("Name must be at least 2 characters");
    return false;
  }

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

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  if (!role) {
    toast.error("Please select a role");
    return false;
  }

  return true;
};


  const handleSignup = async () => {
    if (!validate()) return;
    try {
      await signUpApi({ name, email, password, role });

      toast.success("Account created successfully! Please log in");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      const error = err as AxiosError<{ error: string }>;
      toast.error(error.response?.data?.error || "Signup failed");
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
                Create your account
              </h2>

              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-b border-gray-300 focus:border-teal-600 outline-none py-2 text-sm"
                />

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

                <label htmlFor="role" className="text-sm text-gray-600 ">
                  Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="border p-2 rounded w-full mt-3 focus:ring-teal-600"
                >
                  <option value="">Select role</option>
                  <option value="Patient">Patient</option>
                  <option value="Doctor">Doctor</option>
                </select>

                <button
                  type="button"
                  className="w-full bg-teal-600 mt-6 text-white rounded-full py-2 font-medium hover:opacity-90 transition"
                  onClick={handleSignup}
                >
                  Sign Up
                </button>

                <p className="text-sm text-center text-gray-600 pt-2">
                  Already have an account?{" "}
                  <span
                    className="text-teal-600 font-medium cursor-pointer hover:underline"
                    onClick={() => navigate("/login")}
                  >
                    Log In
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

export default Signup;
