import PropTypes from 'prop-types';
import './style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MateriasSelectMenu({ list, onChange }) {
    const navigate = useNavigate();
    const [selectedMateria, setSelectedMateria] = useState(0);

    const changeSelected = (index) => {
        setSelectedMateria(index);
        navigate("/materia");

        onChange(list[index].id);
    };

    return (
        <div className='materia_selector'>
            <header className='title'>
                <h2>Diciplinas</h2>
            </header>
            <div>
                {list.map((materia, index) => (
                    <button onClick={() => changeSelected(index)} className='materia_list' key={materia.id}>
                        {index === selectedMateria ? (
                            <span className='selected'>{materia.name}</span>
                        ) : (
                            <span className='materia'>{materia.name}</span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}

MateriasSelectMenu.propTypes = {
    selected: PropTypes.object, // Assuming selected is an object with 'id' and 'name' properties
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
    onChange: PropTypes.func,
};

export default MateriasSelectMenu;
