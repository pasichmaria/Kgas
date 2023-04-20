import { Sidebar } from "./Sidebar";
import {BackButton} from "../components";

export const Layout = ({ children, user }) => {
  return (

      <Sidebar user={user} children={children} />
  );
};
