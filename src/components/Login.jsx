import React, { useState } from "react";

const Login = ({ toggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields!");
      return;
    }
    alert("Login successful!");
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-80 text-white">
      <h2 className="text-2xl font-bold text-center text-red-500 mb-4">Login 🔑</h2>

      <form onSubmit={handleLogin} className="space-y-3">
        <div>
          <input
            type="email"
            className="w-full p-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="password"
            className="w-full p-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-black font-bold py-2 rounded-lg hover:bg-red-400 transition"
        >
          Login
        </button>
      </form>

      <div className="text-center mt-3 text-gray-400 text-sm">
        <span>Don't have an account? </span>
        <button onClick={toggle} className="text-red-500 hover:underline">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
