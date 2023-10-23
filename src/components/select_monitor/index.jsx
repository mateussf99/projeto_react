import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import file_open from '../../assets/img/file_open.svg';

const Index = () => {
    const username = JSON.parse(localStorage.getItem('username'));
    const [materias, setMaterias] = useState([]);

    useEffect(() => {
        fetchBoards();
    }, []);

    const fetchBoards = () => {
        fetch('http://localhost:8080/boards', {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response);
                }
                return response.json();
            })
            .then(data => {
                setMaterias(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
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

    const handleSubmit = () => {
        const certificateFile = certificateFileRef.current.files[0];

        if (!selectedSubjectId) {
            alert("Please select a subject.");
            return;
        }

        if (!certificateFile) {
            alert("Please upload a certificate file.");
            return;
        }

        if (certificateFile.type !== "application/pdf") {
            alert("Please upload a PDF file.");
            return;
        }

        const formData = new FormData();
        formData.append("pdfFile", certificateFile);
        formData.append("username", username);
        formData.append("boardId", selectedSubjectId);

        fetch("http://localhost:8080/request/create/", {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                navigate('/success');
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
