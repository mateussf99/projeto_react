import "./style.css";
import PropTypes from "prop-types";
import user from "../../assets/img/user.svg";
import add from "../../assets/img/add.svg";
import up from "../../assets/img/up.svg";
import down from "../../assets/img/down.svg";
import report from "../../assets/img/report.svg";
import { useNavigate } from "react-router-dom"

function Materias({ materia }) {
  const navigate = useNavigate();

  const goToQuestion = () => {
    navigate("/questao");
  }
  return (
    <div className="container">
      <header className="materia_title">
        <a
          href="/criarquestao"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img src={add} />
        </a>
        <h2>{materia.name}</h2>
        <div />
      </header>
      <div onClick={goToQuestion} className="question_container">
        {materia.posts.map((post, index) => (
          <div key={index} className="question">
            <header>
              <img src={user} />
              <h3>{post.title}</h3>
            </header>
            <p>{post.description}</p>
            <div className="rating">
              <div>
                <img src={up} />
                <img src={down} />
              </div>
              <img src={report} />
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
      })
    ).isRequired,
  }).isRequired,
};

export default Materias;
