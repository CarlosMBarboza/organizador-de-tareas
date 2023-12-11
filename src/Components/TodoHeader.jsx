import MoonIcon from "../icon/MoonIcon";
import{ useEffect, useState } from "react";
import SunIcon from "../icon/SunIcon";


const inicialStateDarkMode = localStorage.getItem("theme") === "dark" 

const TodoHeader = () => {
    const [darkMode, setDarkMode] = useState(inicialStateDarkMode);

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }
    , [darkMode]);
    
    return (
        <header className="container mx-auto px-4 pt-8   md: max-w-xl ">
            <div className="flex justify-between">
                <h1 className="text-white text-3xl font-semibold  tracking-[0.4em]">
                    To-Do
                </h1>
                <button onClick={() => setDarkMode(!darkMode) } >
                    {
                        darkMode ? <SunIcon /> : <MoonIcon />
                    }
                </button>
            </div>
        </header>
    );
};

export default TodoHeader;
