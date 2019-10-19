import react from 'react';
import Link from 'next/link'


const CustomersChild = (props) => (
    <li className="item">
        <div className="testimonial full-height">
            <div className="text">
            <p> {{props.data.desc}} </p>
            </div>
            <div className="bottom">
            <div className="icon"><i className="fa fa-quote-left"></i></div>
            <div className="name-picture"><img alt="" src="/static/img/person-1.jpg"/>
                <h5>{{props.data.name}} </h5>
                <p> {{props.data.job}} </p>
            </div>
            </div>
        </div>
    </li>
)


export default CustomersChild;
