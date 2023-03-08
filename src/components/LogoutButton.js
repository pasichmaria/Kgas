
import {HiLogout } from "react-icons/hi";

function LogoutButton() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };
    return (
        <button
            className="flex items-center justify-center space-x-2 transition-colors cursor-pointer  hover:text-black"
            onClick={handleLogout}
        >
            <HiLogout />
            <span>Вихід</span>
        </button>
    );
}

export default LogoutButton
