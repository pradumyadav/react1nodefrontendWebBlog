import {useEffect, useState } from "react"

//import { dataRoom } from "./Parentdata"
import axios from "axios" ;
import {NavLink } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
export default function Food(){
   // const [food_data_dataRoom]= useContext(dataRoom)

    const[data,setData]=useState([])

    useEffect(()=>{
        axios.get("https://nodeblog20.onrender.com/api/food")
        .then((responce)=>setData(responce.data))
        .catch((err)=>console.log(err))
    })
    return(
        <>
         <Header/>

        <div  className="foodData">
            <div className="call_1">
            <h1 className="top_h1">Food <hr className="hr"/></h1>
            {data.filter((item)=>item.ID>=72 && item.ID<80)
            .map((item,index)=>{
                return(
                    <div  className="childcompo" key={index}>
                         <NavLink  className="navlink"to={`/ContentDeatails/${item.ID}`}>
                        <div className="titlediv">{item.dataTitle.slice(0,15)}...</div>
                        <div className="img">  <img src={item.dataImage} alt="Not Found" className="all_Left_Image"/></div>
                        <div className="p1">{item.description.slice(0,50)}.....</div>
                        </NavLink>
                    </div>
                )
            })}
            </div>


         <div className="call_2">  
         <h1 className="top_h1">Top post <hr className="hr"/></h1>
         <div className="latest_post">
            {data.filter((item)=>item.ID ===85).map((item,index)=>{
                return(
                    <div key={index}>
                        <NavLink className="navlink"to={`/ContentDeatails/${item.ID}`}> 
                        <div><img src={item.dataImage} alt="Not Found" className="all_Top_Post_Images"/></div>
                        <div className="latest_post2"> {item.dataTitle}... </div><span className="one">{index+1}</span>
                        </NavLink> 
                    </div>
                )
            })}
           </div>

            {data.filter((item)=>item.ID>=80 && item.ID<=83)
            .map((item,index)=>{
                return(
                    <div className="left_Div"  key={index}>
                        <NavLink className="navlink"to={`/ContentDeatails/${item.ID}`}>
                       <div className="right_description">{item.description.slice(0,10)}... <h1 className="count">{index+2}</h1></div>
                        <img className="right_image" src={item.dataImage} alt="Not Found"/>
                        </NavLink>
                    </div>
                )
            })}
             <div className="advertisement">
                <div>
                Advertisement
                </div>
            </div>

            </div> 
        </div>
        <Footer/>
        </>
    )
    
}