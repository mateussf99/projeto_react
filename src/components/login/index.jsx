import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import './style.css';
import { useRef } from 'react';

const LoginForm = () => {
    const navigate = useNavigate();
    const login = useRef();
    const password = useRef();

    const handleLogin = async (event) => {
        event.preventDefault();
        const loginData = {
            login: login.current.value,
            password: password.current.value, 
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
            console.log(data);
            //const token = data.token; 
            navigate("/materia");
          } else {
            console.log(response);
            console.error('Login failed');
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };


    return (
        <div className="forms-login">
            <form onSubmit={handleLogin}>
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
