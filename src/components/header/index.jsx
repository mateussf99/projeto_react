import './style.css'
import logo from '../../assets/img/logo.svg'
import menu from '../../assets/img/menu.svg'

function Header() {
    return (
        <div className='main_header'>
            <div className='logo_div'>
                <div className='logo_img'><img src={logo} /></div>
                <h1 className='logo_text'>InteraCt</h1>
            </div>
            <input className='search_bar' placeholder='Pesquisar'/>
            <img src={menu} className='menu_img'/>
        </div>
    );
}

export default Header;