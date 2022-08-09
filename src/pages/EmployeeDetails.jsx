import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Aside from "../components/Aside";
import BlankDiv from "../components/BlankDiv";
import EmpHeader from "../components/EmpHeader";
import Header from "../components/Header";
import { useGetEmployeeByIDQuery } from "../services/BaseApi";

const EmployeeDetails=()=>{
    const {id}=useParams();
    const { data, error, isLoading } = useGetEmployeeByIDQuery(id);

    const [employee, setEmployee] = useState({
        name:'',
        username:'',
        password:'',
        employeeId: '',
        joiningDate: '',
        role: '',
        status: '',
        experience: '',
        departmentId:'',
        firstLine:'',
        secondLine:'',
        city:'',
        state:'',
        country:'',
        pincode:'',
});

useEffect(()=>{
if(data?.data){
    setEmployee({
        name:data.data.name,
        username:data.data.username,
        password:'',
        employeeId: data.data.employeeId,
        joiningDate: data.data.joiningDate,
        role: data.data.role,
        status: data.data.status,
        experience: data.data.experience,
        departmentId:data.data.departmentId,
        firstLine:data.data.address.firstLine,
        secondLine:data.data.address.secondLine,
        city:data.data.address.city,
        state:data.data.address.state,
        country:data.data.address.country,
        pincode:data.data.address.pincode,
});
}    
},[data]);

return(
    <>
    <Aside/>
    <BlankDiv/>
    <EmpHeader label="Employee Details" idemp={id}/>
    <section className="details">
        <div>
            <p>Employee Name</p><p>{employee.name}</p>
        </div>
        <div>
            <p>Employee ID</p><p>{employee.employeeId}</p>
        </div>
        <div>
            <p>Joining Date</p><p>{employee.joiningDate}</p>
        </div>
        <div>
            <p>Role</p>
            <p>{employee.role}</p>
        </div>
        <div>
            <p>Status</p>
            <p><div className={employee.status}>{employee.status}</div></p>
        </div>
        <div>
            <p>Experience</p>
            <p>{employee.experience}</p>
        </div>
        <div>
            <p>Address</p>
            <p>{employee.firstLine},{employee.secondLine},</p>
            <p>{employee.city},{employee.state},{employee.country},{employee.pincode}</p>
        </div>
    </section>
    </>
)

}
export default EmployeeDetails;