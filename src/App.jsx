import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/home';
import Cadastro from './pages/cadastro';
import SelecaoPage from './pages/selecao_materias';
import SelecaoMonitor from './pages/selecao_monitor';
import Materias from './pages/materia/';
import Questao from './pages/questao/';
import UserPage from './pages/user_page/';


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/selecao" element={<SelecaoPage />} />
        <Route path="/selecaomonitor" element={<SelecaoMonitor />} />
        <Route path="/materia" element={<Materias />} />
        <Route path="/questao" element={<Questao />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
