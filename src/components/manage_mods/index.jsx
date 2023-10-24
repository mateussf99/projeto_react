import "./style.css";
import doc from "../../assets/img/doc.svg";
import done from "../../assets/img/done.svg";
import close from "../../assets/img/close.svg";
import { useEffect, useState } from "react";

function ManageMods() {
  const token = JSON.parse(localStorage.getItem("token"));

  const [requests, setRequests] = useState([]);

  const fetchRequests = () => {
    fetch("http://localhost:8080/request", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response);
          throw Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRequests(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const acceptRequest = (id) => {
    fetch(`http://localhost:8080/request/accept/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response);
          throw Error("Network response was not ok");
        }
        return response.data;
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const refuseRequest = (id) => {
    fetch(`http://localhost:8080/request/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response);
          throw Error("Network response was not ok");
        }
        return response.data;
      })
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [openModals, setOpenModals] = useState({});

  const openModal = (certificateId) => {
    setOpenModals((prevModals) => ({
      ...prevModals,
      [certificateId]: true,
    }));
  };

  const closeModal = (certificateId) => {
    setOpenModals((prevModals) => ({
      ...prevModals,
      [certificateId]: false,
    }));
  };

  return (
    <div>
      {requests.map((request, index) => (
        <div key={index} className="requests_list">
          <span>Usuário: {request.user.username}</span>
          <span>Matéria: {request.board.name}</span>
          <div>
            <button onClick={() => openModal(request.id)}>
              <img src={doc} alt="Open Certificate" />
            </button>
            <button onClick={() => acceptRequest(request.id)}>
              <img src={done} alt="Mark as Done" />
            </button>
            <button onClick={() => refuseRequest(request.id)}>
              <img src={close} alt="Close Request" />
            </button>
          </div>
          {openModals[request.id] && (
            <div className="certificate-modal">
              <div className="certificate-modal-content">
                <div className="certificate-modal-header">
                  <button onClick={() => closeModal(request.id)}>
                    <img src={close} alt="Close Modal" />
                  </button>
                </div>
                <iframe
                  src={`data:application/pdf;base64,${request.certificate}`}
                  width="100%"
                  height="700px"
                  title="Certificate PDF"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ManageMods;
