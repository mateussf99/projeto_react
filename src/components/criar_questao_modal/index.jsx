import { useState } from 'react';
import add from '../../assets/img/add.svg'
import ReactQuill from "react-quill";
import "./style.css"

function CriarQuestaoModal() {
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
                <input type="text" />
              </div> <div>
                <span className="form_label">Descrição:</span>
                <ReactQuill
                  className="react_quill"
                  value={content}
                  onChange={handleContentChange}
                  modules={modules}
                  formats={formats}
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

export default CriarQuestaoModal;
