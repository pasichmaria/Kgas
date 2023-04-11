import { Sidebar } from "./Sidebar";
import {Footer} from "./Footer";

export const Layout = ({ children, user }) => {
  return (
      <Sidebar user={user} children={children} />
  );
};
