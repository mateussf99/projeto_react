import "./style.css";

const index = () => {
    
  return (
    <div className='altera-senha'>
        <form action="">
            <p>
                <label>Senha Atual: </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    required
                    
                />
            </p>
            <p>
                <label>Nova Senha: </label>
                <input
                    type="password"
                    name="newpassword"
                    placeholder="Digite sua senha"
                    required
                    
                />
            </p>
            <p>
                <label>Confirmar Senha: </label>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="confirme sua nova senha novamente"
                    required
                    
                />
            </p>

            {/* <span className="errorMessage">{errorMessage}</span> */}
            <p className="butoes">
                <button type="submit">Confirmar</button>
                <button type="reset">Cancelar</button>
            </p>
        </form>
    </div>
  )
}

export default index