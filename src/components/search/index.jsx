import { useEffect, useState } from "react";
import "./style.css";
import user from "../../assets/img/user.svg";
import up from "../../assets/img/up.svg";
import down from "../../assets/img/down.svg";
import ReportModal from "../report";
import { useNavigate, useParams } from "react-router-dom";
import CriarQuestaoModal from "../criar_questao_modal";
import CriarRespostaModal from "../criar_resposta_modal";

function Search() {
  const { search } = useParams();
  const token = JSON.parse(localStorage.getItem("token"));
  const username = JSON.parse(localStorage.getItem("username"));
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/posts/search/${search}/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const goToQuestion = (id) => {
    navigate(`/questao/search/${id}`);
  };

  const upvotePost = (id, event) => {
    event.stopPropagation();
    fetch(`http://localhost:8080/posts/upvote/${id}/${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const downvotePost = (id, event) => {
    event.stopPropagation();
    fetch(`http://localhost:8080/posts/downvote/${id}/${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (posts.length === 0) {
    return (
      <div className="container">
        <header className="materia_title">
          <div className="mat_header_empty_div" />
          <h2>Pesquisa: {search}</h2>
          <div className="mat_header_empty_div" />
        </header>
        <span className="no_questions_div">Nenhum resultado encontrado!</span>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="materia_title">
        <div className="mat_header_empty_div" />
        <h2>Pesquisa: {search}</h2>
        <div className="mat_header_empty_div" />
      </header>
      <div className="question_container">
        {posts.map((post, index) => (
          <div
            key={index}
            className="question"
            onClick={() => goToQuestion(post.id)}
          >
            <header>
              <img src={user} alt="User" />
              <h3>{post.title}</h3>
              <span className="date">{post.date}</span>
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.text }} />
            <div className="rating">
              <div className="vote_div">
                {post.voteStatus === "upvote" ? (
                  <button
                    className="upvoted"
                    onClick={(event) => upvotePost(post.id, event)}
                  >
                    <img src={up} />
                  </button>
                ) : (
                  <button
                    className="vote_button"
                    onClick={(event) => downvotePost(post.id, event)}
                  >
                    <img className="vote" src={up} />
                  </button>
                )}
                {post.voteStatus === "downvote" ? (
                  <button
                    className="downvoted"
                    onClick={(event) => downvotePost(post.id, event)}
                  >
                    <img src={down} />
                  </button>
                ) : (
                  <button
                    className="vote_button"
                    onClick={(event) => downvotePost(post.id, event)}
                  >
                    <img className="vote" src={down} />
                  </button>
                )}
                <CriarRespostaModal questionId={post.id} type="small-button" />
              </div>
              <ReportModal postId={post.id} username={post.user} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
