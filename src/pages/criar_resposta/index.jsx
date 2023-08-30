import './style.css';
import Header from '../../components/header';
import CriarResposta from '../../components/criar_resposta'

const Index = () => {
  return (
    <div>
      <Header />
      <div className='new_question_page'>
        <CriarResposta/>
      </div>
    </div>
  )
}

export default Index;