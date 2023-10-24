import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cadastro from "./pages/cadastro";
import SelecaoPage from "./pages/selecao_materias";
import SelecaoMonitor from "./pages/selecao_monitor";
import Materias from "./pages/materia/";
import Questao from "./pages/questao/";
import UserPage from "./pages/user_page/";
import AdminPage from "./pages/Admin";
import Busca from "./pages/busca";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/selecao" element={<SelecaoPage />} />
          <Route path="/selecaomonitor" element={<SelecaoMonitor />} />
          <Route path="/materia" element={<Materias />} />
          <Route path="/questao/:idboard/:idpost" element={<Questao />} />
          <Route path="/busca/:search" element={<Busca/>} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
  );
}

export default App;
