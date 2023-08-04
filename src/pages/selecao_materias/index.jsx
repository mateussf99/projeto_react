import './style.css'
import Selecao from '../../components/select_materials'
import Header from '../../components/header_materials'
const index = () => {
  return (
    <div className='selecao-materias'>
        <Header/>
        <Selecao/>
    </div>
  )
}

export default index