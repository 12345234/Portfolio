import {Link}from "react-router-dom";
import {profile}from"../data/portfolio";

interface Props{
    theme:string;
    onThmetoggle:() => void;
}

export default function Header({theme,onThemeToggle}:Props){
  const navItems = [{label:"About",hash:"about"}];

  return(
    <header className = "header">
        <div className ="continer">
            <Link to ="/"className="header-inner">
            {profile.nameEn.split('')[0]}<span>.</span>
            </Link>
            <nav>
                <ul className="header-nav">
                    {navItems.map((item)=>
                    (
                        <li key={item.label}>
                            <Link to={`/#${item.hash}`}>
                            {item.label}
                            </Link>
                        </li>
                    ))}

                </ul>
            </nav>
        </div>
    </header>
);
    
}