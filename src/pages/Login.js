import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Login = ({ getUser, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate()

  const { login } = useAuth ({
    onLoginSuccess: (data) => {
      localStorage.setItem('token', data)
      getUser(data)
    
      navigate("/home")}}
  )

    const handleSubmit = (data) => {
      login(data)
    }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrorMessage("");
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
   user ? navigate("/home") :
    <div className="flex items-center justify-center h-screen bg-gray-700 sm:px-6">
      <div className="w-full max-w-sm p-4 bg-gray-900 rounded-md shadow-md sm:p-6">
        <div className="flex items-center justify-center">
          <span className="text-xl font-medium text-white">Вхід</span>
        </div>

        <form className="mt-4" onSubmit={handleSubmit}>
          <label htmlFor="email" className="block">
            <span className="text-sm text-white">Пошта</span>
            <input
              type="email"
              id="email"
              name="email"
              autocomplete="username"
              class="block w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-800"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </label>

          <label htmlFor="password" className="block mt-3">
            <span className="text-sm text-white">Пароль</span>
            <input
              type="password"
              id="password"
              name="password"
              autocomplete="current-password"
              class="block w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-800"
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </label>

          <label className="inline-flex items-center" htmlFor="rememberMe">
            <input
              type="checkbox"
              className="text-indigo-600 border form-checkbox focus:outline-none focus:shadow-outline"
            />
            <span
              className="mx-2 text-sm text-white"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            >
              Запам'ятати мене
            </span>
          </label>

          {errorMessage && (
            <div className="mb-4 text-red-500">{errorMessage}</div>
          )}

          <div className="mt-6">
            <button
            onClick={() => handleSubmit({email, password})}
              type="submit"
              className="w-full px-4 py-2 text-sm text-center text-white bg-indigo-500 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 "
            >
              Увійти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
