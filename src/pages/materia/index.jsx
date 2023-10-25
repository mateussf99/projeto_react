import './style.css';
import Header from '../../components/header';
import Materias from '../../components/materias_main/';
import MateriasSelectMenu from '../../components/materias_select_menu/';
import MateriasModMenu from '../../components/materias_mod_menu';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Materia = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const [isLoading, setIsLoading] = useState(true);
  const [listaMaterias, setListaMaterias] = useState([]);
  const [selectedMateriaId, setSelectedMateriaId] = useState(null);
  const navigate = useNavigate();
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
      <div className='body'>
        <MateriasSelectMenu list={listaMaterias} onChange={handleMateriaChange} />
        <Materias id={selectedMateriaId} />
        {role === "MONITOR" ? <MateriasModMenu /> : null}
      </div>
    </div>
  )
}

export default Materia;