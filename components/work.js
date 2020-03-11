import react from 'react';
import Link from 'next/link'
import axios from 'axios'
import WorkChild from './components/chlidwork'

class Work extends React.Component {
    state = {
        data: [],
        datatype:[]
    }
    componentDidMount(){
        
        axios.get('http://localhost:8000/api/type/')
        .then(data=>{
           this.setState({
               datatype :data.data
           }) 
        })
        axios.get('http://localhost:8000/api/work/')
        .then(data=>{
           this.setState({
               data :data.data
           }) 
        })
    }
    
    render(){
        return(
                <section id="references">
                  <div className="container">
                    <div className="col-sm-12">
                      <div className="mb-5 text-center">
                        <h2 data-animate="fadeInUp" className="title">My work</h2>
                        <p data-animate="fadeInUp" className="lead">I have worked on dozens of projects so I have picked only the latest for you.</p>
                      </div>
                      <ul id="filter" data-animate="fadeInUp">
                        <li className="active"><a href="#" data-filter="all">All</a></li>
                        {/*
                            this.state.datatype.map(({id,name,slug})=>{
                                return <li key={id} ><a href="#" data-filter="webdevelp" >{  name }</a></li>                                    
                            })
                        */}
                            <li ><a href="#" data-filter="webdevelp">Web Development</a></li>
                            <li ><a href="#" data-filter="system">System</a></li>
                            <li ><a href="#" data-filter="webdesign">Web Desgin</a></li>

                      </ul>
                      <div id="detail">
                        <div className="row">
                          <div className="col-lg-10 mx-auto"><span className="close">×</span>
                            <div id="detail-slider" className="owl-carousel owl-theme"></div>
                            <div className="text-center">
                              <h1 id="detail-title" className="title"></h1>
                            </div>
                            <div id="detail-content"></div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Reference detail--> */}
                      <div id="references-masonry" data-animate="fadeInUp">
                        <div className="row">
                            {
                                this.state.data.map(({link,image,title,desc,id,type,technology})=>{
                                    
                                    return <WorkChild key={id} link={link} image={image} title={title} technology={technology} desc={desc} type={type} id={id} />    
                                })
                            }
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                // <!-- Customers-->


            )
    }
}

export default Work;