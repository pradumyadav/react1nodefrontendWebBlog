import {useEffect, useState} from "react"
import axios from "axios"

import "./Apply.css"
import {NavLink } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

export default function Bollywood(){

    // const [data_for_Bollywood]=useContext(dataRoom)
    const[data,setData]=useState([])

    useEffect(()=>{
        axios.get("https://nodeblog20.onrender.com/api/bollywood")
        .then((responce)=>setData(responce.data))
        .catch((err)=>console.log(err))
    })

    return(
        <>
            <Header/>

        <div className="bollywood_Parent">
            <div className="call_1">
            <h1 className="top_h1">Bollywood  <hr className="hr"/></h1>
           
                 {data.filter((item)=>item.ID >=1 && item.ID<=9)
                 .map((item,index)=>{ 
                return(
                <div className="childcompo" key={index}>
                     <NavLink className="navlink" to={`/ContentDeatails/${item.ID}`} >
                     <div className="titlediv">{item.dataTitle.slice(0,15)}...</div>
            <img src={item.dataImage} alt="Not Found" className="all_Left_Image"></img>
              <div className="p1">{item.description.slice(0,50)}..... </div>
              
                     </NavLink>
            
                 </div>
            
                )
                }
            )}
            </div>

           <div  className="call_2">
          
            <h1 className="top_h1">Top Post <hr className="hr"/></h1>
           <div className="latest_post">

            {data.filter((item)=>item.ID ===8).map((item,index)=>{
                return(
                    <div key={index}>
                        <NavLink className="navlink"to={`/ContentDeatails/${item.ID}`}>
                            <div><img src={item.dataImage} alt="Not Found" className="all_Top_Post_Images"/></div>
                        <div className="latest_post2"> {item.dataTitle}...</div><span className="one">{index+1}</span>
                        </NavLink>
                    </div>
                )
            })}
           </div>
           
            {data.filter((item)=>item.ID >9 && item.ID<=13).map((item,index)=>{ 
                return(
                 <div className="left_Div" key={index}>
                    <NavLink className="navlink"to={`/ContentDeatails/${item.ID}`}>
                    <div  className="right_description">{item.description.slice(0,15)}.. <h1 className="count">{index+2}</h1></div>
                    
                   <img src={item.dataImage} alt="Not Found" className="image_for_BollyCompo"/>
                    </NavLink>
                   
                 </div>
                
                )
                }
            )}
              <div className="advertisement">
               
                Advertisement
                
            </div>

            </div> 
        </div>
        
        <Footer/>
       
        </>
    )
}