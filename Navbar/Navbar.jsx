// import React from 'react'
// import './navbar.css';

// import img1 from './Assets/img-1.jpg'
// import img2 from './Assets/img-2.jpg'
// import img3 from './Assets/img-3.jpg'

// const Navbar = () => {
//   return (
//     <>
    
//     <div className="container-fluid position-relative p-0">
//             <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
//                 <a href="/" className="navbar-brand p-0">
//                     <h1 className="m-0"><i className="fa fa-map-marker-alt me-3"></i>Travela</h1>
//                 </a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//                     <span className="fa fa-bars"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarCollapse">
//                     <div className="navbar-nav ms-auto py-0">
//                         <a href="index.html" className="nav-item nav-link active">Home</a>
//                         <a href="about.html" className="nav-item nav-link">About</a>
//                         <a href="services.html" className="nav-item nav-link">Services</a>
//                         <a href="packages.html" className="nav-item nav-link">Packages</a>
//                         <a href="blog.html" className="nav-item nav-link">Blog</a>
//                         <div className="nav-item dropdown">
//                             <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
//                             <div className="dropdown-menu m-0">
//                                 <a href="destination.html" className="dropdown-item">Destination</a>
//                                 <a href="tour.html" className="dropdown-item">Explore Tour</a>
//                                 <a href="booking.html" className="dropdown-item">Travel Booking</a>
//                                 <a href="gallery.html" className="dropdown-item">Our Gallery</a>
//                                 <a href="guides.html" className="dropdown-item">Travel Guides</a>
//                                 <a href="testimonial.html" className="dropdown-item">Testimonial</a>
//                                 <a href="404.html" className="dropdown-item">404 Page</a>
//                             </div>
//                         </div>
//                         <a href="contact.html" className="nav-item nav-link">Contact</a>
//                     </div>
//                     <a href="/" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
//                 </div>
//             </nav>

//             <div className="carousel-header">
//                 <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
//                     <ol className="carousel-indicators">
//                         <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
//                         <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
//                         <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
//                     </ol>
//                     <div className="carousel-inner" role="listbox">
//                         <div className="carousel-item active">
//                             <img src={img1} className="img-fluid" alt="Image" />
//                             <div className="carousel-caption">
//                                 <div className="p-3" style={{ maxWidth: "900px" }}>
//                                     <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: "3px" }}>Explore The World</h4>
//                                     <h1 className="display-2 text-capitalize text-white mb-4">Let's The World Together!</h1>
//                                     <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
//                                     <div className="d-flex align-items-center justify-content-center">
//                                         <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="carousel-item">
//                             <img src={img2} className="img-fluid" alt="Image" />
//                             <div className="carousel-caption">
//                                 <div className="p-3" style={{ maxWidth: "900px" }}>
//                                     <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: "3px" }}>Explore The World</h4>
//                                     <h1 className="display-2 text-capitalize text-white mb-4">Find Your Perfect Tour At Travel</h1>
//                                     <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
//                                     <div className="d-flex align-items-center justify-content-center">
//                                         <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="carousel-item">
//                             <img src={img3} className="img-fluid" alt="Image" />
//                             <div className="carousel-caption">
//                                 <div className="p-3" style={{ maxWidth: "900px" }}>
//                                     <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: "3px" }}>Explore The World</h4>
//                                     <h1 className="display-2 text-capitalize text-white mb-4">You Like To Go?</h1>
//                                     <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
//                                     <div className="d-flex align-items-center justify-content-center">
//                                         <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
//                         <span className="carousel-control-prev-icon btn bg-primary" aria-hidden="false"></span>
//                         <span className="visually-hidden">Previous</span>
//                     </button>
//                     <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
//                         <span className="carousel-control-next-icon btn bg-primary" aria-hidden="false"></span>
//                         <span className="visually-hidden">Next</span>
//                     </button>
//                 </div>
//             </div>
//             <div className="container-fluid search-bar position-relative" style={{ top: "-50%", transform: "translateY(-50%)" }}>
//                 <div className="container">
//                     <div className="position-relative rounded-pill w-100 mx-auto p-5" style={{ background: "rgba(19, 53, 123, 0.8)" }}>
//                         <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand" />
//                         <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute me-2" style={{ top: "50%", right: "46px", transform: "translateY(-50%)" }}>Search</button>
//                     </div>
//                 </div>
//             </div>
//         </div>


