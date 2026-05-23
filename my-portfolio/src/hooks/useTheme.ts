import{useState,useEffect} from "react";

export function useTheme():{theme:string;toggle:()=>void}{
    const [theme,setTheme] = useState(
        ()=>localStorage.getitem("theme") ??"light",
    );
    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme);
        localStorage.setItem("theme",theme);
    },[theme]);

    const toggle = () => setTheme((t) => (t==="dark" ? "light":"dark"));
    return {theme,toggle};
}