import Login from '../../components/login'
import logo from '../../assets/img/logo.svg'
import './style.css'

const index = () => {
  return (
    <div className='principal'>
        <div className='logo'>
          <div className='logo-name'>
            <img src={logo} alt="logo do Inter" />
            <h2>InteraCt</h2>
          </div>
          <p> Interaja com outros usuários e tire suas dúvidas com a comunidade do IC.</p>
        </div>
        <div className='section-login'>
          <h2 className='mobile'>InteraCt</h2>
          <Login/>
        </div>
    </div>
  )
}

export default index