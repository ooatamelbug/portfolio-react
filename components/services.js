import react from 'react';
import Link from 'next/link'
import axios from 'axios'
import ServiceChild from './components/childservece'
class Service extends React.Component {
  state = {
    data : []
  }
  componentDidMount(){
    axios.get('http://localhost:8000/api/service/')
    .then(data =>{
      // console.log(data.data);
      this.setState({
        data :data.data
      })
    })
  }
  render(){
    return(
      <section id="services" className="bg-gradient services-section">
      <div className="container">
        <header className="text-center">
          <h2 data-animate="fadeInDown" className="title">Services</h2>
        </header>
        <div className="row services text-center">
        
          {
            this.state.data.map(({id,title,desc,awesome}) =>{
              return <ServiceChild key={id} title={title} awesome={awesome} desc={desc} />
            })
          }
          
      </div>
      <hr data-animate="fadeInUp"/>
        <div data-animate="fadeInUp" className="text-center">
          <p className="lead">Would you like to know more or just discuss something?</p>
          <p><a href="#contact" className="btn btn-outline-light link-scroll">Contact me</a></p>
          </div>
      </div>
    </section>
    
    )
  }
} 

export default Service;