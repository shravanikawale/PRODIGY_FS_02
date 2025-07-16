// Register.js
import axios from 'axios';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Register successful");
      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <form onSubmit={loginHandler}>
      <input type="email" onChange={e => setEmail(e.target.value)} />
      <input type="password" onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
