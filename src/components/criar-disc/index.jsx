import { useRef, useState } from 'react';
import add from '../../assets/img/add.svg'
import "./style.css"

function CriarDisc() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const newDisc = useRef();

  const HandleClick = () => {
    const discData = newDisc.current.value;
    
    const dataToSend = {
      name: discData,
    };
  
    fetch('http://localhost:8080/boards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data if needed
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch.
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="create_disc_header"
      >

        <img src={add} />
        <span>Criar nova Disciplina</span>
      </button>
      {isOpen ? (<div className="modal">

          <div className="new_disc_container">
            <h2 className="new_disc_title">Criar Nova Disciplina</h2>
            <form className="new_disc_form">
              <div className="disc_title">
                <span className="form_label">Nome da Disciplina:</span>
                <input type="text" ref={newDisc}/>
              </div> 
              <div className="new_question_button_container">
                <button onClick={HandleClick}>Comfirmar</button>
                <button onClick={closeModal}>Cancelar</button>
              </div>
            </form>
          </div>

      </div>) : null}
    </div>
  );
}

export default CriarDisc;
