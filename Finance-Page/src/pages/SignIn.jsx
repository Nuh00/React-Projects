import React from "react";
import "../components/signIn.css";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password, confirmPassword);
  }
  return (
    <>
      <div className="sign-in">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Password"
          />
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            require
            type="password"
            placeholder="Confirm password"
          />
          <button>Sign In</button>
        </form>
      </div>
    </>
  );
}

export default SignIn;
