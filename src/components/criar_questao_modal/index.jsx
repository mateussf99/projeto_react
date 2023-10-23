import { useRef, useState } from 'react';
import add from '../../assets/img/add.svg'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PropTypes from "prop-types";
import "./style.css"

function CriarQuestaoModal({ boardId }) {
  const token = JSON.parse(localStorage.getItem('token'));
  const titleRef = useRef();
  const postRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const username = JSON.parse(localStorage.getItem('username'));

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      [{ align: [] }],
      ["link", "image"],
    ],
  };

  const formats = [
    "header",
    "font",
    "list",
    "bullet",
    "bold",
    "italic",
    "underline",
    "align",
    "link",
    "image",
  ];

  const handleSubmit = async () => {
    const data = {
      username: username,
      boardId: boardId,
      title: titleRef.current.value,
      text: postRef.current.value,
    };
  
    try {
      const response = await fetch('http://localhost:8080/boards/create-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      console.log(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div>
      <button
        onClick={openModal}
        className="create_question_header"
      >

        <img src={add} />
        <span>Criar nova<br /> questão</span>
      </button>
      {isOpen ? (<div className="modal">

          <div className="new_question_container">
            <h2 className="new_question_title">Criar Nova Questão</h2>
            <form className="new_question_form" onSubmit={handleSubmit}>
              <div className="question_title">
                <span className="form_label">Titulo:</span>
                <input type="text" ref={titleRef}/>
              </div> <div>
                <span className="form_label">Descrição:</span>
                <ReactQuill
                  className="react_quill"
                  modules={modules}
                  formats={formats}
                  ref={postRef}
                />
              </div>
              <div className="new_question_button_container">
                <button type='submit'>Comfirmar</button>
                <button onClick={closeModal}>Cancelar</button>
              </div>
            </form>
          </div>

      </div>) : null}
    </div>
  );
}

CriarQuestaoModal.propTypes = {
  boardId: PropTypes.string.isRequired,
};


export default CriarQuestaoModal;
