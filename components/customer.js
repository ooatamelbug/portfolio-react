import react from 'react';
import Link from 'next/link'
import CustomersChild from './components/childcustomer'

const data = {
    job:'skhkhf',
    name: 'akhsdklhs',
    desc: 'lasjflfslkn'
}
const Customers = () => (
    // <!-- Testimonials-->
    <section id="testimonials" className="testimonials-section bg-gray">
      <div className="container">
        <header className="text-center mb-2">
          <h2 data-animate="fadeInUp" className="title">My customers said<br/><span>about me</span></h2>
          <p data-animate="fadeInUp" className="lead">I am always glad to hear that my customers leave satisfied. Some of them shared with you their insights on our cooperation.</p>
        </header>
        <ul data-animate="fadeInUp" className="owl-carousel owl-theme testimonials equalize-height">
          <CustomersChild data={data} />
        </ul>
      </div>
    </section>
    
)

export default Customers;