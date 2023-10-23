import { useEffect, useRef, useState } from 'react';
import PropTypes from "prop-types";
import block from '../../assets/img/block.svg'
import "./style.css"

function Block({ id, reportId, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeout, setTimeout] = useState("0");
  const [post, setPost] = useState();

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    const url = `http://localhost:8080/${type}/${id}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
      });

      if (!response.ok) {
        console.log(response);
      }

      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error(error);
    }
  }

  const reason = useRef();

  const HandleClick = () => {
    const dataToSend = {
      reason: reason.current.value,
      time: timeout,
    };

    fetch(`http://localhost:8080/users/block/${reportId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response);
        } else {
          return response.json();
        }
      })
      .then((data) => {  
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSelectChange = (event) => {
    setTimeout(event.target.value);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="block_header"
      >
        <img src={block} alt="Block Icon" />
      </button>
      {isOpen ? (
        <div className="modal">
          <div className="block_container">
            <h2 className="block_title">Bloquear Usuário</h2>
            <form className="block_form">
              {type === "comments" ? <div>
                <span className="block_label">Resposta que foi reportada: </span>
                <br/>
                <div dangerouslySetInnerHTML={{ __html: post.text }}/>
                
              </div>
               :
                type === "posts" ? <div>
                  <span className="block_label">    Questão que foi reportada: </span>
                <br/>
                <span>{post.title}</span>
                <br/>
                <div dangerouslySetInnerHTML={{ __html: post.text }}/>
                </div> : "ERROR"}
              <div className="block_title">
                <span className="block_label">Motivo:</span>
                <textarea className="block_textarea" ref={reason} />
              </div>
              <p className='periodo block_title'>
                <label>Tempo:</label>
                <select onChange={handleSelectChange}>
                  <option value="" disabled>Escolha a tempo</option>
                  <option value="0">Nenhum</option>
                  <option value="2">1 Semana</option>
                  <option value="3">2 Semanas</option>
                  <option value="4">1 Mês</option>
                  <option value="5">6 Meses</option>
                  <option value="6">Permanente</option>
                </select>
              </p>
              <div className="new_question_button_container">
                <button onClick={HandleClick}>Comfirmar</button>
                <button onClick={closeModal}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}

Block.propTypes = {
  id: PropTypes.number.isRequired,
  reportId: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
}

export default Block;