import { createContext, useState } from "react";


export const ThemeContext = createContext(null);

// Create the provider component
export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
