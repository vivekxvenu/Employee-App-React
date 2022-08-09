import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const ListHeader = ({
    label
}) => {

    const navigate=useNavigate();
    return (
        <section className="listHeader">
            <div className="header">
                <h1>{label}</h1>
               <div id="headeritems">
                    <div className="sort">
                        <text >Filter By</text>
                        <div>
                            <select id="selectdrop">
                                <option>Status</option>
                                <option>Name</option>
                                <option>Id</option>
                            </select>
                        </div>
                    </div>
                    <div id="create" >
                            <div id="create_list" onClick={() => navigate(`/create`)}>
                                <div className="adddiv"> <FaPlus className="add"/></div>
                            </div>
                            <div>
                                    <a href=""><div id="txtcrt">Create Employee</div></a>
                            </div>
                    </div>
               </div>
                <div>

                </div>
            </div>

        </section>
    )
}

export default ListHeader;