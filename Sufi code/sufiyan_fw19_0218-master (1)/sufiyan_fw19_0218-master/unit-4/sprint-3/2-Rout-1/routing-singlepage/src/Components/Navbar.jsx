import { NavLink } from "react-router-dom";

const Links = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "Products",
    path: "/products"
  },
  {
    title: "Login",
    path: "/login"
  },
  {
    title: "User",
    path: "/user"
  }
];
export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "80%",
        margin: "auto"
      }}
    >
      {Links.map((el) => (
        <NavLink
          to={el.path}
          className={({ isActive }) =>
            isActive ? "activeStyle" : "defaultStyle"
          }
          end
        >
          {el.title}
        </NavLink>
      ))}
    </div>
  );
}
