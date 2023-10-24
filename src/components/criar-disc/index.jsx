import { useRef, useState } from 'react';
import add from '../../assets/img/add.svg'
import "./style.css"

function CriarDisc() {
  const token = JSON.parse(localStorage.getItem('token'));
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("1"); // State to store the selected period

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
      period: selectedPeriod, 
    };
  
    fetch('http://localhost:8080/boards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
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
        console.log(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  const handleSelectChange = (event) => {
    setSelectedPeriod(event.target.value);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="create_disc_header"
      >
        <img src={add} alt="Add Icon" /> {/* Add alt text for accessibility */}
        <span>Criar nova Disciplina</span>
      </button>
      {isOpen ? (
        <div className="modal">
          <div className="new_disc_container">
            <h2 className="new_disc_title">Criar Nova Disciplina</h2>
            <form className="new_disc_form">
              <div className="disc_title">
                <span className="form_label">Nome da Disciplina:</span>
                <input type="text" ref={newDisc} />
              </div>
              <p className='periodos new_disc_title'>
                <label>Período:</label>
                <select onChange={handleSelectChange}>
                  <option value="" disabled>Escolha o período</option>
                  <option value="1">1° Período</option>
                  <option value="2">2° Período</option>
                  <option value="3">3° Período</option>
                  <option value="4">4° Período</option>
                  <option value="5">5° Período</option>
                  <option value="6">6° Período</option>
                  <option value="7">7° Período</option>
                  <option value="8">8° Período</option>
                  <option value="0">Eletiva</option>
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

export default CriarDisc;
