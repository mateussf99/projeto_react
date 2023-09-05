import Register from '../../components/register'
import logo from '../../assets/img/logo.svg'
import './style.css'

const index = () => {
  return (
    <div className='principal'>
        <div className='logo-cadastro'>
          <div className='logo-name-cadastro'>
            <img src={logo} alt="logo do Inter" />
            <h2>InteraCt</h2>
          </div>
          <p> Interaja com outros usuários e tire suas dúvidas com a comunidade do IC.</p>
        </div>
        <div className='section-cadastro'>
          <h2 className='mobile-cadastro'>InteraCt</h2>
          <Register/>
        </div>
    </div>
  )
}

export default index