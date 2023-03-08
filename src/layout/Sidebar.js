import { Link,  useLocation } from "react-router-dom";
import { useState } from "react";
import {
  HiHome,
  HiDocumentDuplicate,
  HiPhone,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

export const Sidebar = ({ children, user }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const Menus = [
    { title: "Головна", path: "/home", src: <HiHome /> },
    {
      title: "Акти порушень",
      path: "/dashboard",
      src: <HiDocumentDuplicate />,
    },
    { title: "Технічна підтримка", path: "/support", src: <HiPhone /> },
  ];

  return (
    <>
      <div class="flex flex-col sm:flex-row">
        { user ?
        <div
          className={`${
            open ? "w-60" : "w-fit"
          }  sm:block  h-screen duration-300 bg-gray-600  p-5 `}
        >
          <HiOutlineArrowNarrowLeft
            className={`${
              !open && "rotate-180"
            } absolute mx-4 text-white cursor-pointer  `}
            onClick={() => setOpen(!open)}
          />
          <ul className="pt-6">
            {Menus.map((menu, index) => (
              <Link to={menu.path} key={index}>
                <li
                  className={`flex items-center gap-x-6 text-base rounded-lg cursor-pointer  p-4 hover:text-white 
                      ${menu.gap ? "mt-9" : "mt-2"} ${
                    location.pathname === menu.path && "bg-cyan-500"
                  }`}
                >
                  <span className="text-2xl">{menu.src}</span>
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-300 hover:block`}
                  >
                    {menu.title}
                  </span>
                </li>
              </Link>
            ))}
          </ul> 
        </div> : null}
        <main class="flex-1 bg-indigo-100">
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className=" w-full inline-block align-middle">
                <div className="overflow-hidden">{children}</div>
              </div>
            </div>
          </div>
        </main>
      </div> 
    </>
  );
};

// "flex items-center justify-center h-screen bg-gray-700 sm:px-6"

// return (

// <nav class="order-first 8 bg-gray-800 h-screen p-8 overflow-y-auto w-flex">
//   {list.map((item, key) => {
//     return (
//       <ul>
//         <a class="hover:text-cyan-500 transition-colors cursor-pointer py-2 px-2">
//           <NavLink to={`/${item.url}`} key={item}>
//             <div className="text-white capitalize">{item.name}</div>
//           </NavLink>
//         </a>
//       </ul>
//     );
//   })}
// </nav>
// );
