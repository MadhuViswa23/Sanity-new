
import React,{useEffect} from 'react';

import './cards.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



export default function Cards(){

   

  return (
   <>

<section className="destinations-area section-gap"  >
  <div className="container">	
    <div className="row d-flex justify-content-center">
      <div className="menu-content pt-4 col-lg-12">
        <div className="color-destinations text-center">
		
       
        </div>
      </div>
    </div>      

    <div className="row pt-4" >
      <div className="col-lg-4 ">
        <div className="single-destinations">
         
          <div className="details">
          <h5 style={{fontWeight: 'bold'}}>Free</h5>
            
            <ul className="package-list pl-1 pr-2">
              <li className="d-flex justify-content-between align-items-center">
              <span>
  $ <span >0</span>forever
</span>


               
              </li>
             
              <li className="d-flex justify-content-between align-items-center">
              <a 
  href="#" 
  className="price-btn" 
  style={{ 
    border: "2px solid grey", 
    textAlign: "center", 
    backgroundColor: "white", 
    color: "black", 
    padding: "5px 10px", 
    borderRadius: "5px", 
    width: "100%",
    transition: "background-color 0.3s", // Smooth transition effect
    textDecoration: "none" // Remove underline from link
  }}
  onMouseEnter={(e) => e.target.style.backgroundColor = "lightgrey"} // Change background color on hover
  onMouseLeave={(e) => e.target.style.backgroundColor = "white"} // Restore original background color on mouse leave
>
  Get started for free
</a>

        </li>		
        
        										
            </ul>
          
            
          </div>
          
          
        </div>
      </div>

      <div className="col-lg-4">
        <div className="single-destinations2">
          
          <div className="details">
          <h5 style={{fontWeight: 'bold'}}>Growth</h5>
           
            <ul className="package-list pl-1 pr-2">
              <li className="d-flex justify-content-between align-items-center">
              <span>
  $ <span >15</span>
per seat / month
</span>


              </li>
             
													
        <li className=" second d-flex justify-content-between align-items-center">
              <a 
  href="#" 
  className="price-btn" 
  style={{ 
    border: "2px solid grey", 
    textAlign: "center", 
    backgroundColor: "black", 
    color: "white", 
    padding: "5px 10px", 
    borderRadius: "5px", 
    width: "100%",
    transition: "background-color 0.3s, color 0.3s", // Smooth transition effect for background-color and color
    textDecoration: "none" // Remove underline from link
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "black"; // Change background color on hover
    e.target.style.color = "#ADD8E6"; // Change text color on hover
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "black"; // Restore original background color on mouse leave
    e.target.style.color = "white"; // Restore original text color on mouse leave
  }}
>
Try for free
</a>

</li>		

        										
        </ul>
       
            
            </div>
            
            
          </div>
        </div>

  <div className="col-lg-4">
        <div className="single-destinations2"  style={{ border: "2px solid red" }}>
          
        <div className="details">
          <h5 style={{fontWeight: 'bold'}}>Enterprise</h5>
           
            <ul className="package-list pl-1 pr-2">
              <li className="d-flex justify-content-between align-items-center">
              <span>
   <span > <span><FontAwesomeIcon icon={faCommentAlt} /> </span></span>Custom pricing
</span>


              </li>
             
													
              <li className="d-flex justify-content-between align-items-center">
              <a 
  href="#" 
  className="price-btn" 
  style={{ 
    border: "2px solid #ff7b7b", 
    textAlign: "center", 
    backgroundColor: "white", 
    color: "black", 
    padding: "5px 10px", 
    borderRadius: "5px", 
    width: "100%",
    transition: "background-color 0.3s", // Smooth transition effect
    textDecoration: "none" // Remove underline from link
  }}
  onMouseEnter={(e) => e.target.style.backgroundColor = "lightgrey"} // Change background color on hover
  onMouseLeave={(e) => e.target.style.backgroundColor = "white"} // Restore original background color on mouse leave
>
  Contact sales
</a>

        </li>	

        								
        </ul>
       
       
      </div>
      
      
    </div>
  </div>

     
  
 
                     
                       
                    
    </div>
   
  </div>	
</section>
	
   
   </>
  )
}

