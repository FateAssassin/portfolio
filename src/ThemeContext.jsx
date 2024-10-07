import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useCookies } from 'react-cookie';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [cookies, setCookie] = useCookies(['theme']);
    const [theme, setTheme] = useState('light');
    const [loading, setLoading] = useState(true);

    const toggleTheme = useCallback(() => {
        if (theme === "light") {
            setTheme("dark");
            setCookie('theme', 'dark', { path: '/' });
            document.documentElement.classList.add('dark');
        } else {
            setTheme("light");
            setCookie('theme', 'light', { path: '/' });
            document.documentElement.classList.remove('dark');
        }
    }, [theme, setCookie]);

    useEffect(() => {
        if (loading) {
            const localTheme = cookies.theme;
            if (localTheme === "light") {
                setTheme("light");
                document.documentElement.classList.remove('dark');
            } else if (localTheme === "undefined") {
                setTheme("light");
                setCookie('theme', 'light', { path: '/' });
                document.documentElement.classList.remove('dark');
            } else {
                setTheme("dark");
                document.documentElement.classList.add('dark');
            }
            setLoading(false);
        }
    }, [loading, cookies.theme, setCookie]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
