import react, { useState,Component } from 'react';
import Link from 'next/link'


class Contact extends  Component {
    state ={
        name : '',
        email : '',
        subject :'',
        message : ''
    }
    handelSumbmit(e){
        e.preventDefault();
        console.log(this.state.message);
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.subject);
    }
    handelNameChange(e){
        console.log();
        this.setState({
            name:e.target.value
        })
    }
    handelEmailChange(e){
        this.setState({
            email:e.target.value
        })
    }
    handelMessageChange(e){
        this.setState({
            message:e.target.value
        })
    }
    
    handelSubjectChange(e){
        this.setState({
            subject:e.target.value
        })
    }
    render(){
    return (
    <section id="contact" data-animate="bounceIn" className="contact-section contact">
      <div className="container">
        <header className="text-center">
          <h2 className="title">Contact me</h2>
        </header>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <form id="contact-form" autoComplete="off" onSubmit={this.handelSumbmit} >
              <div className="messages"></div>
              <div className="controls">          
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" name="name"  placeholder="Your firstname *" required="required" onChange={ event => this.handelNameChange(event) } className="form-control"/>
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="email" placeholder="Your email *" required="required" onChange={ event => this.handelEmailChange(event)} className="form-control"/>
                  </div>
                  <div className="col-md-12">
                    <input type="text" name="subject" placeholder="Subject *" required="required" onChange={ event =>  this.handelSubjectChange(event)} className="form-control"/>
                  </div>
                  
                  <div className="col-md-12">
                    <textarea name="message" placeholder="Message for me *" rows="4" required="required" onChange={event => this.handelMessageChange(event)} className="form-control"></textarea>
                  </div>
                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-outline-primary">Send message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
}
}

export default Contact;