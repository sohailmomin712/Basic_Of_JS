import NavBar from "./Components/NavBar";
import AllRoutes from "./Routes/AllRoutes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Context & Routes</h1>
      <NavBar />
      <AllRoutes />
    </div>
  );
}
