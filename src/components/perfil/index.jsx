import "./style.css";
import menu from "../../assets/img/menu.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuAdmin = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/")
  }

  return (
    <div>
      <img
       className="admin_menu_img" src={menu} onClick={toggleMenu}/>
      {isOpen ? <div className="paginas">
        <div className="admin">
          <a href="/admin">Admin</a>
        </div>
        <div className="perfil">
          <a href="/user">Perfil</a>
        </div>
        <div className="perfil">
          <a onClick={logoutHandler}>Sair</a>
        </div>
      </div> : null}
      
    </div>
  )
}

export default MenuAdmin;