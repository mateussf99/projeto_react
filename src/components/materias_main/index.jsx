import "./style.css";
import PropTypes from "prop-types";
import user from "../../assets/img/user.svg";
import add from "../../assets/img/add.svg";
import up from "../../assets/img/up.svg";
import down from "../../assets/img/down.svg";
import ReportModal from "../report";
import { useNavigate } from "react-router-dom"
import CriarQuestaoModal from "../criar_questao_modal";

function Materias({ materia }) {

  const navigate = useNavigate();

  const goToQuestion = () => {
    navigate("/questao");
  }

  const goToCreateAnswer = (event) => {
    event.stopPropagation();
    navigate("/criarresposta")
  }

  return (
    <div className="container">
      <header className="materia_title">
        <CriarQuestaoModal/>
        <h2>{materia.name}</h2>
        <div className="mat_header_empty_div"/>
      </header>
      <div onClick={goToQuestion} className="question_container">
        {materia.posts.map((post, index) => (
          <div key={index} className="question">
            <header>
              <img src={user} />
              <h3>{post.title}</h3>
              <span className="date">{post.date}</span>
            </header>
            <p>{post.description}</p>
            <div className="rating">
              <div>
                <img className='vote' src={up} />
                <img className='vote' src={down} />
                <button style={{ border: "none", background: "none" }} onClick={goToCreateAnswer}><img src={add} /></button>
              </div>
              <ReportModal />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Materias.propTypes = {
  materia: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Materias;
