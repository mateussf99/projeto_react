import "./style.css";
import logo from "../../assets/img/logo.svg";
import user from "../../assets/img/user.svg";
import logout from "../../assets/img/logout.svg";

function Header() {
  return (
    <div className="main_header">
      <div className="logo_div">
        <div className="logo_img">
          <img src={logo} />
        </div>
        <a href="/materia" style={{ textDecoration: "none", color: "inherit" }}>
          <h1 className="logo_text">InteraCt</h1>
        </a>
      </div>
      <input className="search_bar" placeholder="Pesquisar" />
      <div>
        <a href="/user" style={{ textDecoration: "none", color: "inherit" }}>
          <img src={user} className="user_img" />
        </a>
        <a href="/">
          <img className='logout_img' src={logout} />
          
        </a>
      </div>
    </div>
  );
}

export default Header;
