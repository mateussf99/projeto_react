import { useState } from "react";
import "./style.css";
import ManageDisc from "../manage_disc";
import ManageReports from "../manage_reports";
import ManageMods from "../manage_mods";

function Admin() {
  const tabs = ["Gerenciar Moderadores", "Gerenciar Disciplina", "Denuncias"];

  const [selectedTab, setSelectedTab] = useState(0);

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
      <div>
        {selectedTab === 0 ? <div className="left_tab">
          <ManageMods/>
        </div> : selectedTab === 1 ? <div className="middle_tab">
          <ManageDisc/>
        </div> : <div className="right_tab">
          <ManageReports/>
        </div>}
      </div>
    </div>
  );
}

export default Admin;
