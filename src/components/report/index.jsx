import React, { useState } from 'react';
import "./style.css"

function ReportModal({ closeModal, submitReport }) {
  const [issueDescription, setIssueDescription] = useState('');

  const handleDescriptionChange = (e) => {
    setIssueDescription(e.target.value);
  };

  const handleSubmit = () => {
    submitReport(issueDescription);
    setIssueDescription('');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Descreva o problema:</h2>
        <textarea
          value={issueDescription}
          onChange={handleDescriptionChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default ReportModal;
