import logo from '../../assets/img/logo.svg'
import './style.css'

const index = () => {
    return (
        <div className="forms-login">
            <form action="#" method="post" target="_blank">
                <div className="img-logo">
                    <img src={logo} alt="lampada da logo" />
                </div>
                <p>
                    <label>Email: </label>
                    <input type="email" id="email" name="email" placeholder="email@exemp.com" required />
                </p>
                <p>
                    <label >Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" required />
                </p>
                <p>
                    <button type="submit">Login</button>
                </p>
                <p>
                    <a href="/cadastro">Cadastre-se</a>
                </p>
            </form>
        </div>
    )
}

export default index