import React from "react";

export const Accordition = (props) => {
    const { title, children } = props;

    const [isOpen, setIsOpen] = React.useState(false);

    const handleAccordionClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hs-accordion-group">
            <div
                className={`hs-accordion rounded-md shadow-md ${
                    isOpen ? "active" : ""
                }`}
                onClick={handleAccordionClick}
            >
                <button
                    className={`hs-accordion-toggle flex items-center justify-between w-full px-4 py-3 font-semibold text-left text-gray-800 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-400 ${
                        isOpen
                            ? "hs-accordion-active:text-blue-600 dark:hs-accordion-active:text-blue-500 bg-white shadow-sm"
                            : ""
                    }`}
                    aria-expanded={isOpen}
                >
                    <span>{title}</span>
                    <svg
                        className={`block w-4 h-4 text-gray-600 dark:text-gray-400 ${
                            isOpen ? "transform rotate-180" : ""
                        }`}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d={`M2 ${
                                isOpen ? "11" : "5"
                            }L8.16086 ${isOpen ? "5.31305" : "10.6869"}C8.35239 ${
                                isOpen ? "5.13625" : "10.8637"
                            } 8.64761 ${
                                isOpen ? "5.13625" : "10.8637"
                            } 8.83914 ${
                                isOpen ? "5.31305" : "10.6869"
                            }L15 ${isOpen ? "11" : "5"}`}
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
                <div
                    className={`px-4 py-3 bg-gray-100 dark:bg-gray-800 ${
                        isOpen ? "block" : "hidden"
                    }`}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
