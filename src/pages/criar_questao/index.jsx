import './style.css';
import Header from '../../components/header';
import CriarQuestao from '../../components/criar_questao'

const Index = () => {
  return (
    <div>
      <Header />
      <div className='new_question_page'>
        <CriarQuestao/>
      </div>
    </div>
  )
}

export default Index;