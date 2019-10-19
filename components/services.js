import react from 'react';
import Link from 'next/link'


const Service = () => (
    <section id="services" className="bg-gradient services-section">
      <div className="container">
        <header className="text-center">
          <h2 data-animate="fadeInDown" className="title">Services</h2>
        </header>
        <div className="row services text-center">
          <div data-animate="fadeInUp" className="col-lg-4">
            <div className="icon"><i className="fa fa-search"></i></div>
            <h3 className="heading mb-3 text-400">Consulting</h3>
            <p className="text-left description">On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness waiting regular led ham.</p>
          </div>
          <div data-animate="fadeInUp" className="col-lg-4">
            <div className="icon"><i className="fa fa-html5"></i></div>
            <h3 className="heading mb-3 text-400">HTML coding</h3>
            <p className="text-left description">Manor we shall merit by chief wound no or would. Oh towards between subject passage sending mention or it. Sight happy do burst fruit to woody begin at. Assurance perpetual he in oh determine as.</p>
          </div>
          <div data-animate="fadeInUp" className="col-lg-4">
            <div className="icon"><i className="fa fa-tachometer"></i></div>
            <h3 className="heading mb-3 text-400">PHP webdelopment</h3>
            <p className="text-left description">Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh. Luckily cheered colonel me do we attacks on highest enabled. Tried law yet style child. Bore of true of no be deal.</p>
          </div>
        </div>
        <hr data-animate="fadeInUp"/>
        <div data-animate="fadeInUp" className="text-center">
          <p className="lead">Would you like to know more or just discuss something?</p>
          <p><a href="#contact" className="btn btn-outline-light link-scroll">Contact me</a></p>
        </div>
      </div>
    </section>
    
)

export default Service;