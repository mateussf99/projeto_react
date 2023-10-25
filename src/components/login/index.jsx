import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import './style.css';
import { useRef, useState } from 'react';

const LoginForm = () => {
  const navigate = useNavigate();
  const login = useRef();
  const password = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const loginData = {
      login: login.current.value,
      password: password.current.value,
    }

    if (loginData.login === "" || loginData.password === "") {
      setErrorMessage("Preencha todos os campos");
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('username', JSON.stringify(data.username));
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('role', JSON.stringify(data.role));
        localStorage.setItem('boardId', JSON.stringify(data.boardId));
        navigate("/materia");
      } else {
        console.error('Login failed');
        if (response.status === 403) {
          setErrorMessage("Conta Bloqueada");
        } else {
          setErrorMessage("Email ou Senha incorretos");
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


  return (
    <div className="forms-login">
      <form onSubmit={handleLogin} noValidate>
        <div className="img-logo">
          <img src={logo} alt="lampada da logo" />
        </div>
        <p>
          <label>Email: </label>
          <input type="email" ref={login} name="email" placeholder="email@exemp.com" required />
        </p>
        <p>
          <label >Senha: </label>
          <input type="password" ref={password} name="password" placeholder="Digite sua senha" required />
        </p>
        <span className="errorMessage">{errorMessage}</span>
        <p>
          <button type="submit">Login</button>
        </p>
        <p>
          <a href="/cadastro">Cadastre-se</a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;