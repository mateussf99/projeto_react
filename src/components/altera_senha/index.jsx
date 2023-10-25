import { useState } from "react";
import "./style.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Senha = ({login}) => {
    const username = JSON.parse(localStorage.getItem('username'));
    const token = JSON.parse(localStorage.getItem('token'));
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState("")

    const navigate = useNavigate();

    const passwordRef = useRef();
    const newPassword1Ref = useRef()
    const newPassword2Ref = useRef()

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const password = passwordRef.current.value;
        const newPassword1 = newPassword1Ref.current.value;
        const newPassword2 = newPassword2Ref.current.value;

        if (newPassword1 !== newPassword2) {
            setError("Senhas diferentes");
        } else {
            try {
                const data = {
                    login: login,
                    username: username,
                    password: password,
                    newPassword: newPassword1,
                }
                const response = await fetch('http://localhost:8080/auth/password', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                  },
                  body: JSON.stringify(data),
                });
                console.log(response);
                if (response.ok) {
                  const data = await response.data;
                  localStorage.clear();
                  navigate("/");
                } else {
                  setError("Senha incorreta");
                }
              } catch (error) {
                console.error('An error occurred:', error);
              }
        }
    }



    return (
        <div>
            <button onClick={openModal} className='user_page_button'>Alterar Senha</button>
            {isOpen ? <div className='altera-senha'>
                <form onSubmit={handleSubmit}>
                    <p>
                        <label>Senha Atual: </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Digite sua senha"
                            required
                            ref={passwordRef}

                        />
                    </p>
                    <p>
                        <label>Nova Senha: </label>
                        <input
                            type="password"
                            name="newpassword"
                            placeholder="Digite sua senha"
                            required
                            ref={newPassword1Ref}

                        />
                    </p>
                    <p>
                        <label>Confirmar Senha: </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="confirme sua nova senha novamente"
                            required
                            ref={newPassword2Ref}
                        />
                    </p>

                    <span className="errorMessage">{error}</span>
                    <p className="butoes">
                        <button type="submit">Confirmar</button>
                        <button type="reset" onClick={closeModal}>Cancelar</button>
                    </p>
                </form>
            </div> : null}

        </div>
    )
}

export default Senha;