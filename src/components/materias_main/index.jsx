import { useEffect, useState } from "react";
import "./style.css";
import PropTypes from "prop-types";
import user from "../../assets/img/user.svg";
import add from "../../assets/img/add.svg";
import up from "../../assets/img/up.svg";
import down from "../../assets/img/down.svg";
import ReportModal from "../report";
import { useNavigate } from "react-router-dom";
import CriarQuestaoModal from "../criar_questao_modal";

function Materias({ id }) {

  const navigate = useNavigate();
  const [materia, setMateria] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    fetch(`http://localhost:8080/boards/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMateria(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

      fetch(`http://localhost:8080/posts/board/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const goToQuestion = (id) => {
    navigate(`/questao/${id}`);
  };

  const goToCreateAnswer = (event) => {
    event.stopPropagation();
    navigate("/criarresposta");
  };

  if (!materia) {
    return <div>Loading...</div>;
  }

  console.log(materia);
  if (posts.length === 0) {
    return (
      <div className="container">
        <header className="materia_title">
          <CriarQuestaoModal boardId={id} />
          <h2>{materia.name}</h2>
          <div className="mat_header_empty_div" />
        </header>
        <span className="no_questions_div" >Está materia ainda não tem nenhuma pergunta, clique em criar nova questao e seja o primeiro a perguntar </span>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="materia_title">
        <CriarQuestaoModal boardId={id} />
        <h2>{materia.name}</h2>
        <div className="mat_header_empty_div" />
      </header>
      <div className="full-w"/>
      <div className="question_container">
        {posts.map((post, index) => (
          <div key={index} className="question" onClick={() => goToQuestion(post.id)}>
            <header>
              <img src={user} alt="User" />
              <h3>{post.title}</h3>
              <span className="date">{post.date}</span>
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.text }} />
            <div className="rating">
              <div>
                <img className="vote" src={up} alt="Upvote" />
                <img className="vote" src={down} alt="Downvote" />
                <button
                  style={{ border: "none", background: "none" }}
                  onClick={goToCreateAnswer}
                >
                  <img src={add} alt="Add Answer" className="icon" />
                </button>
              </div>
              <ReportModal postId={ post.id } username={ post.user }/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Materias.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Materias;
