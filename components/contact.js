import react from 'react';
import Link from 'next/link'


const Contact = () => (
    <section id="contact" data-animate="bounceIn" className="contact-section contact">
      <div className="container">
        <header className="text-center">
          <h2 className="title">Contact me</h2>
        </header>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <form id="contact-form" method="post" action="">
              <div className="messages"></div>
              <div className="controls">
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" name="name" placeholder="Your firstname *" required="required" className="form-control"/>
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="surname" placeholder="Your lastname *" required="required" className="form-control"/>
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="email" placeholder="Your email *" required="required" className="form-control"/>
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="phone" placeholder="Your phone" className="form-control"/>
                  </div>
                  <div className="col-md-12">
                    <textarea name="message" placeholder="Message for me *" rows="4" required="required" className="form-control"></textarea>
                  </div>
                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-outline-primary">Send message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    
)

export default Contact;