import React, {useState} from "react";
import {Button} from "../components";
import {Input, Label} from "../components/base/";
import {useAuth} from "../hooks";
import {useNavigate} from "react-router-dom";


export const LoginPage = ({getUser}) => {
    const navigate = useNavigate();
    const {login} = useAuth({
        onLoginSuccess: (data) => {
            localStorage.setItem("token", data);
            getUser(data);
            navigate("/acts", {replace: true})
        },
    });

    const [credentials, setCredentials] = useState({email: "", password: ""});
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        login(credentials)
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-700 sm:px-6">
            <div className="w-full max-w-sm p-4 bg-gray-900 rounded-md shadow-md sm:p-6">
                <div className="flex items-center justify-center">
                    <Label className='text-white text-xl'>Вхід до журналу</Label>
                </div>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Введіть вашу пошту"
                        value={credentials.email}
                        onChange={handleInputChange}
                        required
                    />
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Введіть пароль"
                        value={credentials.password}
                        onChange={handleInputChange}
                        required
                        className="mt-6"
                    />
                    <div className="mt-6">
                        <Button
                            className={'w-full py-2'}
                            variant={'primary'}
                            onClick={handleSubmit}
                            type="submit">Увійти</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
