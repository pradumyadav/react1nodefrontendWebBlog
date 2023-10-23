import { NavLink, useNavigate, useParams } from "react-router-dom"
//import { dataRoom } from "./Parentdata"
import {useEffect, useState } from "react"
import axios from "axios"
import d1img from "../asset/facebook.png"
import d2img from "../asset/instagram.png"
import d3img from "../asset/twitter.png"
import d4img from "../asset/github.png"
import d5img from "../asset/icons8-share-48.png"
import d6img from "../asset/icons8-thumb.gif"
   export default function ContentDeatails (){
                const back= useNavigate()

                const ID=useParams().ID
                
               
               // const [data_Fro_ContentDeatails]=useContext(dataRoom)
               const[data,setData]=useState([])

               useEffect(()=>{
                   axios.get("https://nodeblog20.onrender.com/api/home")
                   .then((responce)=>setData(responce.data))
                   .catch((err)=>console.log(err))
               })
         
                const cat_of_useconte = data[ID]?.Type ;
               
               
            return(

                <div>

                <div className="parent_Of_dynamic">

                    <div className="subparent_Of_dynamic1">
                    {data.filter((item)=>item.ID===parseInt(ID))
                    .map((item,index)=>{
                        return(
                            <div  className="subparent_Of_dynamic2" key={index}>
                                 <div className="title_for_dynamic">{item.dataTitle}</div>
                                 <div className="sticker_parent">
                                 <div className="sticker">🏋️‍♂️</div>
                                 <div className="name_surname-parent">
                                 <div className="name">Pradum Yadav</div>    
                                 <div className="date">Sep 18,2023  </div>
                                 </div>
                                 <span><img className="d1img"src={d1img} alt="Not Found"/></span>
                                 <span><img className="d2img"src={d2img} alt="Not Found"/></span>
                                 <span><img className="d3img"src={d3img} alt="Not Found"/></span>
                                 <span><img className="d4img"src={d4img} alt="Not Found"/></span>
                                 </div>
                                <div><img className="image_for_dynamic"src= {item.dataImage} alt="Not Found"/> </div>  
                                  <div className="description_for_dynamic"> {item.description}</div> 
                            </div>
                        )
                    })}


                    <div className="parent_Thumb_share">
                  <div><img src={d6img} alt="Not Found"/></div>
                    <div><img src={d5img} alt="Not Found"/></div>
                    </div>
                    <div className="sticker_Bottom_Border">
                    <div className="sticker_parent">
                                 <div className="sticker">🏋️‍♂️</div>
                                 <div className="name_surname-parent">
                                 <div className="name">Pradum Yadav</div>    
                                 <div className="date">Sep 18,2023  </div>
                                 </div>
                                 </div>
                    </div>
                    <button className="back_button"  onClick={()=>back(-1)}>Back</button>
                    </div>
                    {/* dynamic related DIVs */}
                 
                </div>
                <div className="dynamicSpan">More From The Siren</div>
                <div className="dynamic_Related_Footer">
                
                       
                       {/* {data_Fro_ContentDeatails.filter((item)=>item.Type===cat_of_useconte ).slice(0,3) */}
                       {data.filter((item)=>(item.Type===cat_of_useconte)&&(item.ID%16===1 || item.ID%17===2 ||item.ID%18===3)).map((item,index)=>{
                           return(
                               <div className="dynamic_Subchild" key={index}>
                                 <NavLink className="navlink"to={`/ContentDeatails/${item.ID}`}>
                                   <div><img className="image_for_dynamic2"src= {item.dataImage} alt="Not Found"/> </div>  
                                    <div className="title_for_dynamic2">{item.dataTitle.slice(0,40)}...</div>
                                    </NavLink>
                                    <div className="sticker_parent">
                                 <div className="sticker">🏋️‍♂️</div>
                                 <div className="name_surname-parent">
                                 <div className="name">Pradum Yadav</div>    
                                 <div className="date">Sep 18,2023 </div>
                                 </div>
                                 </div>
                            
                               </div>
                           )
                       })}
                           
                       </div>
                </div>
            )
        }