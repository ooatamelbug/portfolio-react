import react from 'react';
import Link from 'next/link'
//import OwlCarousel from 'react-owl-carousel2';
import OwlCarousel from 'react-owl-carousel2';

const options = {
    items: 4,
    nav: true,
    rewind: true,
    autoplay: true,
    margin :10
};


class CustomersChild extends React.Component { 
    state = {
        name:'aksfjj'
    }
    render(){
        console.log(this.props.data);
    return (
        <OwlCarousel 
            ref="car"  options={options} >
        {
            this.props.data.map(dat =>{
            
           return(
               <li className="item">
                <div className="testimonial full-height">
                    <div className="text">
                    <p> {dat.quote} </p>
                </div>
                <div className="bottom">
                    <div className="icon"><i className="fa fa-quote-left"></i></div>
                        <div className="name-picture"><img alt="" src="/static/img/person-1.jpg"/>
                            <h5>{dat.name} </h5>
                            <p> {dat.job} </p>
                        </div>
                    </div>
                </div>
               </li>
            )
          })
        }
        <style jsx>{`
            .item{
                height:500px
            }

        `}</style>
        </OwlCarousel>
        )
    }
}


export default CustomersChild;
