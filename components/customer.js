import react from 'react';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import axios from 'axios'
import CustomersChild from './components/childcustomer'

class Customers extends React.Component {
  state = {
    data : []
  }
  componentWillMount(){
  axios.get('http://localhost:8000/api/customer/')
  .then(data =>{
    // console.log(data.data);
    this.setState({
      data :data.data
    })
    console.log(this.state.data);
  })
}
render(){
  return  (
  
    // <!-- Testimonials-->
    <section id="testimonials" className="testimonials-section bg-gray">
      <div className="container">
        <header className="text-center mb-2">
          <h2 data-animate="fadeInUp" className="title">My customers said<br/><span>about me</span></h2>
          <p data-animate="fadeInUp" className="lead">I am always glad to hear that my customers leave satisfied. Some of them shared with you their insights on our cooperation.</p>
        </header>
           
          
      <CustomersChild data={this.state.data} />
      </div>
    </section>
    
)
        }
      }

export default Customers;