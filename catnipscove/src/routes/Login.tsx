// LoginPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { AuthContextType } from "../Interface";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username == "catnip" && password == "mjao") {
      login();
      navigate("/Manage");
    } else {
      console.log("wrong password");
    }
  };

  return (
    <>
      <section className="wrapper-form">
        <h1>Login</h1>
        <br></br>
        <p> Please Login to access the restricted area </p>
        <br></br>
        <p>( u = catnip , pass = mjao)</p>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <button onClick={logout}>Logout</button>
        </form>
      </section>
    </>
  );
};

export default Login;
