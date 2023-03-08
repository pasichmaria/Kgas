import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children, user, setUser, getUser }) => {
  return (
    <div class="min-h-screen flex flex-col">
      <Header user={user} />
      <Sidebar getUser={getUser} user={user} setUser={setUser} children={children} />
    </div>
  );
};
