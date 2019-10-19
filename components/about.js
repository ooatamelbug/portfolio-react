import react from 'react';
import Link from 'next/link'


const About = () => (
    <section id="about" className="about-section">
    <div className="container">
      <header className="text-center">
        <h2 data-animate="fadeInDown" className="title">About me</h2>
      </header>
      <div className="row">
        <div data-animate="fadeInUp" className="col-lg-6">
          <p>An sincerity so extremity he additions. Her yet <strong>there truth merit</strong>. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law.</p>
          <p>Received overcame oh sensible so at an. Formed do change merely to county it. <strong>Am separate contempt</strong> domestic to to oh. On relation my so addition branched. Put hearing cottage she norland letters equally prepare too. Replied exposed savings he no viewing as up. Soon body add him hill. No father living really people estate if. Mistake do produce beloved demesne if am pursuit.</p>
          <p>An sincerity so extremity he additions. Her yet <strong>there truth merit</strong>. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law.</p>
        </div>
        <div data-animate="fadeInUp" className="col-lg-6">
          <div className="skill-item">
            <div className="progress-title">PHP</div>
            <div className="progress">
              <div role="progressbar" style={{width: "60%"}} aria-valuenow="0" aria-valuemin="60" aria-valuemax="100" className="progress-bar progress-bar-skill1"></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="progress-title">Javascript</div>
            <div className="progress">
              <div role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="60" aria-valuemax="100" className="progress-bar progress-bar-skill2"></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="progress-title">HTML coding</div>
            <div className="progress">
              <div role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-skill3"></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="progress-title">SEO</div>
            <div className="progress">
              <div role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-skill4"></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="progress-title">SEM</div>
            <div className="progress">
              <div role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-skill5"></div>
            </div>
          </div>
        </div>
        <div data-animate="fadeInUp" className="col-sm-6 mx-auto mt-5"><img src="/static/img/about.jpg" alt="This is me - IT worker" className="image rounded-circle img-fluid"/></div>
      </div>
    </div>
  </section>
  
)

export default About;