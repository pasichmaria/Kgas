import {HiLogout} from "react-icons/hi";

function LogoutButton() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <button
            onClick={handleLogout}
        >
            <HiLogout/>
        </button>
    );
}
export default LogoutButton;