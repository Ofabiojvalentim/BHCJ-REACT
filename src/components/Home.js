import React , { Fragment } from 'react'

const Home = () => (
  <>
    <div className="d-flex justify-content-center ">
      <div id="main_carousel" className="carousel slide custom-carousel" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner rounded">

          <div className="carousel-item active">
            <img className="d-block w-100" src="img/carrosel/1.jpg" alt="First slide"/>
              <div className="carousel-caption d-none d-md-block">
                <h2>Survaillance</h2>
                <p>Using almost 20 years of experince we make valuable projects with competitive price to your business</p>
              </div>
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src="img/carrosel/2.jpg" alt="Second slide"/>
              <div className="carousel-caption d-none d-md-block">
                <h2>Cyber Security</h2>
                <p>Keep your persornal or enterprise computer safe against cyber attacks and zero-day exploits</p>
              </div>
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src="img/carrosel/3.jpg" alt="Third slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h2>Data Center</h2>
              <p>Your database, applications, userdata all are protected in our top level datacenters</p>
            </div>
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src="img/carrosel/4.jpg" alt="Four slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h2>Network Cabling</h2>
              <p>Using all best practices and compliances, we build most valuabel Network Cable System</p>
            </div>
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src="img/carrosel/5.jpeg" alt="Five slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h2>Network Managment</h2>
              <p>Keep all your assets updated, managed and secure with our proactive Networ management system</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#main_carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#main_carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </div>
  </>
  )

export default Home;
