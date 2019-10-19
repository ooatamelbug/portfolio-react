import react from 'react';
import Link from 'next/link'


const Work = () => (
    <section id="references">
      <div className="container">
        <div className="col-sm-12">
          <div className="mb-5 text-center">
            <h2 data-animate="fadeInUp" className="title">My work</h2>
            <p data-animate="fadeInUp" className="lead">I have worked on dozens of projects so I have picked only the latest for you.</p>
          </div>
          <ul id="filter" data-animate="fadeInUp">
            <li className="active"><a href="#" data-filter="all">All</a></li>
            <li><a href="#" data-filter="webdesign">Webdesign</a></li>
            <li><a href="#" data-filter="seo">SEO</a></li>
            <li><a href="#" data-filter="marketing">Marketing</a></li>
            <li><a href="#" data-filter="other">Other</a></li>
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
                  <div data-category="webdesign" className="reference-item col-lg-3 col-md-6">
                    <div className="reference"><a href="#"><img src="/static/img/portfolio-1.jpg" alt="" className="img-fluid"/>
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">Project name</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg" className="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p className="buttons text-center"><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
                  <div data-category="seo" className="reference-item col-lg-3 col-md-6">
                    <div className="reference"><a href="#"><img src="/static/img/portfolio-2.jpg" alt="" className="img-fluid"/>
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">Project name 2</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider3.jpg,img/main-slider1.jpg" className="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p className="buttons text-center"><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
                  <div data-category="marketing" className="reference-item col-lg-3 col-md-6">
                    <div className="reference"><a href="#"><img src="/static/img/portfolio-3.jpg" alt="" className="img-fluid"/>
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">Project name 3</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg" className="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p className="buttons text-center"><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
                  <div data-category="marketing" className="reference-item col-lg-3 col-md-6">
                    <div className="reference"><a href="#"><img src="/static/img/portfolio-4.jpg" alt="" className="img-fluid"/>
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">Project name 4</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg" className="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p className="buttons text-center"><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
                  <div data-category="webdesign" className="reference-item col-lg-3 col-md-6">
                    <div className="reference"><a href="#"><img src="/static/img/portfolio-5.jpg" alt="" className="img-fluid"/>
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">Project name 5</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg" className="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p className="buttons text-center"><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
                  <div data-category="other" className="reference-item col-lg-3 col-md-6">
                    <div className="reference"><a href="#"><img src="/static/img/portfolio-6.jpg" alt="" className="img-fluid"/>
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">Project name 6</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg" className="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p className="buttons text-center"><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
                  <div data-category="seo" className="reference-item col-lg-3 col-md-6">
                    <div className="reference"><a href="#"><img src="/static/img/portfolio-7.jpg" alt="" className="img-fluid"/>
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">Project name</h3>
                            <p>Short project description goes here...</p>
                          </div>
                        </div></a>
                      <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg" className="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p className="buttons text-center"><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
                  <div data-category="webdesign" className="reference-item col-lg-3 col-md-6">
                    <div className="reference">
                        <a href="#">
                            <img src="/static/img/portfolio-8.jpg" alt="" className="img-fluid"/>
                            <div className="overlay">
                                <div className="inner">
                                    <h3 className="h4 reference-title">Project name</h3>
                                    <p>Short project description goes here...</p>
                                </div>
                            </div>
                        </a>
                      <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg" className="sr-only reference-description">
                        <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                        <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                        <p className="buttons text-center"><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-download"></i> Download case study</a></p>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- Customers-->
    
    
)

export default Work;