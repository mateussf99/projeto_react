import './style.css'

const index = () => {
  return (
    <div className='forms-materias'>
        <h2>Selecione as matérias em que está matriculado:</h2>
        <form action="#" method='get'>
            <p className='tipo-aluno'>
                <label >Eu sou:</label>
                <input type="radio" id="Aluno" name="dicente" value="Aluno" required/>
                <label >Aluno</label>
                <input type="radio" id="Monitor" name="dicente" value="Monitor" required/>
                <label >Monitor</label>
            </p>
            <p>
                <label >Período:</label>
                <select required>
                    <option value="" label="Escolha o período" disabled selected></option>
                    <option value="1 Período" label="1° Período"></option>
                    <option value="2 Período" label="2° Período"></option>
                    <option value="3 Período" label="3° Período"></option>
                    <option value="4 Período" label="4° Período"></option>
                    <option value="5 Período" label="5° Período"></option>
                    <option value="6 Período" label="6° Período"></option>
                    <option value="7 Período" label="7° Período"></option>
                    <option value="8 Período" label="8° Período"></option>
                </select>
            </p>
            <div className='materias-periodo'></div>
            <p>
                <label >Todas as matérias:</label>
                <input type="text" id="materias" name="materias" placeholder="materia" />
            </p>
            <div className='materias-todas'></div>
        </form>

    </div>
  )
}

export default index