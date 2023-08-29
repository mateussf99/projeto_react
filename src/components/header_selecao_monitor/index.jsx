import logo from '../../assets/img/logo.svg';
import './style.css';

const index = () => {
  return (
    <div className='header_monitor'>
            <div className='logo_div'>
                <div className='logo_img'><img src={logo} /></div>
            </div>
            <h1 className='logo_text'>Monitoria</h1>
            <div className='espaco'></div>
        </div>
  )
}

export default index