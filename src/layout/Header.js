import LogoutButton from "../components/LogoutButton";

export function Header({user}) {
            return (
                <header class=" top-0 w-full text-white  shadow-sm body-font">
                    <div class="bg-cyan-900">
                        <div class="h-16 ed px-6 flex items-center justify-between">
                            { user? <LogoutButton/> : null}
                        </div>
                    </div>
                </header>
            );
}