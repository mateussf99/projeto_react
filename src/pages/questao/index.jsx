import "./style.css";
import Header from "../../components/header";
import Questoes from "../../components/questao/";
import MateriasSelectMenu from "../../components/materias_select_menu/";
import MateriasModMenu from '../../components/materias_mod_menu';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [listaMaterias, setListaMaterias] = useState([]);
  const [selectedMateriaId, setSelectedMateriaId] = useState(null);
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem('token'));
  const username = JSON.parse(localStorage.getItem('username'));
  const role = JSON.parse(localStorage.getItem('role'));
  useEffect(() => {
    fetchUserBoards();
  }, []);
  const fetchUserBoards = () => {
    if (username === "none") {
      navigate("/");
    }
    fetch(`http://localhost:8080/users/${username}/boards`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json()
      })
      .then(data => {
        if (data.length === 0) {
          navigate("/selecao");
        }
        console.log(data);
        setListaMaterias(data.map(board => ({ id: board.id, name: board.name })));
        setSelectedMateriaId(data[0].id);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  const handleMateriaChange = (id) => {
    setSelectedMateriaId(id);
  }

  console.log("teste: " + selectedMateriaId);

  if (isLoading) {
    return (
      <div>...loading</div>
    );
  }

  return (
    <div>
      <Header />
      <div className="body">
        <MateriasSelectMenu
          list={listaMaterias} onChange={handleMateriaChange}
        />
        <Questoes />
        {role === "MONITOR" ? <MateriasModMenu /> : null}
      </div>
    </div>
  );
};

export default Index;
