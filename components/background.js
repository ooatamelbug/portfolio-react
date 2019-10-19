import react from 'react';
import Link from 'next/link'


const Back = () => (
    <section id="intro" className="intro-section pb-2">
        <div className="container text-center">
            <div data-animate="fadeInDown" className="logo"><img src="/static/img/logo-big.png" alt="logo" width="130"/></div>
            <h1 data-animate="fadeInDown" className="text-shadow mb-5">Hello, hola, नमस्ते !</h1>
            <p data-animate="slideInUp" className="h3 text-shadow text-400">I grind HTML and CSS and then weld them with PHP into beautiful and efficient websites.</p>
        </div>
        <style jsx>{`
            section {
                background: url(/static/img/home.jpg) center center no-repeat;
                background-size: cover;
            }
        `}</style>
    </section> 
)

export default Back;