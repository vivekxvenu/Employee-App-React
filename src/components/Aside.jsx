
import { useNavigate } from "react-router-dom";
import logo from "../images/kv logo.png"
import List from "../images/List.png"
import { clearAllStorage, removeStorage } from "../services/util"
import Button from "./Button";
const Aside = () => {

    const navigate=useNavigate();

    const logoutHandler = () => {
            removeStorage("idToken");
            navigate(`/`)
            

    }
    return(
        <>
            <aside>
            <header>
                <nav>
                    <span><img src={logo} alt="logo"/><br/></span>
                    <div onClick={() => navigate('/list')}>
                        <div id="employee_list" >
                            <img src={List} alt="list logo"/><br/>
                        </div>
                        <div>
                            <a href="">Employee list</a>
                        </div>
                    </div>
                    
                    
                        <div id="logout" onClick={logoutHandler}>
                            <Button className="logoutbtn" label="Logout"/>
                        </div>
                    
                </nav>
            </header>
        </aside>
        </>
    );
}
export default Aside;