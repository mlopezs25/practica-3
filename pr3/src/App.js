import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from "./components/Question";
import Register from "./components/Register";
import Login from "./components/Login";
import NewQuestion from "./components/NewQuestion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/questions" element={<Questions />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newquestion" element={<NewQuestion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

