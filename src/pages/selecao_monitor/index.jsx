import Header_selecao_monitor from "../../components/header_selecao_monitor/";
import Select_monitor from "../../components/select_monitor/";
import './style.css';
 
const SelecaoMonitorPage = () => {
  return (
    <div className="body-selecao-monitor">
        <Header_selecao_monitor/>
        <Select_monitor/>
    </div>
  )
}

export default SelecaoMonitorPage