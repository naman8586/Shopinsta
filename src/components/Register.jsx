import React, { useState } from "react";

const Register = ({ toggle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!termsAccepted) {
      alert("Please accept the terms and conditions!");
      return;
    }

    alert("Registration successful!");
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-80 text-white">
      <h2 className="text-2xl font-bold text-center text-red-500 mb-4">Sign Up ✨</h2>

      <form onSubmit={handleRegister} className="space-y-3">
        <input
          type="text"
          className="w-full p-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          className="w-full p-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="w-full p-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          className="w-full p-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <label className="flex items-center text-gray-400 text-sm">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
            className="mr-2 accent-red-500"
          />
          I agree to the{" "}
          <a href="#" className="text-red-500 hover:underline ml-1">
            Terms & Conditions
          </a>
        </label>

        <button
          type="submit"
          className="w-full bg-red-500 text-black font-bold py-2 rounded-lg hover:bg-red-400 transition"
        >
          Register
        </button>
      </form>

      <div className="text-center mt-3 text-gray-400 text-sm">
        <span>Already have an account? </span>
        <button onClick={toggle} className="text-red-500 hover:underline">
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
