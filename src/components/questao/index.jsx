import "./style.css";
import user from "../../assets/img/user.svg";
import back from "../../assets/img/back.svg";
import up from "../../assets/img/up.svg";
import down from "../../assets/img/down.svg";
import { useNavigate, useParams } from "react-router-dom";
import ReportModal from "../report";
import CriarRespostaModal from "../criar_resposta_modal";
import { useEffect, useState } from "react";

function Index() {
  const { id } = useParams();
  const username = JSON.parse(localStorage.getItem('username'));
  const navigate = useNavigate();

  const [question, setQuestion] = useState({
    title: "loading",
    text: "loading",
    date: "loading",
    user: "loafing"
  });

  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGoBack = () => {
    navigate(-1);
  };


  useEffect(() => {

    fetch(`http://localhost:8080/posts/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setQuestion(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetch(`http://localhost:8080/comments/posts/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setAnswers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    setIsLoading(false)
  }, [id]);

  const upvoteComment = (commentId) => {
    fetch(`http://localhost:8080/comments/upvote/${commentId}/${username}`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  const downvoteComment = (commentId) => {
    fetch(`http://localhost:8080/comments/downvote/${commentId}/${username}`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  const upvotePost = () => {
    fetch(`http://localhost:8080/posts/upvote/${id}/${username}`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  const downvotePost = () => {
    fetch(`http://localhost:8080/posts/downvote/${id}/${username}`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  if (isLoading) {
    return (
      <div>...loading</div>
    );
  }

  return (
    <div className="container">
      <header className="questao_title">
        <CriarRespostaModal questionId={id} />
        <h2>{question.title}</h2>
        <button
          onClick={handleGoBack}
          className="back_header"
        >
          <span>Voltar</span>
          <img src={back} />
        </button>
      </header>
      <div className="full-w" />
      <div className="answer_container">
        <div
          className="question"
          style={{
            backgroundColor: "var(--white-color)",
          }}
        >
          <header>
            <img src={user} alt="User" />
            <h3>{question.user}</h3>
            <span className="date">{question.date}</span>
          </header>
          <div dangerouslySetInnerHTML={{ __html: question.text }} />
          <div className="rating">
            <div>
              <button onClick={ upvotePost }>
                <img className='vote' src={up} />
              </button>
              <button onClick={ downvotePost }>
                <img className='vote' src={down} />
              </button>
            </div>
            <ReportModal />
          </div>
        </div>
        <div >
          {answers.map((comment, index) => (
            <div
              key={index}
              className="question"
              style={{
                backgroundColor:
                  comment.type === "resposta aceita"
                    ? "var(--secondary-color)"
                    : "var(--white-color)",
              }}
            >
              <header>
                <img src={user} alt="User" />
                <h3>{comment.user}</h3>
                <span className="date">{comment.date}</span>
              </header>
              <div dangerouslySetInnerHTML={{ __html: comment.text }} />
              <div className="rating">
                <div>
                  <button onClick={ () => upvoteComment(comment.id) }>
                    <img className='vote' src={up} />
                  </button>
                  <button onClick={ () => downvoteComment(comment.id) }>
                    <img className='vote' src={down} />
                  </button>
                </div>
                <ReportModal />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
