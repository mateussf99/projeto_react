import './style.css'
import logo from '../../assets/img/logo.svg'


function Header() {
    return (
        <div className='header'>
            <div className='logo_div'>
                <div className='logo_img'><img src={logo} /></div>
            </div>
            <h1 className='logo_text'>Materías</h1>
            <div className='espaco'></div>
        </div>
    );
}

export default Header;