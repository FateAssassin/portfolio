import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import { useLocation } from "react-router-dom";

export default function NavBar() {
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="navbar justify-between flex py-5 px-6 lg:px-32 align-middle absolute w-full top-0 z-20">
            <div className="py-2">
                <Link to="/" className={`text-3xl font-bold lg:block hidden`}>Muaz Ugur</Link>
            </div>

            <div className="lg:flex hidden py-2 ml-10">
                <Link to="/" className="p-3 text-xl hover:text-black/50 duration-200 dark:hover:text-white/50">Home</Link>
                <Link to="/about" className="p-3 text-xl hover:text-black/50 duration-200 dark:hover:text-white/50">About</Link>
                <Link to="/projects" className="p-3 text-xl hover:text-black/50 duration-200 dark:hover:text-white/50">Projects</Link>
                <Link to="/resume" className="p-3 text-xl hover:text-black/50 duration-200 dark:hover:text-white/50">Resume</Link>
            </div>

            <div className="lg:flex hidden py-2 ml-10 items-center">
                <div className="mr-10">
                    <button onClick={() => toggleTheme()}>
                        <i className={`${theme === "light" ? "bi bi-moon-fill text-blue-800" : "bi bi-sun-fill text-yellow-300"} text-2xl`}></i>
                    </button>
                </div>
                <Link to="/contact" className="relative inline-block px-6 py-2 border-2 border-black/50 hover:text-white font-semibold overflow-hidden group mr-2 dark:border-white/50">
                    <span className="relative z-10">Let's Chat</span>
                    <span className="absolute inset-0 bg-black/60 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0 dark:bg-white/60"></span>
                </Link>
            </div>

            <div className="lg:hidden text-center relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex px-4 items-center justify-center bg-slate-300 dark:bg-slate-700 rounded-md transition-colors duration-300 fixed top-4 right-4 z-50"
                    style={{ width: "48px", height: "48px" }}>
                    <i className="bi bi-list text-3xl"></i>
                </button>

                {isOpen && (
                    <div className="flex flex-col py-4 mt-[48px] space-y-4 bg-slate-400/90 dark:bg-slate-800/90 transition-all duration-300 rounded-lg shadow-lg fixed right-[0px] w-48 z-40">
                        <Link to="/" className="p-3 text-lg hover:text-black dark:hover:text-white transition-colors duration-200">Home</Link>
                        <Link to="/about" className="p-3 text-lg hover:text-black dark:hover:text-white transition-colors duration-200">About</Link>
                        <Link to="/projects" className="p-3 text-lg hover:text-black dark:hover:text-white transition-colors duration-200">Projects</Link>
                        <Link to="/resume" className="p-3 text-lg hover:text-black dark:hover:text-white transition-colors duration-200">Resume</Link>
                        <div className="text-center mt-4">
                            <Link to="/contact" className="relative inline-block px-6 py-2 border-2 border-black/60 dark:border-white/60 hover:text-white font-semibold overflow-hidden group transition-all duration-300">
                                <span className="relative z-10">Let's Chat</span>
                                <span className="absolute inset-0 bg-black/70 dark:bg-white/70 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                            </Link>
                            <br />
                            <button onClick={() => toggleTheme()} className="mt-4 text-center focus:outline-none">
                                <i className={`${theme === "light" ? "bi bi-moon-fill text-blue-800" : "bi bi-sun-fill text-yellow-300"} text-2xl transition-transform duration-300`}></i>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
