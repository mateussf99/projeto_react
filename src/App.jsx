import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/home';
import Cadastro from './pages/cadastro'
import Teste from './pages/teste';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </Router>
    );
}

export default App
