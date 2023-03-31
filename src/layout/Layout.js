import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children, user }) => {
  return (
    <div class="min-h-screen  flex-col">
        { user ? <Header user={user} /> : null}
      <Sidebar children={children} />
    </div>
  );
};
