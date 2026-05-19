import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página

    axios
      .post("http://localhost:8000/api/v2/users", {
        username,
        password,
      })
      .then(() => {
        alert("Usuario registrado con éxito");
      })
      .catch(() => {
        alert("Error registrando usuario");
      });
  };

  return (
    <div>
      <h1>Registro</h1>

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

        <input type="submit" value="Registrarse" />
      </form>
    </div>
  );
}
