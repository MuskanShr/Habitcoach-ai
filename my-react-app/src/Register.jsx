import { useState } from "react";
import { Link, UNSAFE_decodeViaTurboStream } from "react-router-dom";
import RegisterImage from "./assets/images.jpg";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (name.length < 3) {
      alert("Name must be at least 3 characters.");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Registered Successfully!");

    console.log({
      name,
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen bg-amber-100 items-center flex justify-center">
      <div className="bg-white text-center max-w-225 min-h-125 rounded-2xl flex overflow-hidden">
        <div className="w-1/2 p-20">
          <h2 className="text-4xl mb-6 text-red-900 font-bold">Register</h2>
          <form onSubmit={handleRegister}>
            <input
              className="w-full border rounded-lg px-4 py-3 mb-5"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="w-full max-w-sm border rounded-lg px-4 py-2 mb-5"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="w-full max-w-sm border rounded-lg px-4 py-2 mb-5"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              className="w-full max-w-sm border rounded-lg px-4 py-2 mb-5"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-red-800 text-lg text-amber-50 rounded-lg py-3 hover:bg-amber-600 transition mb-4"
            >
              Register
            </button>
            <p className="text-center text-md">
              Already have an account?
              <Link to="/login" className="text-blue-600 ">
                {" "}
                Login
              </Link>
            </p>
          </form>
        </div>
        <div className="w-1/2 bg-red-300 flex items-center justify-center">
          <img
            src={RegisterImage}
            alt="Register"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
