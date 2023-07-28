import React from 'react'
import logo_2 from '../../assets/img/logo-2.svg'
import './style.css'

const index = () => {
  return (
        <div className="forms-login">
            <form action="#" method="post" target="_blank" autocomplete="off">
                <div className="img-logo">
                    <img src={ logo_2 } alt="lapada da logo"/>
                </div>
                <p>
                    <label for="email">Email: </label>
                    <input type="email" id="email" name="email" placeholder="email@exemp.com" required/>
                </p>
                <p>
                    <label for="password">Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" required/>
                </p>
                <p>
                    <button type="submit">Login</button>
                </p>
                <p>
                    <a href="#">Cadastre-se</a>
                </p>
            </form>
        </div>
  )
}

export default index