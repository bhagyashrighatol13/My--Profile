import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Myprofile.css";
import Footer from "./Footer";
import Header from "./Header";
import "./Header.css";

function MyProfile() {
  return (
    <div>
    <Header></Header>

      <div className="bg-dark">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                className="d-block w-100"
                src="https://i.pinimg.com/originals/02/95/8e/02958e86e8fcd155e54cdb9af1e3f956.gif"
                alt="First slide"
              ></img>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="" alt="Second slide"></img>
            </div>
          </div>
        </div>
      </div>


      <div className="row-responsive bg-dark">
        <div className="col-6-responsive">
          <center>
            <img
              src="Aboutme2.jpg"
              alt="img1"
              width="23%"
              className="img1"
            ></img>
          </center>
        </div>

       <div className="col-6-responsive">
          <span>
            <center>
              <h1 className="text-light" style={{ fontSize: "3.3rem" }}>
               <u>About Me</u>
              </h1>
            </center>
          </span>
          <p
            className="text-light"
            style={{ textAlign: "center", padding: "2%" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            blanditiis, quibusdam ratione delectus numquam at ipsa dignissimos
            neque esse, sapiente obcaecati qui commodi error laborum provident a
            repudiandae sunt earum?Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Nulla possimus, quia ex fuga et consectetur?
            Obcaecati nobis necessitatibus blanditiis totam saepe dolor in
            quaerat assumenda dolores vitae perspiciatis, voluptatibus facilis.
          </p>
        </div>
        
          <div className="row">
            <div className="col-3"></div>
        <div className="col-2 text-light exp">Skill
        <br></br><p id="HiddenText">Web Dev (Web service)</p></div>
          <div className="col-2 text-light exp">Experience
          <br></br><p id="HiddenText">2022-current in Web developer</p></div>
          <div className="col-2 text-light exp" style={{paddingLeft:"25px"}}>Education
          <br></br><p id="HiddenText">2022 Graduated form PRPCEM,Amravati</p></div>
          </div>
           

         <div className="col-12 mt-4">
          <center>
            <h1 style={{ fontSize: "3.3rem" }} className="text-light">
              <u>My Services</u>
            </h1>
          </center>
        </div>
        <div className="col-12 mt-2">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div className="card card-small">
                  <div>
                    <center>
                      <div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/711/711284.png"
                          height="90px"
                          alt="icon"
                        ></img>
                      </div>
                    </center>
                  </div>
                  <div className="card-info">
                    <span>
                      <center>
                        <h1>Web Design</h1>
                      </center>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores corporis autem vero, in tempore ea veritatis
                      sit officia repellat vel expedita animi laborum itaque,
                      cumque commodi odio id est velit?
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div className="card card-small  ">
                  <div>
                    <center>
                      <div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/4543/4543432.png"
                          height="90px"
                          alt="icon"
                        ></img>
                      </div>
                    </center>
                  </div>
                  <div className="card-info">
                    <span>
                      <center>
                        <h1>Live Project</h1>
                      </center>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores corporis autem vero, in tempore ea veritatis
                      sit officia repellat vel expedita animi laborum itaque,
                      cumque commodi odio id est velit?
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div className="card card-small  ">
                  <div>
                    <center>
                      <div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/8448/8448908.png"
                          height="90px"
                          alt="icon"
                        ></img>
                      </div>
                    </center>
                  </div>
                  <div className="card-info">
                    <span>
                      <center>
                        <h1>UI design</h1>
                      </center>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores corporis autem vero, in tempore ea veritatis
                      sit officia repellat vel expedita animi laborum itaque,
                      cumque commodi odio id est velit?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 

        <div className="col-12 mt-5">
          <center>
            <h1 style={{ fontSize: "3.3rem" }} className="text-light">
              <u>My Portfolio</u>
            </h1>
          </center>
        </div>


        <div className="col-12 mt-2">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div className="Portfolio card-small">
                  <div>
                    <center>
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRiRirW5ah6tJhL0cgQsAvHPibqjc-AFcEw&usqp=CAU"
                          height="90px"
                          alt="icon"
                        ></img>
                      </div>
                    </center>
                  </div>
               
                </div>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div className="Portfolio card-small  ">
                  <div>
                    <center>
                      <div>
                        <img
                          src="https://cdn.1eightydigital.com/wp-content/uploads/social-media-notifications-960x640.jpg"
                          height="90px"
                          alt="icon"
                        ></img>
                      </div>
                    </center>
                  </div>
                
                </div>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div className="Portfolio card-small  ">
                  <div>
                    <center>
                      <div>
                        <img
                          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaCUyMGJsb2d8ZW58MHx8MHx8&w=1000&q=80"
                          height="90px"
                          alt="icon"
                        ></img>
                      </div>
                    </center>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="col-12 mt-0">
          <center>
            <h1 style={{ fontSize: "3.3rem" }} className="text-light">
              <u>Contact Me</u>
            </h1>
          </center>
        </div>

      <Footer></Footer>

      </div>


      <div >
		<div className="mt-0">
			<div className="row footer">
				<div className="col-12">
					<div className="copyright_text text-light">
					<center><h5>Copyright &copy; 2022| Made With <img src="https://cdn-icons-png.flaticon.com/128/2589/2589175.png" width="2%"></img>By Bhagyashri Ghatol.</h5></center>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  );
}
export default MyProfile;
