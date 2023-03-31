import React from "react";
export const Document = ({ name, link }) => {
    return (
    <div className="p-2 hover:bg-gray-200 cursor-pointer">
        <a href={link} target="_blank" rel="noopener noreferrer">
            {name}
        </a>
    </div>
    );
};
