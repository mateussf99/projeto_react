import Block from "../block_modal";
import "./style.css"
import { useEffect, useState } from "react";


function ManageReports() {
    const token = JSON.parse(localStorage.getItem('token'));
    const [reports, setReports] = useState([]);

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        console.log("teste");
        try {
            const response = await fetch('http://localhost:8080/report', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                  },
            });

            if (!response.ok) {
                console.log(response);
            }

            const data = await response.json();
            setReports(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (<div className="report_list">
        {reports.map((report, index) => (
            <div key={index}>{report.idPost !== null ?
                <div className="report_item">
                    <span>Id da questão: {report.idPost}.</span>
                    <span>Motivo da denuncia: {report.reason}</span>
                    {report.answered ? <div></div> : <Block id={report.idPost} type="posts" reportId={report.id}/>}
                    
                </div> :
                report.idComment !== null ?
                    <div className="report_item">
                        <span>Id da resposta: {report.idComment}.</span>
                        <span>Motivo da denuncia: {report.reason}</span>
                        {report.answered ? <div></div> : <Block id={report.idComment} type="comments" reportId={report.id}/>}
                    </div> :
                    <div><span>ERROR</span></div>}
            </div>
        ))}
    </div>);
}

export default ManageReports;