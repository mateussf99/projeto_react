import './style.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userImg from "../../assets/img/user.svg"
import Senha from "../altera_senha"

function Index() {
    const token = JSON.parse(localStorage.getItem("token"));
    const username = JSON.parse(localStorage.getItem("username"));
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const mudarMaterias = () => {
        navigate("/selecao");
    }

    const monitoria = () => {
        navigate("/selecaomonitor");
    }

    const mudarSenha = () => {
        navigate("/senha");
    }

    useEffect(() => {
        fetch(`http://localhost:8080/users/${username}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);


    if (isLoading) {
        return <div>isLoading</div>
    }

    return (
        <div className='user_container'>
            <div className='basic_user_data'>
                <img src={userImg} />
                <div>
                    <span>{JSON.parse(localStorage.getItem('username'))}</span>
                    <br />
                    <span>{user.login}</span>
                </div>
                <span className='pontuacao'>Pontuação: {user.score}</span>
            </div>
            <div className='user_page_materias'>
                <span>Materias:</span>
                <button onClick={mudarMaterias} className='user_page_button'>Alterar Matérias</button>
            </div>
            <div className='user_page_materia_list'>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {user.boards.length > 0 ? (
                        user.boards.map((board, index) => (
                            <li key={index}>{board.name}</li>
                        ))
                    ) : (
                        <li>Nenhuma matéria</li>
                    )}
                </ul>
            </div>
            <div className='user_page_QaA_container'>
                <div className='user_page_questions_container'>
                    <span>Questões</span>
                    <ul className='user_page_question' style={{ listStyleType: 'none', padding: 0 }}>
                        {user.posts.length > 0 ? (
                            user.posts.map((post, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: post.text }}/>
                            ))
                        ) : (
                            <li>Nenhuma pergunta</li>
                        )}
                    </ul>

                </div>
                <div className='user_page_vertical_line' />
                <div className='user_page_questions_container'>
                    <span>Respostas</span>
                    {user.comments.length > 0 ? <ul className='user_page_question' style={{ listStyleType: 'none', padding: 0 }}>
                        {user.comments.map((comment, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: comment.text }}/>
                        ))}
                    </ul> : <ul className='user_page_question' style={{ listStyleType: 'none', padding: 0 }}><li>Nenhum comentario</li></ul>}

                </div>
            </div>
            <div className='user_page_button_container'>
                <Senha login={user.login} />
                <button onClick={monitoria} className='user_page_button'>Voluntariar-se à Moderação</button>
            </div>
        </div>
    );
}

export default Index;