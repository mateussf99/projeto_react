import './style.css';
import Header from '../../components/header';
import Questoes from '../../components/questao/';
import MateriasSelectMenu from '../../components/materias_select_menu/';

const Index = () => {
  const selectedQuestao =
  {
    id: "1",
    name: "Título da pregunta 1",
    materiaName: "Cálculo Diferencial e integral",
    posts: [
      {
        title: "Título da pregunta 1",
        userId: "1",
        description: "Breve descrição da pergunta, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "pergunta",
      },
      {
        title: "Título da resposta aceita",
        userId: "2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "resposta aceita",
      },
      {
        title: "Título da resposta 1",
        userId: "3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "resposta",
      },
      {
        title: "Título da resposta 4",
        userId: "4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "resposta",
      }
    ]
  };
  const listaMaterias = ["Cálculo Diferencial e integral", "Computação Sociedade e Ética", "Lógica Aplicada a Computação", "Matemática Discreta", "Programação 1"];

  return (
    <div>
      <Header />
      <div className='body'>
        <MateriasSelectMenu selected={selectedQuestao.materiaName} list={listaMaterias} />
        <Questoes questao={selectedQuestao} />
      </div>
    </div>
  )
}

export default Index;