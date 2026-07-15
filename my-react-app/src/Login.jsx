import { useState } from "react";
import { Link } from "react-router-dom";
import loginImage from "./assets/images.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please fill all fields");
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

    if (email === "admin@gmail.com" && password === "123456") {
      alert("Login Successfull");
    } else {
      alert("Invalid Email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-100">
      <div className="w-[900px] min-h-[500px] bg-white rounded-2xl flex overflow-hidden">
        <div className="w-1/2 p-20">
          <h2 className="text-3xl font-bold text-red-900 mb-4 text-center">
            Login
          </h2>
          <form onSubmit={handleLogin}>
            <input
              className="w-full border rounded-lg px-4 py-3 mb-4"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="w-full border rounded-lg px-4 py-3 mb-4"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-amber-800 text-amber-50 py-3 rounded-b-lg hover:bg-amber-600 transition mb-4"
            >
              Login
            </button>

            <p className="text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-600">
                Register
              </Link>
            </p>
          </form>
        </div>

        <div className="w-1/2 bg-red-300 flex items-center justify-center">
          <img
            src={loginImage}
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
