import './style.css';
import Header from '../../components/header';
import Admin from '../../components/admin';


const AdminPage = () => {
  return (
    <div>
      <Header />
      <div className='admin_page'>
        <Admin/>
      </div>
    </div>
  )
}

export default AdminPage;