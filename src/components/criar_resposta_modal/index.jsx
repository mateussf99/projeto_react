import { useState } from 'react';
import add from '../../assets/img/add.svg'
import ReactQuill from "react-quill";
import "./style.css"

function CriarRespostaModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const [content, setContent] = useState("");

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

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleSubmit = () => {
    console.log(content);
    setContent("");
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="create_answer_header"
      >

        <img src={add} />
        <span>Responder</span>
      </button>
      {isOpen ? (<div className="modal">

      <div className="new_question_container">
      <h2 className="new_question_title">Criar Nova Resposta</h2>
      <form className="new_answer_form" onSubmit={handleSubmit}>
        <div>
          <ReactQuill
            className="answer_react_quill"
            value={content}
            onChange={handleContentChange}
            modules={modules}
            formats={formats}
          />
        </div>
        <div className="new_question_button_container">
          <button>Comfirmar</button>
          <button onClick={ closeModal }>Cancelar</button>
        </div>
      </form>
    </div>

      </div>) : null}
    </div>
  );
}

export default CriarRespostaModal;
