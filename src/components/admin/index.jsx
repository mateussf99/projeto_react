import { useState } from "react";
import "./style.css";

function Admin() {
  const tabs = ["Gerenciar Moderadores", "Gerenciar Disciplina", "Registro de auditoria"];

  const [selectedTab, setSelectedTab] = useState(0); // Initialize selectedTab to 0

  return (
    <div className="new_question_container">
      <header><h2 className="admin_header">Administração</h2></header>
      <div className="select_section">
        {tabs.map((tab, index) => (
          <h2
            key={index}
            className={`select_tab ${index === selectedTab ? "selected_tab" : ""}`}
            onClick={() => setSelectedTab(index)}
          >
            {tab}
          </h2>
        ))}
      </div>
      <div className={selectedTab === 0 ? "left_tab" : selectedTab === 1 ? "middle_tab" : "right_tab"}>
          teste
      </div>
    </div>
  );
}

export default Admin;
