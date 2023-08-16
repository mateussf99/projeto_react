import PropTypes, { string } from 'prop-types';
import './style.css';

function Index ({ selected, list }) {
    return (
        <div className='materia-selector'>
            <header className='title'>
                <h2>Diciplinas</h2>
            </header>
            <div>
                {list.map((materia, index) => (
                    <button className='materia-list' key={index}>
                        {materia === selected ? <span className="selected" >{materia}</span>: <span className='materia'>{materia}</span>}
                    </button>
                ))}
            </div>
        </div>
    );
}

Index.propTypes = {
    selected: PropTypes.string,
    list: PropTypes.arrayOf(string),
}

export default Index;