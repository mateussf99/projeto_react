import "./style.css";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Index() {
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
    <div className="user_container">
      <h2 className="new_question_title">Criar Nova Questão</h2>
      <form onSubmit={handleSubmit}>
        <span className="form_label">Titulo:</span>
        <input type="text" />
        <span className="form_label">Descrição:</span>
        <ReactQuill
        className="react_quill"
          value={content}
          onChange={handleContentChange}
          modules={modules}
          formats={formats}
        />
        <div className="new_question_button_container">
          <button>Comfirmar</button>
          <button>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default Index;
