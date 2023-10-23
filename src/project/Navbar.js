import {Route, Routes } from "react-router-dom";
import Home from "./Home";
import Bollywood from "./Bollywood";
import Hollywood from "./Hollywood";
import Technology from "./Technology";
import Fitness from "./Fitness";
import Food from "./Food";
import ContentDeatails from "./ContentDeatails";
import "./Apply.css"

export default function Navbar(){
    return(
        <div className=" navParent">
         
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route  path="/bollywood" element={<Bollywood/>}/>
                <Route  path="/hollywood" element={<Hollywood/>}/>
                <Route  path="/technology" element={<Technology/>}/>
                <Route  path="/fitness" element={<Fitness/>}/>
                <Route path="/food" element={<Food/>}/>
                <Route path="/ContentDeatails/:ID"element={<ContentDeatails/>}/>
            </Routes>
           
        </div>
    )
}