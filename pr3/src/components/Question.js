import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

console.log("EL COMPONENTE QUESTIONS SE HA MONTADO");

export default function Questions() {
  const [preguntas, setPreguntas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v2/dashboards/1")
      .then((res) => {
        console.log("RESPUESTA COMPLETA:", res.data);
        setPreguntas(res.data.questions);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Preguntas del Dashboard 1</h1>

      <Link to="/newquestion">Crear nueva pregunta</Link>

      {preguntas.length === 0 && <p>No hay preguntas</p>}

      {preguntas.map((p) => (
        <div key={p.question_id}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <small>Autor: {p.author}</small>
        </div>
      ))}
    </div>
  );
}