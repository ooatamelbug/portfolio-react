import React from 'react'
import Link from 'next/link'

// const links = [
//   { href: 'https://zeit.co/now', label: 'ZEIT' },
//   { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`
//   return link
// })

const Nav = () => (

  <header className="header">
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container"><a href="#intro" className="navbar-brand scrollTo">IT Worker</a>
      <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><span className="fa fa-bars"></span></button>
      <div id="navbarcollapse" className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><a href="#intro" className="nav-link link-scroll">Intro</a></li>
          <li className="nav-item"><a href="#about" className="nav-link link-scroll">About</a></li>
          <li className="nav-item"><a href="#services" className="nav-link link-scroll">Services</a></li>
          <li className="nav-item"><a href="#testimonials" className="nav-link link-scroll">Testimonials</a></li>
          <li className="nav-item"><a href="#references" className="nav-link link-scroll">My work</a></li>
          <li className="nav-item"><a href="#customers" className="nav-link link-scroll">Clients</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link link-scroll">Contact</a></li>
        </ul>
      </div>
    </div>


    {/* <style jsx>{` 
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
     `}</style> */}
  </nav>
  </header>
)

export default Nav