//     </> 
//   )
// }

// export default Navbar

import React from 'react';
import { useEffect } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faRocket} from '@fortawesome/free-solid-svg-icons';

// import coa from './Assets/COA-agent-pic.png';
import {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
// import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
// import { faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const navbar = document.querySelector('.nav-color');
  //     if (window.scrollY > 50) {
  //       navbar.classList.add('opaque');
  //     } else {
  //       navbar.classList.remove('opaque');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Clean up the event listener on component unmount
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  return (
    <>
      
      <h6 className='place' style={{backgroundColor: 'black', color: 'white', textAlign: 'center', height:'60px'}}><FontAwesomeIcon icon={faEye} /><FontAwesomeIcon icon={faEye} />Our most exciting product launch yet &nbsp; <img className='logo' src='https://cdn.pixabay.com/photo/2014/04/03/11/58/rocket-312767_640.png' alt='sanity Logo' style={{ maxWidth: '30px', maxHeight: '30px' }} />&nbsp;Join us May8th for Sanity connect</h6>
       
        <nav className="navbar navbar-expand-lg navbar-light nav sticky-top nav-color ">
        <a className="navbar-brand" href="/">
       
    <span className='logo-span'>
   
    

      <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1zfGdFFnJuip_7-UgWhdj5Qc4Txl3WJIUOu_dq-pHw&s' alt='sanity Logo' style={{ maxWidth: '150px', maxHeight: '150px', marginLeft:'2rem' }} />
    </span>
  </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
        

    

            <ul className="navbar-nav mr-auto">

            <li className="nav-item dropdown active p-3">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  Product
                </a>
                <div class="dropdown-menu drop">
             <div class="row">
        <div class="col">
            <ul>
                <li><a class="dropdown-item" href="#">Sanity Studio</a></li>
                <li><p className='dropdown-item' href="#">Flexible editing environment</p></li>
                <li><a class="dropdown-item" href="#"></a>APIs</li>
                <li><a class="dropdown-item" href="#"></a>Content Lake</li>
                <li><a class="dropdown-item" href="#"></a>Backend</li>
            </ul>
        </div>
        <div class="col">
            <ul>
                <li><a class="dropdown-item" href="#">Features</a></li>
                <li><a class="dropdown-item" href="#">Real-time collaboration</a></li>
                <li><a class="dropdown-item" href="#">Precise content</a></li>
                <li><a class="dropdown-item" href="#">Localization</a></li>
                <li><a class="dropdown-item" href="#">AI Assist</a></li>
            </ul>
        </div>
    </div>
</div>

              </li>
              <li className="nav-item dropdown active p-3">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  Solutions
                </a>
                <div class="dropdown-menu drop">
             <div class="row">
        <div class="col">
            <ul>
                <li><a class="dropdown-item" href="#">Use Cases</a></li>
                <li><a class="dropdown-item" href="#">Marketing sites</a></li>
                <li><a class="dropdown-item" href="#">Products and services</a></li>
                <li><a class="dropdown-item" href="#">Mobile apps</a></li>
            </ul>
        </div>
        <div class="col">
            <ul>
                <li><a class="dropdown-item" href="#">Integrations</a></li>
                <li><a class="dropdown-item" href="#"> <img className="img-fluid bg-light p-1"style={{width:'30px', height:'30px'}} src="data:image/png;base64,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" alt="" />Shopify</a></li>
                <li><a class="dropdown-item" href="#"><img className="img-fluid bg-light p-1"style={{width:'30px', height:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaxvccJFzTUJIhDhuVY6W0xssuGtObjxuJ0CJDrH2e_A&s" alt="" />Vercel</a></li>
                <li><a class="dropdown-item" href="#"><img className="img-fluid bg-light p-1"style={{width:'30px', height:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaxvccJFzTUJIhDhuVY6W0xssuGtObjxuJ0CJDrH2e_A&s" alt="" />Algolia</a></li>
                <li><a class="dropdown-item" href="#"><img className="img-fluid bg-light p-1"style={{width:'30px', height:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaxvccJFzTUJIhDhuVY6W0xssuGtObjxuJ0CJDrH2e_A&s" alt="" />BigCommerce</a></li>
            </ul>
        </div>
    </div>
</div>

              </li>
              <li className="nav-item dropdown active p-3">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  developers
                </a>
                <div class="dropdown-menu drop">
             <div class="row">
        <div class="col">
        <ul>
                <li><a class="dropdown-item" href="#">Sanity Studio</a></li>
                <li><p className='dropdown-item' href="#">Flexible editing environment</p></li>
                <li><a class="dropdown-item" href="#"></a>APIs</li>
                <li><a class="dropdown-item" href="#"></a>Content Lake</li>
                <li><a class="dropdown-item" href="#"></a>Backend</li>
            </ul>
        </div>
        <div class="col">
            <ul>
                <li><a class="dropdown-item" href="#">Features</a></li>
                <li><a class="dropdown-item" href="#">Real-time collaboration</a></li>
                <li><a class="dropdown-item" href="#">Precise content</a></li>
                <li><a class="dropdown-item" href="#">Localization</a></li>
                <li><a class="dropdown-item" href="#">AI Assist</a></li>
            </ul>
        </div>
    </div>
</div>

              </li>
              <li className="nav-item dropdown active p-3">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  Resources
                </a>
                <div class="dropdown-menu drop">
             <div class="row">
        <div class="col">
        <ul>
                <li><a class="dropdown-item" href="#">Sanity Studio</a></li>
                <li><p className='dropdown-item' href="#">Flexible editing environment</p></li>
                <li><a class="dropdown-item" href="#"></a>APIs</li>
                <li><a class="dropdown-item" href="#"></a>Content Lake</li>
                <li><a class="dropdown-item" href="#"></a>Backend</li>
            </ul>
        </div>
        <div class="col">
            <ul>
                <li><a class="dropdown-item" href="#">Features</a></li>
                <li><a class="dropdown-item" href="#">Real-time collaboration</a></li>
                <li><a class="dropdown-item" href="#">Precise content</a></li>
                <li><a class="dropdown-item" href="#">Localization</a></li>
                <li><a class="dropdown-item" href="#">AI Assist</a></li>
            </ul>
        </div>
        <div class="col">
            <ul>
                <li><a class="dropdown-item" href="#">Features</a></li>
                <li><a class="dropdown-item" href="#">Real-time collaboration</a></li>
                <li><a class="dropdown-item" href="#">Precise content</a></li>
                <li><a class="dropdown-item" href="#">Localization</a></li>
                <li><a class="dropdown-item" href="#">AI Assist</a></li>
            </ul>
        </div>
        <div class="col">
            <ul>
                <li><a class="dropdown-item" href="#">Features</a></li>
                <li><a class="dropdown-item" href="#">Real-time collaboration</a></li>
                <li><a class="dropdown-item" href="#">Precise content</a></li>
                <li><a class="dropdown-item" href="#">Localization</a></li>
                <li><a class="dropdown-item" href="#">AI Assist</a></li>
            </ul>
        </div>
    </div>
</div>

              </li>
              
              
            
             
            
              <li className="">
                <a className="">
                 
                </a>
                <div class="">
             <div class="row">
        <div class="col">
            <ul>
               
            </ul>
        </div>
       
    </div>
</div>

              </li>
              <li className="">
                <a className="">
                 
                </a>
                <div class="">
             <div class="row">
        <div class="col">
            <ul>
               
            </ul>
        </div>
       
    </div>
</div>

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
  Login now
</a>

        </li>		
        <li className="">
                <a className="">
                 
                </a>
                <div class="">
             <div class="row">
        <div class="col">
            <ul>
               
            </ul>
        </div>
       
    </div>
</div>

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

<li className="">
                <a className="">
                 
                </a>
                <div class="">
             <div class="row">
        <div class="col">
            <ul>
               
            </ul>
        </div>
       
    </div>
</div>

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
            
           <ul>
        
           </ul>
          
           
           <div class="col carder">
          {/* <ul>
          <ul className="custom-list">
     <a className="dropdown-item" href="#">Contact sales</a>
    </ul>
                
                </ul> */}
          </div>
          
          
          </div>
          
        </nav>
      
    </>
  );
}

export default Navbar;

