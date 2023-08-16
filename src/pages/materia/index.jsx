import './style.css';
import Header from '../../components/header';
import MateriasMain from '../../components/materias_main';
import MateriasLeft from '../../components/materias_left';

const Index = () => {
  const selectedMateria = 
    {
      id: "1",
      name: "Cálculo Diferencial e integral",
      posts: [
        {
          title: "Título da pregunta 1",
          userId: "1",
          description: "Breve descrição da pergunta, limitado a n caracteres, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          title: "Título da pregunta 2",
          userId: "2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          title: "Título da pregunta 3",
          userId: "3",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          title: "Título da pregunta 4",
          userId: "4",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    };
  const listaMaterias = ["Cálculo Diferencial e integral", "Computação Sociedade e Ética", "Lógica Aplicada a Computação", "Matemática Discreta", "Programação 1"];

  return (
    <div>
      <Header />
      <div className='body'>
        <MateriasLeft selected={selectedMateria.name} list={listaMaterias} />
        <MateriasMain materia={selectedMateria} />
      </div>
    </div>
  )
}

export default Index;