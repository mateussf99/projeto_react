import "./style.css";
import logo from "../../assets/img/logo.svg";
import user from "../../assets/img/user.svg";
import logout from "../../assets/img/logout.svg";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Header() {
  const navigate = useNavigate();
  const searchRef = useRef();

  const onClick = () => {
    navigate("/materia");
  };

  const submitHandler = () => {
    const search = searchRef.current.value;
    navigate(`/busca/${search}`);
  }

  return (
    <div className="main_header">
      <div onClick={onClick} className="logo_div">
        <div className="logo_img">
          <img src={logo} />
        </div>
        <a style={{ textDecoration: "none", color: "inherit" }}>
          <h1 className="logo_text">InteraCt</h1>
        </a>
      </div>
      <form className="search_bar_container" onSubmit={ submitHandler }>
        <input className="search_bar" placeholder="Pesquisar" ref={searchRef}/>
      </form>
      <div>
        <a href="/user" style={{ textDecoration: "none", color: "inherit" }}>
          <img src={user} className="user_img" />
        </a>
        <a href="/">
          <img className="logout_img" src={logout} />
        </a>
      </div>
    </div>
  );
}

export default Header;
