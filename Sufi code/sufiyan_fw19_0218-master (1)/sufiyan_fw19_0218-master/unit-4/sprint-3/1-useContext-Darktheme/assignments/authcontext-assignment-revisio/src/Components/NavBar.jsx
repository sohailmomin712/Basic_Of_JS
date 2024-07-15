import { NavLink } from "react-router-dom";

const Links = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "Login",
    path: "/login"
  },
  {
    title: "Logout",
    path: "/logout"
  },
  {
    title: "UserDetail",
    path: "/userdetails"
  }
];

function NavBar() {
  const activeStyle = {
    color: "red",
    textDecoration: "none"
  };
  const defaultStyle = {
    color: "black",
    textDecoration: "none"
  };

  return (
    <div
      style={{
        display: "flex",
        width: "50%",
        justifyContent: "space-between",
        margin: "auto"
      }}
    >
      <div style={{ color: "red", fontSize: "30px" }}>suFi</div>

      <div
        style={{
          display: "flex",
          gap: "20%",
          justifyContent: "space-between"
        }}
      >
        {Links.map((el) => (
          <NavLink
            key={el.path}
            to={el.path}
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
          >
            {el.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
