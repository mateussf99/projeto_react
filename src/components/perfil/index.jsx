import "./style.css"

const index = () => {
  return (
    <div className="paginas">
        <div className="admin">
            <a href="/admin">Admin</a>
        </div>
        <div className="perfil">
            <a href="/user">Perfil</a>
        </div>
    </div>
  )
}

export default index