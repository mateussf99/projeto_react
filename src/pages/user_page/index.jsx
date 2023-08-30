import Header from "../../components/header/";
import User from "../../components/user/";
import "./style.css";

import userImg from "../../assets/img/user.svg"

function Index() {
    const usuario = {
        id: "1",
        name: "Usuário",
        email: "user@ic.ufal.br",
        pontuacao: 0,
        imagem: userImg,
        materias: ["Cálculo Diferencial e integral", "Computação Sociedade e Ética", "Lógica Aplicada a Computação", "Matemática Discreta", "Programação 1"],
        questoes: ["Pergunta. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"],
        respostas: [],  
    };
    return (
        <div >
            <Header />
            <div className="user_page_container">
                <User usuario={usuario} />
            </div>
        </div>
    );
}

export default Index;