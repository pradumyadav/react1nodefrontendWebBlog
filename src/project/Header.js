import { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Header(){
    const [mymenu,setmymenu]= useState(true)
    return(
        <>
        <div className="header_Parent">
            <div className="my_menu" onClick={()=>setmymenu(!mymenu)}>
                <span >1</span>
                <span>2</span>
                <span>3</span>
            </div>

             <nav className={mymenu ?"":"open"}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/bollywood">Bollywood</NavLink>
                <NavLink to="/hollywood">Hollywood</NavLink>
                <NavLink to="/technology">Technology</NavLink>
                <NavLink to="/fitness"> Fitness</NavLink>
                <NavLink to="/food"> Food</NavLink>
            </nav>
        </div>
        </>
    )
}