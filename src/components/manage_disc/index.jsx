import { useEffect, useState } from "react";
import CriarDisc from "../criar-disc";
import './style.css'

function ManageDisc () {
  const token = JSON.parse(localStorage.getItem('token'));
    const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = () => {
    fetch('http://localhost:8080/boards', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    })
      .then(response => {
        if (!response.ok) {
          console.log(response);
          throw new Error('Network response was not ok');
        }
        return response.json()
      })
      .then(data => {
        setBoards(data);
      })
      .catch(error => {
        console.error(error);
      });
  }

    return (<div>
        <div>
            <CriarDisc/>
        </div>
        <div className="disc_title">Todas as Disciplinas</div>
        <div>
            {boards.map((board, index) => (
                <div className="boards_font_style" key={index}>{board.name}</div>
            ))};
        </div>
    </div>);
}

export default ManageDisc;