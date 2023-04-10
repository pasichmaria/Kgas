import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children, user }) => {
  return (
    <div class="min-h-screen  flex-col">
      <Sidebar user={user} children={children} />
    </div>
  );
};
