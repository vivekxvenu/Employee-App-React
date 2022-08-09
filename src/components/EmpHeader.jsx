import { FaPencilAlt, FaPlus } from "react-icons/fa";
import List from "../images/List.png"
import { useNavigate } from "react-router-dom";
const EmpHeader = ({
    label,idemp
}) => {

    const navigate=useNavigate();
    return (
        <section className="listHeader">
            <div className="header">
                <h1>{label}</h1>
               <div id="headeritems">
                    
                    <div id="create" >
                            <div id="create_list" onClick={() => navigate(`/edit/${idemp}`)}>
                                <div className="adddiv"> <FaPencilAlt className="add"/></div>
                            </div>
                            <div>
                                    <a href=""><div id="txtcrt">Edit Employee</div></a>
                            </div>
                    </div>
               </div>
                
            </div>

        </section>
    )
}

export default EmpHeader;