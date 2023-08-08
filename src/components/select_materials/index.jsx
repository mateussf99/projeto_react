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

    return (
        <div className='forms-materias'>
            <h2>Selecione as matérias em que está matriculado:</h2>
            <form action="#" method='get'>
                <p className='tipo-aluno'>
                    <label>Eu sou:</label>
                    <input type="radio" id="Aluno" name="dicente" value="Aluno" required />
                    <label>Aluno</label>
                    <input type="radio" id="Monitor" name="dicente" value="Monitor" required />
                    <label>Monitor</label>
                </p>
                <p className='periodo'>
                    <label>Período:</label>
                    <select onChange={handlePeriodChange} value={selectedPeriod} required>
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
                    {filteredMaterias.map((materia, index) => (
                        <label className="checkbox-label" key={index}>
                            <input type="checkbox" name="materiaCheckbox" value={materia.nome} defaultChecked={true} />
                            {materia.nome}
                        </label>
                    ))}
                </p>
                <p className='todas'>
                    <label>Todas as matérias:</label>
                    <input type="text" id="materias" name="materias" placeholder="Matéria" value={inputValue} onChange={handleMateriasInputChange} />
                </p>
                <div className='materias-todas'>
                    {filteredMateriasTodas.map((materia, index) => (
                        <label className="checkbox-label" key={index}>
                            <input type="checkbox" name="materiaCheckbox" value={materia.nome} checked={selectedMaterias.includes(materia.nome)} onChange={handleMateriaCheckboxChange} />
                            {materia.nome}
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
