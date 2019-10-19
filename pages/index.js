import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Back from '../components/background'
import Footer from '../components/footer'

const Home = () => (
  <div>
    <Head>
      <meta charset="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <title>MOH | portfolio </title>
      <meta name="description" content=""/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="robots" content="all,follow"/>
      {/* <!-- Bootstrap CSS--> */}
      <link rel="stylesheet" href="/static/vendor/bootstrap/css/bootstrap.min.css"/>
      {/* <!-- Font Awesome CSS--> */}
      <link rel="stylesheet" href="/static/vendor/font-awesome/css/font-awesome.min.css"/>
      {/* <!-- Google fonts - Roboto + Roboto Slab--> */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700%7CRoboto:400,700,300"/>
      {/* <!-- owl carousel--> */}
      <link rel="stylesheet" href="/static/vendor/owl.carousel/assets/owl.carousel.css"/>
      <link rel="stylesheet" href="/static/vendor/owl.carousel/assets/owl.theme.default.css"/>
      {/* <!-- animate.css--> */}
      <link rel="stylesheet" href="/static/vendor/animate.css/animate.css"/>
      {/* <!-- theme stylesheet--> */}
      <link rel="stylesheet" href="/static/css/style.default.css" id="theme-stylesheet"/>
      {/* <!-- Custom stylesheet - for your changes--> */}
      <link rel="stylesheet" href="/static/css/custom.css"/>
      {/* <!-- Leaflet CSS - For the map--> */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.4.0/leaflet.css"/>
      {/* <!-- Favicon--> */}
      <link rel="shortcut icon" href="/static/img/favicon.png" importance='low'/>
      {/* <title>Home</title> */}
      {/* <link rel='icon' href='/static/favicon.ico' importance='low' /> */}
    </Head>

    <Nav />
    <Back />
    <Footer />

   
    {/* <style jsx>{` 
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
     `}</style> */}
     <script src="/static/vendor/jquery/jquery.min.js"></script>
    <script src="/static/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="/static/vendor/jquery.cookie/jquery.cookie.js"> </script>
    <script src="/static/vendor/owl.carousel/owl.carousel.min.js"></script>
    <script src="/static/vendor/waypoints/lib/jquery.waypoints.min.js"></script>
    <script src="/static/vendor/jquery.counterup/jquery.counterup.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.4.0/leaflet.js"> </script>
    <script src="/static/js/front.js"></script>
  </div>
)

export default Home
