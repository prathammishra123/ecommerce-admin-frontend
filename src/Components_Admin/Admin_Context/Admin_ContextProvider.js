import React, { createContext, useState } from 'react'

export const Logincontext = createContext();

const Contextprovider = ({ children }) => {

    const [account, setAccount] = useState("");
    return (
        <>
           {/* this is kind of a delivery boy */}
            <Logincontext.Provider value={{ account, setAccount }}>
                {children}
            </Logincontext.Provider>
        </>
    )
}

export default Contextprovider;
