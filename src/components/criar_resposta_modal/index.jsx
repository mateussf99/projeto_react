import { useRef, useState } from 'react';
import add from '../../assets/img/add.svg'
import ReactQuill from "react-quill";
import PropTypes from "prop-types";
import "react-quill/dist/quill.snow.css";
import "./style.css"

function CriarRespostaModal({ questionId, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const token = JSON.parse(localStorage.getItem('token'));
  const username = JSON.parse(localStorage.getItem('username'));
  const answerRef = useRef();

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
      text: answerRef.current.value,
    };

    try {
      const response = await fetch(`http://localhost:8080/posts/${questionId}/comments`, {
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
      {type === "small-button" ? <button
        style={{ border: "none", background: "none" }}
        onClick={openModal}
      >
        <img src={add} alt="Add Answer" className="icon" />
      </button> : <button
        onClick={openModal}
        className="create_answer_header"
      >

        <img src={add} />
        <span>Responder</span>
      </button>}
      {isOpen ? (<div className="modal">

        <div className="new_question_container">
          <h2 className="new_question_title">Criar Nova Resposta</h2>
          <form className="new_answer_form" onSubmit={handleSubmit}>
            <div className='quill_container'>
              <ReactQuill
                className="answer_react_quill"
                modules={modules}
                formats={formats}
                ref={answerRef}
              />
            </div>
            <div className="new_question_button_container">
              <button>Comfirmar</button>
              <button onClick={closeModal}>Cancelar</button>
            </div>
          </form>
        </div>

      </div>) : null}
    </div>
  );
}

CriarRespostaModal.propTypes = {
  questionId: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default CriarRespostaModal;
