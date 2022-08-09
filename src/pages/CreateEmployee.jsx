import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Aside from "../components/Aside";
import BlankDiv from "../components/BlankDiv";
import Button from "../components/Button";
import Header from "../components/Header";
import InputField from "../components/InputField";
import InputSelect from "../components/InputSelect";
import { useCreateEmployeesMutation } from "../services/BaseApi";

const dropDown = {
    role: [
        { field: 'Admin', value: 'admin' },
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


const CreateEmployee = () => {
    const handleSubmit = () => {
        createEmployee({
            name: employee.name,
            employeeId: employee.employeeId,
            username: employee.username,
            password: employee.password,
            joiningDate: employee.joinDate,
            role: employee.role,
            status: employee.status,
            experience: Number(employee.experience),
            departmentId: employee.departmentId,
            address: {
                line1: employee.lineOne,
                line2: employee.lineTwo,
                city: employee.city,
                state: employee.state,
                country: employee.country,
                pincode: Number(employee.pincode)
            }

        })

    }

    const [createEmployee, result] = useCreateEmployeesMutation();


    const navigate = useNavigate();

    const goToNextPage = () => {
        navigate('/list');
    }

    useEffect(() => {
        if(result.isSuccess){
            goToNextPage()
        }
    },[result])

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

    const onChangeValue = (key, value) => {
        setEmployee({
            ...employee,
            [key]: value

        })

    }

    // useEffect(() => {
    //     setEmployee({
    //         name: '',
    //         employeeId: '',
    //         joinDate: '',
    //         role: '',
    //         status: '',
    //         experience: ''

    //     }, []);
    // })


    return (

        <>
            {<><Aside/>
                <BlankDiv />
                <Header label={'Create Employee'} />
                </>
}
            <section className="form">    
            {
            Object.keys(employee).map((field) => {
                return (
                    <div className="InputDiv">
                        {(field === "role" || field === "status" || field === "departmentId") ?
                            <InputSelect className="InputSelect" label={field} options={dropDown[field]} onChangeHandler={(value) => onChangeValue(field,value)} />
                            : <InputField className="InputField" label={field} value={field} onChangeHandler={(value) => onChangeValue(field,value)} />

                        }


                    </div>

                )
            })

        }
        <div className="buttonSubmit">
        <Button className="buttonS" label='Create Employee' handleClick={handleSubmit} />
        </div>
        </section>
        

            

        </>
        /* <InputField label='Employee Name' value='Employee Name'/>
        <InputField label='Employee ID' value='Employee ID'/>
        <InputField label='Joining Date' value='Joining Date'/>
        <InputSelect label="role" options={roles} />
        <InputSelect label= "status" options={status}/>
        <InputField label='Experience' value='Experience'/>
        <InputField label='Address' value='Address'/> */
        // <div>
        //     <label for="file">Upload ID proof</label><br/>
        //     <div id="choose">Choose file
        //     <label for="upload-photo" id="browse">Browse</label>
        //     <input type="file" name="photo" id="upload-photo"/>
        //     </div>
        // </div>

        //     <button label='Submit'/>
        //     <button label='Reset'/>




    );
}

export default CreateEmployee;