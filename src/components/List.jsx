import {MdOutlineDelete, MdOutlineEdit} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useDeleteEmployeesMutation } from '../services/BaseApi';
const List = ({
    employeeDetails
}) => {

    const [deleteEmployee, result] = useDeleteEmployeesMutation()

    const navigate=useNavigate();

    const viewDetails = (id) => {
        navigate(`/details/${id}`);
    }
   
    return(
        <>
        <section>
            <table>
            <tr>
                <th>Employee Name</th>
                <th>Employee ID</th>
                <th>Joining Date</th>
                <th>Role</th>
                <th>Status</th>
                <th className='exp'>Experience</th>
                <th>Action</th>
            </tr>
            {employeeDetails.map((element) => (
                <tr onClick={() => viewDetails(element.id)}>
                    <td>{element.name}</td>
                    <td>{element.employeeId}</td>
                    <td>{element.joiningDate}</td>
                    <td>{element.role}</td>
                    <td><div className={element.status}>{element.status}</div></td>
                    <td className="exp">{element.experience}</td>
                    <td>
                        <MdOutlineDelete className='deleteIcon' onClick={() => {deleteEmployee(element.id)}}/>
                        <MdOutlineEdit className='editIcon' onClick={(e)=>{e.stopPropagation(); navigate(`/edit/${element.id}`)}}/>
                    </td>
                </tr>
            ))}
            </table>
        </section>
        </>
    );
};

export default List;