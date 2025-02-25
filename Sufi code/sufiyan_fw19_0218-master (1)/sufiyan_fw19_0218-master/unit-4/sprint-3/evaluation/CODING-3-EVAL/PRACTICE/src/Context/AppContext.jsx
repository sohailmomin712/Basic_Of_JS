import { createContext, useState } from "react";

export const AppContext = createContext();
function AppContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);
    const loginUser = (Token) => {
        setIsAuth(true);
        setToken("ABCD");
    }
    const logoutUser = () => {
        setIsAuth(false);
        setToken(null);
    }
    return (
        <AppContext.Provider value={{ isAuth, token, loginUser, logoutUser }}>
            {children}
        </AppContext.Provider>

    )

}

export default AppContextProvider;
