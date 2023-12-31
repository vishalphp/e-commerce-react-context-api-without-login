import React, { useState } from "react";

const LoginContext = React.createContext({});

export default LoginContext;

export const LoginContextProvider = ({children}) =>{

    const [logindata, setLoginData] = useState({
        token: null,
        email: null,
        uuid: null,
        expiresIn: 0
    });

    return <LoginContext.Provider value={{logindata, setLoginData}} >
        {children}
        </LoginContext.Provider>

}
