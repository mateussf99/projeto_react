import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Index = () => {
    const username = JSON.parse(localStorage.getItem('username'));
    const navigate = useNavigate();
    const [boards, setBoards] = useState([])
    const [selectedPeriod, setSelectedPeriod] = useState("0");
    const [selectedMaterias, setSelectedMaterias] = useState([]);

    useEffect(() => {
        fetchBoards();
    }, []);

    const fetchBoards = () => {
        fetch('http://localhost:8080/boards', {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    console.log(response);
                    throw new Error('Network response was not ok');
                }
                return response.json()
            })
            .then(data => {
                setBoards(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    const handleMateriaCheckboxChange = (event) => {
        const materiaId = event.target.value;

        if (event.target.checked) {
            setSelectedMaterias([...selectedMaterias, materiaId]);
        } else {
            setSelectedMaterias(selectedMaterias.filter(id => id !== materiaId));
        }

        const checkboxes = document.querySelectorAll(`input[name="materiaCheckbox"][value="${materiaId}"]`);

        checkboxes.forEach(checkbox => {
            checkbox.checked = event.target.checked;
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Matérias selecionadas:');
        const data = {
            username: username,
            boardIds: selectedMaterias.map(str => parseInt(str, 10)),
        }

        console.log(data);

        try {
            const response = await fetch('http://localhost:8080/users/addboards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                if (document.querySelector('input[name="dicente"]:checked').value === "Aluno") {
                    navigate("/materia")
                }
                if (document.querySelector('input[name="dicente"]:checked').value === "Monitor") {
                    navigate("/selecaomonitor")
                }
            } else {
                console.log(response);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    const filteredBoards = boards.filter(board => board.period === selectedPeriod);

    return (
        <div className='forms-materias'>
            <h2>Selecione as matérias em que está matriculado:</h2>
            <form action="#" onSubmit={handleSubmit}>
                <p className='tipo-aluno'>
                    <label>Eu sou:</label>
                    <input type="radio" id="Aluno" name="dicente" value="Aluno" required />
                    <label>Aluno</label>
                    <input type="radio" id="Monitor" name="dicente" value="Monitor" required />
                    <label>Monitor</label>
                </p>
                <p className='periodo'>
                    <label>Período:</label>
                    <select value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)}>
                        <option value="" disabled>Escolha o período</option>
                        <option value="1">1° Período</option>
                        <option value="2">2° Período</option>
                        <option value="3">3° Período</option>
                        <option value="4">4° Período</option>
                        <option value="5">5° Período</option>
                        <option value="6">6° Período</option>
                        <option value="7">7° Período</option>
                        <option value="8">8° Período</option>
                    </select>
                </p>
                <p className='materias-periodo'>
                    {filteredBoards.map((materia, index) => (
                        <label className="checkbox-label" key={index}>
                            <input type="checkbox" name="materiaCheckbox" onChange={handleMateriaCheckboxChange} value={materia.id} />
                            {materia.name}
                        </label>
                    ))}
                </p>
                <p className='todas'>
                    <label>Todas as matérias:</label>
                    <input type="text" id="materias" name="materias" placeholder="Matéria" />
                </p>
                <div className='materias-todas'>
                    {boards.map((materia, index) => (
                        <label className="checkbox-label" key={index}>
                            <input type="checkbox" name="materiaCheckbox" onChange={handleMateriaCheckboxChange} value={materia.id} />
                            {materia.name}
                        </label>
                    ))}
                </div>
                <div className='button-container'>
                    <div className='confirmar'>
                        <button type="submit">confirmar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Index;