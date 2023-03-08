import LogoutButton from "../components/LogoutButton";

export function Header({ user }) {
  return (
    <header class="sticky top-0 w-full text-white  shadow-sm body-font">
      <div class="bg-cyan-600">
        <div class="h-16 ed px-6 flex items-center justify-between">
           {  user ? <LogoutButton user={user} /> : null}
        </div>
      </div>
    </header>
  );
}
