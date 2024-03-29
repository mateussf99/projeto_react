import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Index = () => {
  const navigate = useNavigate();

  const nome = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const user = {
      login: email.current.value,
      password: password.current.value,
      name: nome.current.value,
      role: "USER",
    };

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log("Fetch response:", response);

      if (response.ok) {
        console.log("Cadastro successful");
        navigate("/");
      } else {
        console.log("Cadastro failed");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      navigate("/");
    }
  };

  return (
    <div className="forms-cadastro">
      <form onSubmit={submitHandler}>
        <h2 className="titulo">Cadastro</h2>
        <p>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            required
            ref={nome}
          />
        </p>
        <p>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="email@exemp.com"
            required
            ref={email}
          />
        </p>
        {/* <p>
          <label>Matrícula:</label>
          <input type="number" name="matricula" placeholder="123456" />
        </p> */}
        <p>
          <label>Senha: </label>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            required
            ref={password}
          />
        </p>
        <p>
          <label>Confirmar Senha: </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Digite sua senha novamente"
            required
            ref={confirmPassword}
          />
        </p>

        <div className="buttons">
          <a href="/">Voltar</a>
          <button type="submit">confirmar</button>
        </div>
      </form>
    </div>
  );
};

export default Index;
