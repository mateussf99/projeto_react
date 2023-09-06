import "./style.css";
import PropTypes from "prop-types";
import user from "../../assets/img/user.svg";
import back from "../../assets/img/back.svg";
import up from "../../assets/img/up.svg";
import down from "../../assets/img/down.svg";
import { useNavigate } from "react-router-dom";
import ReportModal from "../report";
import CriarRespostaModal from "../criar_resposta_modal";

function Index({ questao }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <header className="questao_title">
     {/*    <a
          href="/criarresposta"
          className="create_answer_header"
        >
          <img src={add} />
          <span>Responder</span>
        </a> */}
        <CriarRespostaModal/>
        <h2>{questao.name}</h2>
        <button
          onClick={handleGoBack}
          className="back_header"
        >
          <span>Voltar</span>
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
              <h3>{post.user}</h3>
              <span className="date">{post.date}</span>
            </header>
            <p>{post.description}</p>
            <div className="rating">
              <div>
                <img className='vote' src={up} />
                <img className='vote' src={down} />
              </div>
              <ReportModal />
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
        user: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Index;
