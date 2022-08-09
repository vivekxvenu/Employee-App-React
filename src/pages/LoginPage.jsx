import Button from "../components/Button"
import { useNavigate } from 'react-router-dom'
import InputField from "../components/InputField";
import { useState } from "react";
import { useLoginMutation } from "../services/BaseApi";
import { setStorage } from "../services/util";
import loginimage from "../images/large-image.png"
import logo from "../images/kv logo.png"
const LoginPage = () => {
    const navigate = useNavigate();

    const [login,result] = useLoginMutation()

    const goToNextPage = () => {
        navigate('/list');
    }

    const handleOnClick = async () => {
        const response = await login(user);
        if(response.data){
            setStorage("idToken",response.data.data.idToken);
            goToNextPage();
        }
    }

    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const onChangeValue = (key, value) => {
        setUser({
            ...user,
            [key]: value

        })

    }
    return (
        <><div className="logincontain">
            <div className="left">
        <img id="loginimage" src={loginimage} alt="login image"/>
        </div>
        <div className="right">
        <img src={logo} alt="logo"/>    
        <InputField className="loginInput" label="Username" onChangeHandler={(value) => onChangeValue("username",value)}/>
        <InputField className="loginInput" label="Password" onChangeHandler={(value) => onChangeValue("password",value)} />
        <Button className="loginBtn" label="Login" handleClick={handleOnClick} />
        </div>
        </div>
        </>
    )
}

export default LoginPage;