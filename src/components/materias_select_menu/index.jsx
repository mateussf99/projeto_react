import PropTypes, { string } from 'prop-types';
import './style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MateriasSelectMenu ({ selected, list }) {
    const navigate = useNavigate();

    const [selectedMateria, setSelectedMateria] = useState(selected);

    const changeSelected = (materia) => {
        setSelectedMateria(materia);
        navigate("/materia")

    }


    return (
        <div className='materia_selector'>
            <header className='title'>
                <h2>Diciplinas</h2>
            </header>
            <div>
                {list.map((materia, index) => (
                    <button onClick={ () => changeSelected(materia) } className='materia_list' key={index}>
                        {materia === selectedMateria ? <span className='selected' >{materia}</span>: <span className='materia'>{materia}</span>}
                    </button>
                ))}
            </div>
        </div>
    );
}

MateriasSelectMenu.propTypes = {
    selected: PropTypes.string,
    list: PropTypes.arrayOf(string),
}

export default MateriasSelectMenu;