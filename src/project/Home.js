import {  useEffect, useState } from "react"
//import { dataRoom } from "./Parentdata"
import {  NavLink } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import axios from "axios"


export default function Home(){
  //  const [homedata_from_roomData] = useContext(dataRoom)
  const[data,setData]=useState([])

  useEffect(()=>{
      axios.get("https://nodeblog20.onrender.com/api/home")
      .then((responce)=>setData(responce.data))
      .catch((err)=>console.log(err))
  })
    return(
            <>
          
            <Header/>

            <div>
            {data.filter((item)=>item.ID === 0 )
            .map((item,index)=>{
                return(
                    <div className="home_Header"key={index}>
                
                     <img src={item.dataImage1} alt="Not Found" className="home_img1"/>
                         <div className="home_Header2">
                       <img src={item.dataImage2} alt="Not Found" className="home_img2"/>
                       <img src={item.dataImage3} alt="Not Found" className="home_img3"/>
                     
                       </div>
                     
                    </div>
                )
            })}
            
            </div>
                
           
            
            {/* Section 2 */}

            <h1 className="latest_For_Home">The Latest <hr className="hr"/></h1>
           <div className="home_flex">

      
            {data.filter((item)=>{return(item.ID===30||item.ID===43||item.ID===77)})
            .map((item,index)=>{
                return(
                   <div className="home_body"key={index}>
                     <NavLink className="navlink" to={`/ContentDeatails/${item.ID}`}>
                     <div>  <img className="home_body_img"src={item.dataImage} alt="Not Found"/></div>
                    <div className="home_Title ">{item.dataTitle.slice(0,40)}...</div>
                        <div className="home_description">{item.description.slice(0,90)}.....</div>
                     </NavLink>
                  
                   </div>
                )
            })}

               </div> 

              
              

               <div className="home_flex2">
            
                <div className="home_Call_1">
                <h1>Top Stories  <hr className="hr"/></h1>
                {data.filter((item)=>{return(item.ID===4||item.ID===18||item.ID===45||item.ID===51||item.ID===59||item.ID===60||item.ID===81)})
            .map((item,index)=>{
                return (
                <div className="childcompo"key={index}>
                    <NavLink className="navlink" to={`/ContentDeatails/${item.ID}`}>
                    <div className="titlediv">{item.dataTitle.slice(0,15)}...</div>
                 <div><img alt="Not Found" src={item.dataImage} className="all_Left_Image"/> </div>
                    <div className="p1">{item.description.slice(0,80)}.....</div>  
                    </NavLink>
                     
                </div>
                )
            })}
                </div>
                

                <div className="home_last_time_div">
                <h1>Top Post  <hr className="hr"/></h1>
                <div className="latest_post">

            {data.filter((item)=>item.ID ===29).map((item,index)=>{
                return(
                    <div key={index}>
                         <NavLink className="navlink" to={`/ContentDeatails/${item.ID}`}>
                         <div><img src={item.dataImage} alt="Not Found" style={{width:"330px",height:"210px"}}/></div>
                        <div className="latest_post2"> {item.dataTitle.slice(0,70)}...</div><span className="homeone">{index+1}</span>
                         </NavLink>
                       
                    </div>
                )
            })}
           </div>
           <div >
        
                {data.filter((item)=>{return(item.ID===1||item.ID===16||item.ID===41||item.ID===84)})
            .map((item,index)=>{
                return (
                <div  className="left_Div" key={index}>

                    <NavLink className="navlink" to={`/ContentDeatails/${item.ID}`}>
                    <div className="right_description">{item.description.slice(0,29)}...<h1 className="count">{index+2}</h1></div>
                  <img className="right_image"src={item.dataImage} alt="Not Found" style={{width:"130px",height:"70px"}}/>
                    </NavLink>
                    
                </div>
                )
            })}
            </div>
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
