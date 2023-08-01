import './style.css'

const index = () => {
  return (
    <div className="forms-cadastro">
        
        <form action="#" method="post" target="_blank">
            <h2 className='titulo'>Cadastro</h2>
            <p>
                <label>Nome:</label>
                <input type="text" id="name" name="name" placeholder="Nome" required/>
            </p>
            <p>
                <label>Email:</label>
                <input type="email" id="email" name="email" placeholder="email@exemp.com" required/>
            </p>
            <p>
                <label>Matrícula:</label>
                <input type="number" id="matricula" name="matricula" placeholder="123456" required/>
            </p>
            <p>
                <label>Senha: </label>
                <input type="password" id="password" name="password" placeholder="Digite sua senha" required/>
            </p>
            <p>
                <label>Confirmar Senha: </label>
                <input type="password" id="password" name="password" placeholder="Digite sua senha novamente" required/>
            </p>
            
            <div className="buttons">
                <a href="/">Voltar</a>
                <button type="submit">confirmar</button>
            </div>
        </form>
    </div>
  )
}

export default index