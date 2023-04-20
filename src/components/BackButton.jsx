import React from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "./base";

export const BackButton = (props) => {
    const {label} = props;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    };
    return (
        <div className="fixed top-12 right-6">
            <Button variant={'success'}
                    onClick={handleClick}
                    className="text-white bg-gradient-to-r from-cyan-500
                to-blue-500 hover:bg-gradient-to-bl focus:ring-1
                focus:outline-none focus:ring-cyan-300 dark:
                focus:ring-cyan-900 font-medium rounded-md
                text-xl px-5 py-2.5 text-center mr-2 mb-2">
                {label}
            </Button>
        </div>
    );
};