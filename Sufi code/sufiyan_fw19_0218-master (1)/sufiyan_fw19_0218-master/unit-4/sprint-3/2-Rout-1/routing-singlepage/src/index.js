import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AppContextProvider } from "./Context/AppContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AppContextProvider>

  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AppContextProvider>
);
