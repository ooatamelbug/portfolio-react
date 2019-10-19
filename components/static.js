import react from 'react';
import Link from 'next/link'


const Statistics = () => (
    
    <section id="statistics" data-dir="up" style={{background: "url(/static/img/parallax.jpg);"}} className="statistics-section text-white parallax parallax">
      <div className="container">
        <div className="row showcase text-center"> 
          <div data-animate="fadeInUp" className="col-lg-3 col-md-6">
            <div className="item">
              <div className="icon"><i className="fa fa-align-justify"></i></div>
              <h5 className="text-400 mt-4 text-uppercase"><span className="counter">120</span><br/>Websites</h5>
            </div>
          </div>
          <div data-animate="fadeInUp" className="col-lg-3 col-md-6">
            <div className="item">
              <div className="icon"><i className="fa fa-users"></i></div>
              <h5 className="text-400 mt-4 text-uppercase"><span className="counter">50</span><br/>Satisfied Clients</h5>
            </div>
          </div>
          <div data-animate="fadeInUp" className="col-lg-3 col-md-6">
            <div className="item">
              <div className="icon"><i className="fa fa-copy"></i></div>
              <h5 className="text-400 mt-4 text-uppercase"><span className="counter">320</span><br/>Projects</h5>
            </div>
          </div>
          <div data-animate="fadeInUp" className="col-lg-3 col-md-6">
            <div className="item">
              <div className="icon"><i className="fa fa-font"></i></div>
              <h5 className="text-400 mt-4 text-uppercase"><span className="counter">333</span><br/>Magazines and Brochures</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="dark-mask"></div>
    </section>
    
)

export default Statistics;