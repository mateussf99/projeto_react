import Header from "../../components/header/";
import User from "../../components/user/";
import "./style.css";

function Index() {
    return (
        <div >
            <Header />
            <div className="user_page_container">
                <User />
            </div>
        </div>
    );
}

export default Index;