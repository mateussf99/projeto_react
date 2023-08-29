import "./style.css";
import PropTypes from "prop-types";
import user from "../../assets/img/user.svg";
import add from "../../assets/img/add.svg";
import back from "../../assets/img/back.svg";
import up from "../../assets/img/up.svg";
import down from "../../assets/img/down.svg";
import report from "../../assets/img/report.svg";
import { useNavigate } from "react-router-dom";

function Index({ questao }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <header className="questao_title">
        <a
          href="/criarresposta"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img src={add} />
        </a>
        <h2>{questao.name}</h2>
        <button
          onClick={handleGoBack}
          style={{ border: "none", background: "none"}}
        >
          <img src={back} />
        </button>
      </header>
      <div className="answer_container">
        {questao.posts.map((post, index) => (
          <div
            key={index}
            className="question"
            style={{
              backgroundColor:
                post.type === "resposta aceita"
                  ? "var(--secondary-color)"
                  : "var(--white-color)",
            }}
          >
            <header>
              <img src={user} alt="User" />
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

Index.propTypes = {
  questao: PropTypes.shape({
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

export default Index;
