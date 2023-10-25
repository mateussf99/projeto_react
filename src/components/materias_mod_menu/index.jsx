import './style.css';
import { useEffect, useState } from 'react';
import Block from "../block_modal";
import { useNavigate } from 'react-router-dom';


function MateriasModMenu() {
  const token = JSON.parse(localStorage.getItem('token'));
  const boardId = JSON.parse(localStorage.getItem('boardId'));
  const [posts, setPosts] = useState([]);
  const [reports, setReports] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/posts/unanswered/${boardId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("modbar teste")
        console.log(data);
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetch(`http://localhost:8080/report/board/${boardId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("modbar teste")
        console.log(data);
        setReports(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const goToQuestion = (event, postId) => {
    event.preventDefault();
    navigate(`/questao/${boardId}/${postId}`);
  }

  return (
    <div className='materia_mod_menu'>
      <header className='title'>
        <h2>Moderação</h2>
      </header>
      <div>
        <div className='mod_types'>
          <div className='mod_list_title'><span>Perguntas não</span><br /><span> Respondidas</span></div>
        </div>
        <ul className='mod_list_container'>
          {posts.map((post, index) => (
            <li className='mod_list_span' key={index} onClick={(event) => goToQuestion(event, post.id)} style={{ cursor: "pointer" }}>{post.title}</li>
          ))}
        </ul>
      </div>
      <div className='mod_types'>
        <span>Problemas Reportados</span>
      </div>
      <ul className='mod_list_container'>
        {reports.map((report, index) => (
          <div key={index} className='mod_menu_report_item'>
            <li className='mod_list_span' >{report.reason}</li>
            {report.idPost !== null ? <Block type="posts" id={report.idPost} /> :
              report.idComment !== null ? <Block type="comments" id={report.idComment} /> : "error"}
          </div>
        ))}

      </ul>
    </div>
  );
}

export default MateriasModMenu;
