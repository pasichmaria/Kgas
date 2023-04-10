import React, {useState} from "react";
import {Button} from "../components";
import {Input} from "../components/base/Input";
import {useAuth} from "../hooks";

export const LoginPage = ({getUser}) => {
    const {login} = useAuth({
        onLoginSuccess: (data) => {
            localStorage.setItem("token", data);
            getUser(data);
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
                    <span className="text-xl font-medium text-white">Вхід</span>
                </div>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        label="Пошта користувача"
                        placeholder="Введіть вашу пошту"
                        value={credentials.email}
                        onChange={handleInputChange}
                        required
                    />
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        label="Пароль"
                        placeholder="Введіть пароль"
                        value={credentials.password}
                        onChange={handleInputChange}
                        required
                    />
                    <div className="mt-6">
                        <Button
                            buttonType="primary"
                            type="submit">Увійти</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
