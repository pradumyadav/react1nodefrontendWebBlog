import { NavLink } from "react-router-dom";
import img1 from "../asset/icons8-instagram-48 (1).png"
import img2 from "../asset/icons8-facebook-48 (1).png" ;
import img3 from "../asset/icons8-twitter-48 (1).png";
import img4 from "../asset/icons8-whatsapp-48.png";
import img5 from "../asset/mobilecon.png";
import img6 from "../asset/maillicon (1).png"
import "./Footer.css"
export default function Footer (){
    return(
        <>
        <div className="footer_Parent">
                <div className="footer_Child1">
                    <h2>The Siren</h2>
                   <p>copyright@ 2021 luxe </p> 
                    <p>All rights reserved...</p>
                    
                <div className="imgdiv"><img className="Img1" src={img1} alt="Not Found" /></div>
                    <div className="imgdiv"><img className="Img2" src={img2} alt="Not Found" /></div>
                    <div className="imgdiv"><img className="Img3" src={img3} alt="Not Found" /></div>
                    <div className="imgdiv"><img className="Img4" src={img4} alt="Not Found" /></div>
                </div>

                <div className="footer_Child2">
                  <div>
                  <h2>Company</h2>
                    <div className="footer_company">PrepBytes</div>
                    <div className="footer_company">pricing</div>
                    </div>  
                    <div>
                    <div className="footer_company">AboutUs</div>
                    <div className="footer_company">Contact us.</div>
                    <div className="footer_company">Testimonials.</div>
                    </div>
                   
                </div>

                

            <div className="footer_Child4">
                <div className="footer_Nav1">
                    <div style={{fontSize:"28px",textAlign:"center",fontWeight:"700"}}>Check Here</div>
                    <NavLink className="navlink" to="/">Home</NavLink>
                    <NavLink className="navlink" to="/bollywood">Bollywood</NavLink>
                    <NavLink  className="navlink" to="/hollywood">Hollywood</NavLink>
                </div>
                <div className="footer_Nav2">
                <NavLink className="navlink" to="/technology">Technology</NavLink>
                <NavLink className="navlink"to="/fitness"> Fitness</NavLink>
                <NavLink className="navlink" to="/food"> Food</NavLink>
                </div>
                
                </div>

                <div className="footer_Child3">
                   <div className="number"> <div><img className="Img5" src={img5} alt="Not Found"/></div><div>:-9004445608</div></div>
                    <div className="maill"><img   className="Img6" src={img6} alt="Not Found"/><span>: pradumyadav020@..</span></div>
                    
                </div>
                
        </div>
        </>
    )
}