import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewQuestion() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem("token");

    axios
      .post(
        "http://localhost:8000/api/v2/dashboards/1/questions",
        { title, description },
        {
          headers: {
            "Session-Token": token,
          },
        }
      )
      .then(() => {
        alert("Pregunta creada con éxito");
        navigate("/questions");
      })
      .catch((err) => {
        console.error(err);
        alert("Error creando pregunta");
      });
  };

  return (
    <div>
      <h1>Nueva Pregunta</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input type="submit" value="Publicar" />
      </form>
    </div>
  );
}
