import Button from "../../components/Button";
import {useNavigate} from 'react-router-dom'
import { useGetAllEmployeesQuery, useGetEmployeesQuery } from "./api";
import './style.css';
import BlankDiv from "../../components/BlankDiv";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import List from "../../components/List";
import ListHeader from "../../components/ListHeader";



const EmployeeList = ()=>{
   
    
    const navigate=useNavigate();
    const goToNextPage=()=>{
        navigate('/create');
    }
    const { data, error, isLoading } = useGetEmployeesQuery();
    return (
        
            <>

            <Aside/>
            <main>
                <BlankDiv />
                <ListHeader label={'Employee List'} />
                {error ? (
                    <>Opps!, there was an error</>
                ) : isLoading ? (
                    <>Please wait.Loading...</>

                ) : data ? (<><List employeeDetails={data.data} /></>
                
                ) : null}
            </main>
        </>
        
    )
}
export default EmployeeList;