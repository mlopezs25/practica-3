import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/v2/sessions", {
        username,
        password,
      })
      .then((res) => {
        console.log("LOGIN OK:", res.data);

        sessionStorage.setItem("token", res.data.session_token);

        navigate("/questions");
      })
      .catch((err) => {
        console.error(err);
        alert("Error en login");
      });
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Entrar" />
      </form>
    </div>
  );
}

