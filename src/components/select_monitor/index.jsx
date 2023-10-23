import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import file_open from '../../assets/img/file_open.svg';

const Index = () => {
    const username = JSON.parse(localStorage.getItem('username'));
    const [materias, setMaterias] = useState([]);
    const [certificateFile, setCertificateFile] = useState(null);

    useEffect(() => {
        fetchBoards();
    }, []);

    const fetchBoards = () => {
        fetch('http://localhost:8080/boards', {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    console.log(response)
                    throw Error();
                }
                return response.json();
            })
            .then(data => {
                setMaterias(data);
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const navigate = useNavigate();

    useEffect(() => {
        setFilteredMaterias(materias);
    }, [materias]);

    const [inputValue, setInputValue] = useState('');
    const [filteredMaterias, setFilteredMaterias] = useState(materias);

    const handleMateriasInputChange = (event) => {
        const inputValue = event.target.value;
        setInputValue(inputValue);

        setFilteredMaterias(materias.filter(materia =>
            materia.name.toLowerCase().includes(inputValue.toLowerCase())
        ));
    };

    const [selectedSubjectId, setSelectedSubjectId] = useState(null);

    const handleMateriaCheckboxChange = (event) => {
        const selectedId = event.target.value;
        setSelectedSubjectId(selectedId);
    };

    const certificateFileRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append("pdfFile", certificateFile);
        data.append("username", username);
        data.append("boardId", selectedSubjectId);

        fetch("http://localhost:8080/request/create", {
            method: 'POST',
            body: data,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.data;
            })
            .then(data => {
                console.log(data);
                navigate('/materia');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error', error);
            });
    };

    return (
        <div className='forms-materias-monitor'>
            <h2>Selecione as matérias que é monitor:</h2>
            <form action="#" onSubmit={handleSubmit}>
                <p className='todas-materias'>
                    <label>Todas as matérias:</label>
                    <input type="text" id="materias" name="materias" placeholder="Matéria" value={inputValue} onChange={handleMateriasInputChange} />
                </p>
                <div className='materias-todas-monitor'>
                    {filteredMaterias.map((materia, index) => (
                        <label className="checkbox-label" key={index}>
                            <input type="radio" name="materiaCheckbox" onChange={handleMateriaCheckboxChange} value={materia.id} />
                            {materia.name}
                        </label>
                    ))}
                </div>
                <div className='arquivo-comprovacao'>
                    <h3>Documento de confirmação (PDF):</h3>
                    <div className='arquivo'>
                        <label htmlFor='arquivo-comprovacao'><img src={file_open} alt="" /></label>
                        <input
                            type="file"
                            name="arquivo-comprovacao"
                            id="arquivo-comprovacao"
                            accept=".pdf"
                            onChange={(event) => {
                                const file = event.target.files[0];
                                setCertificateFile(file);
                            }}
                            ref={certificateFileRef}
                        />
                    </div>
                </div>
                <div className='button-container'>
                    <div className='confirmar'>
                        <button type="submit">confirmar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Index;
