import PropTypes, { string } from 'prop-types';
import './style.css';

function MateriasSelectMenu ({ selected, list }) {
    return (
        <div className='materia_selector'>
            <header className='title'>
                <h2>Diciplinas</h2>
            </header>
            <div>
                {list.map((materia, index) => (
                    <button className='materia_list' key={index}>
                        {materia === selected ? <span className='selected' >{materia}</span>: <span className='materia'>{materia}</span>}
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