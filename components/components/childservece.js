import react from 'react';
import Link from 'next/link'


const ServiceChild = (props) => (
    <div data-animate="fadeInUp" className="col-lg-4 animated fadeInUp">
        <div className="icon"><i className={"fa fa-"+props.awesome}></i></div>
        <h3 className="heading mb-3 text-400">{props.title}</h3>
        <p className="text-left description">{props.desc}</p>
    </div>
)


export default ServiceChild;
