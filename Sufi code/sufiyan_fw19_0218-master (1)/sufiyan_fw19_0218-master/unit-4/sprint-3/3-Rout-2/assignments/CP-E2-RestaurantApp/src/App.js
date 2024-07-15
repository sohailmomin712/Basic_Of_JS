import "./App.css";
import { RestaurantDetails } from "./components/RestaurantDetails";

function App() {
  return (
    <>
      <div style={{backgroundColor:"#eeee"}} data-testid="restaurants-container">
        <RestaurantDetails />
      </div>
    </>
  );
}

export default App;
