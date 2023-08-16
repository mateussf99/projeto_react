import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/home';
import Cadastro from './pages/cadastro'
import Selecao from './pages/selecao_materias';
import Materias from './pages/materia';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/selecao" element={<Selecao />} />
        <Route path="/materia" element={<Materias />} />
      </Routes>
    </Router>
    );
}

export default App
