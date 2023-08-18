import './style.css'
import Selecao from '../../components/select_materials'
import HeaderSelecao from '../../components/header_selecao/'
const SelecaoPage = () => {
  return (
    <div className='selecao-materias'>
        <HeaderSelecao/>
        <Selecao/>
    </div>
  )
}

export default SelecaoPage;