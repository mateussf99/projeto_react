import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import file_open from '../../assets/img/file_open.svg';


const Index = () => {
    const materias = [
        { nome: "calculo diferencial e integral", periodo: 1 },
        { nome: "logica", periodo: 1 },
        { nome: "programção 1", periodo: 1 },
        { nome: "banco de dados", periodo: 2 },
        { nome: "estrutura de dados", periodo: 2 },
        { nome: "geometria analitica", periodo: 2 },
        { nome: "organização e arquitetura de computadores", periodo: 2 },
    ];

    const navigate = useNavigate();

    const selectedPeriod = '';
    const [selectedMaterias, setSelectedMaterias] = useState([]);


    const filteredMaterias = materias.filter(materia => materia.periodo.toString() === selectedPeriod);

    const selectedMateriasPeriodo = filteredMaterias.map(materia => materia.nome);

    const [inputValue, setInputValue] = useState('');
    const [filteredMateriasTodas, setFilteredMateriasTodas] = useState(materias);

    const handleMateriasInputChange = (event) => {
        const inputValue = event.target.value;
        setInputValue(inputValue);

        const filteredMaterias = materias.filter(materia =>
            materia.nome.toLowerCase().includes(inputValue.toLowerCase())
        );

        setFilteredMateriasTodas(filteredMaterias);
    };

    const handleMateriaCheckboxChange = (event) => {
        const materiaNome = event.target.value;

        if (event.target.checked) {
            setSelectedMaterias([...selectedMaterias, materiaNome]);
        } else {
            setSelectedMaterias(selectedMaterias.filter(materia => materia !== materiaNome));
        }
    };

    const filteredMateriasTodasFiltered = filteredMateriasTodas.filter(materia =>
        !selectedMateriasPeriodo.includes(materia.nome)
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Matérias selecionadas:');
        selectedMaterias.forEach(materia => {
            console.log(materia);
        });
        navigate("/materia");
    }

    return (
        <div className='forms-materias-monitor'>
            <h2>Selecione as matérias que é monitor:</h2>
            <form action="#" onSubmit={handleSubmit}>
            
                <p className='todas-materias'>
                    <label>Todas as matérias:</label>
                    <input type="text" id="materias" name="materias" placeholder="Matéria" value={inputValue} onChange={handleMateriasInputChange} />
                </p>
                <div className='materias-todas-monitor'>
                    {filteredMateriasTodasFiltered.map((materia, index) => (
                        <label className="checkbox-label" key={index}>
                            <input type="checkbox" name="materiaCheckbox" value={materia.nome} checked={selectedMaterias.includes(materia.nome)} onChange={handleMateriaCheckboxChange} />
                            {materia.nome}
                        </label>
                    ))}
                </div>
                <div className='arquivo-comprovacao'>
                    <h3>Documento de confirmação:</h3>
                    <div className='arquivo'>
                        <label htmlFor='arquivo-comprovacao'><img src={file_open} alt="" /></label>
                        <input type="file" name="arquivo-comprovacao" id="arquivo-comprovacao"  />
                    </div>
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