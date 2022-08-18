import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Aside from "../../components/Aside";
import BlankDiv from "../../components/BlankDiv";
import Button from "../../components/Button";
import Header from "../../components/Header";
import InputField from "../../components/InputField";
import InputSelect from "../../components/InputSelect";
import { useCreateEmployeesMutation, useEditEmployeesMutation, useGetEmployeeByIDQuery } from "./api";

const dropDown = {
    role: [
        { field: 'Admin', value: 'Admin' },
        { field: 'HR', value: 'HR' },
        { field: 'QA', value: 'QA' }
    ],
    status: [
        { field: 'Active', value: 'Active' },
        { field: 'InActive', value: 'InActive' },
        { field: 'Probation', value: 'Probation' }
    ],
    departmentId: [
        { field: 'CS', value: '5ce08589-0bc4-4a55-87c8-d02badd17ae1' },
        { field: 'BackEnd', value: 'bccd23e3-efb4-4767-819b-0bd3adbe0871' }
    ]
}


const EditEmployee = () => {
    const {id} = useParams()
    const { data, error, isLoading } = useGetEmployeeByIDQuery(id);
    const [editEmployee, result] = useEditEmployeesMutation();
    
    const [employee, setEmployee] = useState({
        name: '',
        employeeId: '',
        joinDate: '',
        role: '',
        status: '',
        departmentId: '',
        experience: '',
        username: '',
        password: '',
        lineOne: '',
        lineTwo: '',
        city: '',
        state: '',
        country: '',
        pincode: ''


    });

    useEffect(() => {
        if(data?.data) {
            setEmployee ({
                name: data.data.name,
                employeeId: data.data.employeeId,
                joinDate: data.data.joinDate,
                role: data.data.role,
                status: data.data.status,
                departmentId: data.data.departmentId,
                experience: data.data.experience,
                username: data.data.username,
                password: '',
                lineOne: data.data.address.line1,
                lineTwo: data.data.address.line2,
                city: data.data.address.city,
                state: data.data.address.state,
                country: data.data.address.country,
                pincode: data.data.address.pincode
            })
        }
    },[data])

    const handleSubmit = () => {
        editEmployee({
            id,
            name: employee.name,
            employeeId: employee.employeeId,
            username: employee.username,
    
            joiningDate: employee.joinDate,
            role: employee.role,
            status: employee.status,
            experience: Number(employee.experience),
            departmentId: employee.departmentId,
            address: {
                id: data.data.addressId,
                line1: employee.lineOne,
                line2: employee.lineTwo,
                city: employee.city,
                state: employee.state,
                country: employee.country,
                pincode: Number(employee.pincode)
            }
        })

    }

   


    const navigate = useNavigate();

    const goToNextPage = () => {
        navigate('/list');
    }

    useEffect(() => {
        if(result.isSuccess){
            goToNextPage()
        }
    },[result])

    

    const onChangeValue = (key, value) => {
        setEmployee({
            ...employee,
            [key]: value

        })

    }

 

    return (

        <>
            {<><Aside/>
                <BlankDiv />
                <Header label={'Edit Employee'} />
                </>
}           {error ? (
                    <>Opps!, there was an error</>
                ) : isLoading ? (
                    <>Please wait.Loading...</>

                ) : data ? (<><section className="form">    
                {
                Object.keys(employee).map((field) => {
                    return (
                        <div className="InputDiv">
                            {(field === "role" || field === "status" || field === "departmentId") ?
                                <InputSelect className="InputSelect" label={field} value={employee[field]} options={dropDown[field]} onChangeHandler={(value) => onChangeValue(field,value)} />
                                : <InputField className="InputField" label={field} value={employee[field]} onChangeHandler={(value) => onChangeValue(field,value)} />
    
                            }
    
    
                        </div>
    
                    )
                })
    
            }
            <div className="buttonSubmit">
            <Button className="buttonS" label='Edit Employee' handleClick={handleSubmit} />
            </div>
            
            </section>
    </>
                
                ) : null}
                    

            
            
        </>
        




    );
}

export default EditEmployee;