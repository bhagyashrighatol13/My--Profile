import React from "react";

function Header(){
    return(
        <div>
      <div className="row">
       
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="profile.jpg" alt="rr" width="100"></img>
          </a>
       
            <span className="text-light">home</span>
            <span className="text-light">About</span>
            <span className="text-light">Portfolio</span>
            <span className="text-light">Contact</span>
            
        
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="portfolie.html">portfolie</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="block.html">block</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="services.html">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="Aboutme.html">AboutMe</a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
        </div>
      
        </div>
    )
}

export default Header;