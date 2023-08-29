import { useState } from 'react';
import './style.css';

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

    const [selectedPeriod, setSelectedPeriod] = useState('');
    const [selectedMaterias, setSelectedMaterias] = useState([]);

    const handlePeriodChange = (event) => {
        setSelectedPeriod(event.target.value);
    };

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

        console.log('Eu sou:', document.querySelector('input[name="dicente"]:checked').value);
        console.log('Período:', selectedPeriod);
        console.log('Matérias selecionadas:');
        selectedMaterias.forEach(materia => {
            console.log(materia);
        });
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
                    <p>
                        <label>Arraste um documento que confirme que émonitor para caixa abaixo:</label>
                        <input type="file" name="arquivo-comprovacao" id="arquivo-comprovacao" />
                    </p>
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