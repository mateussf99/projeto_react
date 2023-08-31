import { useState } from 'react';
import report from '../../assets/img/report.svg'
import close from '../../assets/img/close.svg'
import "./style.css"

function ReportModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} style={{ border: "none", background: "inherit" }}>
        <img src={report} />
      </button>
      {isOpen ? (<div className="modal">
        <div className="modal-content">
          <div className='close_modal_container'>
            <button className='close_modal' onClick={closeModal} style={{ border: "none", background: "none" }}>
              <img src={close} />
            </button>
          </div>
          <form className='modal_form'>
            <div>
              <h2>Descreva o problema:</h2>
              <textarea className='modal_textarea'/>
            </div>
            <div className='modal_button_container'><button className='modal_button'>Enviar</button></div>
            
          </form>
        </div>
      </div>) : null}
    </div>
  );
}

export default ReportModal;
