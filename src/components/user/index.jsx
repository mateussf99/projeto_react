import './style.css';
import PropTypes, { string } from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Index({ usuario }) {
    const navigate = useNavigate();

    const mudarMaterias = () => {
        navigate("/selecao");
    }

    const monitoria = () => {
        navigate("/selecaomonitor");
    }

    return (
        <div className='user_container'>
            <div className='basic_user_data'>
                <img src={usuario.imagem} />
                <div>
                    <span>{usuario.name}</span>
                    <br />
                    <span>{usuario.email}</span>
                </div>
                <span className='pontuacao'>Pontuação: {usuario.pontuacao}</span>
            </div>
            <div className='user_page_materias'>
                <span>Materias:</span>
                <button onClick={ mudarMaterias } className='user_page_button'>Alterar Matérias</button>
            </div>
            <div className='user_page_materia_list'>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {usuario.materias.map((materia, index) => (
                        <li key={index}>{materia}</li>
                    ))}
                </ul>
            </div>
            <div className='user_page_QaA_container'>
                <div className='user_page_questions_container'>
                    <span>Questões</span>
                    <ul className='user_page_question' style={{ listStyleType: 'none', padding: 0 }}>
                        {usuario.questoes.map((str, questao) => (
                            <li key={questao}>{str}</li>
                        ))}
                    </ul>
                </div>
                <div className='user_page_vertical_line'/>
                <div className='user_page_questions_container'>
                    <span>Respostas</span>
                    <ul className='user_page_question' style={{ listStyleType: 'none', padding: 0 }}>
                        {usuario.respostas.map((resposta, index) => (
                            <li key={index}>{resposta}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='user_page_button_container'>
                <button className='user_page_button'>Alterar Senha</button>
                <button onClick={ monitoria } className='user_page_button'>Voluntariar-se à Moderação</button>
            </div>
        </div>
    );
}

Index.propTypes = {
    usuario: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        pontuacao: PropTypes.number,
        imagem: PropTypes.instanceOf(File).isRequired,
        materias: PropTypes.arrayOf(string).isRequired,
        questoes: PropTypes.arrayOf(string).isRequired,
        respostas: PropTypes.arrayOf(string).isRequired,
    }).isRequired,
};

export default Index;