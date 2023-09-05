import PropTypes, { string } from 'prop-types';
import './style.css';

function MateriasModMenu({ questions }) {
    return (
        <div className='materia_mod_menu'>
            <header className='title'>
                <h2>Moderação</h2>
            </header>
            <div>
                <div className='mod_list'>
                    <div className='mod_list_title'><span>Perguntas não</span><br /><span> Respondidas</span></div>
                    <span className='mod_notification'>2</span>
                </div>
                <ul className='mod_list_container'>
                    {questions.map((question, index) => {
                        return <li className='mod_list_span' key={index}>{question}</li>;
                    })}
                </ul>
            </div>
            <div className='mod_list'>
                <span>Problemas Reportados</span>
            </div>
        </div>
    );
}

MateriasModMenu.propTypes = {
    questions: PropTypes.arrayOf(string),
}

export default MateriasModMenu;
