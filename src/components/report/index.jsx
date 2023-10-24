import { useRef, useState } from 'react';
import PropTypes from "prop-types";
import report from '../../assets/img/report.svg'
import close from '../../assets/img/close.svg'
import "./style.css"

function ReportModal({ postId, commentId, username }) {
  const token = JSON.parse(localStorage.getItem('token'));
  const [isOpen, setIsOpen] = useState(false);
  const reportTextRef = useRef();

  const openModal = (event) => {
    event.stopPropagation();
    setIsOpen(true);
  }

  const closeModal = (event) => {
    event.stopPropagation();
    setIsOpen(false);
  }

  const handleClick = (event) => {
    event.stopPropagation();
  }

  const handleSubmit = async (event) => {
    event.stopPropagation();
    const description = reportTextRef.current.value;
    const data = {
      username: username,
      reason: description,
    }

    let url = "";
    if(typeof postId !== 'undefined') {
      url = `http://localhost:8080/report/${postId}/reportPost`;
    }
    if(typeof commentId !== 'undefined') {
      url = `http://localhost:8080/report/${commentId}/reportComment`;
    }

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(data),
      })
      if(response.ok) {
        closeModal();
      }
      else {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div onClick={ handleClick }>
      <button className="report_img" onClick={openModal} style={{ border: "none", background: "inherit" }}>
        <img className="report_img" src={report} />
      </button>
      {isOpen ? (<div className="modal">
        <div className="modal-content">
          <div className='close_modal_container'>
            <button className='close_modal' onClick={closeModal} style={{ border: "none", background: "none" }}>
              <img src={close} />
            </button>
          </div>
          <form className='modal_form' onSubmit={ handleSubmit }>
            <div>
              <h2>Descreva o problema:</h2>
              <textarea className='modal_textarea' ref={reportTextRef}/>
            </div>
            <div className='modal_button_container'><button className='modal_button'>Enviar</button></div>
            
          </form>
        </div>
      </div>) : null}
    </div>
  );
}

ReportModal.propTypes = {
  postId: PropTypes.number.isRequired,
  commentId: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
}

export default ReportModal;
