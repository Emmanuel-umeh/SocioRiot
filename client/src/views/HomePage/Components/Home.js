import React from 'react'

export default class HomePage extends React.Component{
    // state = {}
    render(){
        return(

            <main>
  {/* Slider Area Start*/}
  <div className="slider-area ">
    <div className="slider-active">
      
      <div className="single-slider slider-height d-flex align-items-center" data-background="assets/img/hero/h1_hero.png">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-7 col-md-9 ">
              <div className="hero__caption">
                <h1 data-animation="fadeInLeft" data-delay=".4s">We Collect<br /> High Quality Leads</h1>
                <p data-animation="fadeInLeft" data-delay=".6s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravi.</p>
                {/* Hero-btn */}
                <div className="hero__btn" data-animation="fadeInLeft" data-delay=".8s">
                  <a href="industries.html" className="btn hero-btn">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero__img d-none d-lg-block" data-animation="fadeInRight" data-delay="1s">
                <img src="assets/img/hero/hero_right.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Slider Area End*/}
  {/* What We do start*/}
  <div className="what-we-do we-padding">
    <div className="container">
      {/* Section-tittle */}
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <div className="section-tittle text-center">
            <h2>What We Will Do For Your Business​</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-do text-center mb-30">
            <div className="do-icon">
              <span className="flaticon-tasks" />
            </div>
            <div className="do-caption">
              <h4>Link Building</h4>
              <p>Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse!</p>
            </div>
            <div className="do-btn">
              <a href="#"><i className="ti-arrow-right" /> get started</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-do active text-center mb-30">
            <div className="do-icon">
              <span className="flaticon-social-media-marketing" />
            </div>
            <div className="do-caption">
              <h4>Content marketing</h4>
              <p>Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse!</p>
            </div>
            <div className="do-btn">
              <a href="#"><i className="ti-arrow-right" /> get started</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-do text-center mb-30">
            <div className="do-icon">
              <span className="flaticon-project" />
            </div>
            <div className="do-caption">
              <h4>On Page SEO</h4>
              <p>Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse!</p>
            </div>
            <div className="do-btn">
              <a href="#"><i className="ti-arrow-right" /> get started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* What We do End*/}
  {/* We Create Start */}
  <div className="we-create-area create-padding">
    <div className="container">
      <div className="row d-flex align-items-end">
        <div className="col-lg-6 col-md-12">
          <div className="we-create-img">
            <img src="assets/img//service/we-create.png" alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="we-create-cap">
            <h3>We Create a Steps to Build a Successful Digital Product</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis orem ipsum dolor sit amet, consectetur adipiscing.</p>
            <a href="#" className="btn">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* We Create End */}
  {/* Generating Start */}
  <div className="generating-area ">
    <div className="container">
      {/* Section-tittle */}
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <div className="section-tittle text-center">
            <h2>Generating New Customers Via Online Mode​​</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="single-generating d-flex mb-30">
            <div className="generating-icon">
              <span className="flaticon-chart" />
            </div>
            <div className="generating-cap">
              <h4>All Sizes Business</h4>
              <p>Seddo eiusmod tempor incididunt labore lore magna aliqua uisipsum suspendis incididun
                se ultrices gravida. </p>
            </div>
          </div>
        </div> 
        <div className="col-lg-6 col-md-6">
          <div className="single-generating d-flex mb-30">
            <div className="generating-icon">
              <span className="flaticon-social-media-marketing" />
            </div>
            <div className="generating-cap">
              <h4>Awesome Results</h4>
              <p>Seddo eiusmod tempor incididunt labore lore magna aliqua uisipsum suspendis incididun
                se ultrices gravida. </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="single-generating d-flex mb-30">
            <div className="generating-icon">
              <span className="flaticon-speaker" />
            </div>
            <div className="generating-cap">
              <h4>Keep you in the Loop</h4>
              <p>Seddo eiusmod tempor incididunt labore lore magna aliqua uisipsum suspendis incididun
                se ultrices gravida. </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="single-generating d-flex mb-30">
            <div className="generating-icon">
              <span className="flaticon-growth" />
            </div>
            <div className="generating-cap">
              <h4>Significant ROI</h4>
              <p>Seddo eiusmod tempor incididunt labore lore magna aliqua uisipsum suspendis incididun
                se ultrices gravida. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Generating End */}
  {/*Choose Best start*/}
  <div className="choose-best choose-padding">
    <div className="container">
      {/* Section-tittle */}
      <div className="row d-flex justify-content-center">
        <div className="col-lg-7">
          <div className="section-tittle text-center">
            <h2>Choose Your Very Best Pricing Plan </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-choose text-center mb-30">
            <div className="do-icon">
              <span className="flaticon-growth" />
            </div>
            <div className="do-caption">
              <h4>$ 05.00</h4>
              <ul>
                <li>Increase traffic 50%</li>
                <li>Social Media Marketing</li>
                <li>10 Free Optimization</li>
                <li>24/7  support</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-choose active text-center mb-30">
            <div className="do-icon">
              <span className="flaticon-award" />
            </div>
            <div className="do-caption">
              <h4>$ 20.00</h4>
              <ul>
                <li>Increase traffic 50%</li>
                <li>Social Media Marketing</li>
                <li>10 Free Optimization</li>
                <li>24/7  support</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-choose text-center mb-30">
            <div className="do-icon">
              <span className="flaticon-project" />
            </div>
            <div className="do-caption">
              <h4>$ 30.00</h4>
              <ul>
                <li>Increase traffic 50%</li>
                <li>Social Media Marketing</li>
                <li>10 Free Optimization</li>
                <li>24/7  support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Choose Best do End*/}
  {/* Visit Stuffs Start */}
  <div className="visit-area fix visite-padding">
    <div className="container">
      {/* Section-tittle */}
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 pr-0">
          <div className="section-tittle text-center">
            <h2>Visit Some Of Our Awsome Stuffs</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid p-0">
      <div className="row ">
        <div className="col-lg-3 col-md-4">
          <div className="single-visited mb-30">
            <div className="visited-img">
              <img src="assets/img/visit/visit_1.jpg" alt="" />
            </div>
            <div className="visited-cap">
              <h3><a href="#">citmv.com</a></h3>
              <p>Email Marketing</p>
            </div>
          </div>
        </div> 
        <div className="col-lg-3 col-md-4">
          <div className="single-visited mb-30">
            <div className="visited-img">
              <img src="assets/img/visit/visit_2.jpg" alt="" />
            </div>
            <div className="visited-cap">
              <h3><a href="#">mvsp.net</a></h3>
              <p>Email Marketing</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="single-visited mb-30">
            <div className="visited-img">
              <img src="assets/img/visit/visit_3.jpg" alt="" />
            </div>
            <div className="visited-cap">
              <h3><a href="#">dmcal.co</a></h3>
              <p>Email Marketing</p>
            </div>
          </div>
        </div> 
        <div className="col-lg-3 col-md-4">
          <div className="single-visited mb-30">
            <div className="visited-img">
              <img src="assets/img/visit/visit_4.jpg" alt="" />
            </div>
            <div className="visited-cap">
              <h3><a href="#">dmco.net</a></h3>
              <p>Email Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Visit Stuffs Start */}
  {/* Testimonial Start */}
  <div className="testimonial-area">
    <div className="container">
      <div className="testimonial-main">
        {/* Section-tittle */}
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5  col-md-8 pr-0">
            <div className="section-tittle text-center">
              <h2>What Client Say About Us</h2>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10 col-md-9">
            <div className="h1-testimonial-active">
              {/* Single Testimonial */}
              <div className="single-testimonial text-center">
                <div className="testimonial-caption ">
                  <div className="testimonial-top-cap">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                  </div>
                  {/* founder */}
                  <div className="testimonial-founder d-flex align-items-center justify-content-center">
                    <div className="founder-img">
                      <img src="assets/img/testmonial/testimonial.png" alt="" />
                    </div>
                    <div className="founder-text">
                      <span>Oliva jems</span>
                      <p>UIX designer</p>
                    </div>
                  </div>
                </div>
              </div>{/* Single Testimonial */}
              <div className="single-testimonial text-center">
                <div className="testimonial-caption ">
                  <div className="testimonial-top-cap">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                  </div>
                  {/* founder */}
                  <div className="testimonial-founder d-flex align-items-center justify-content-center">
                    <div className="founder-img">
                      <img src="assets/img/testmonial/testimonial.png" alt="" />
                    </div>
                    <div className="founder-text">
                      <span>Oliva jems</span>
                      <p>UIX designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
  {/* Tips Triks Start */}
  <div className="tips-triks-area tips-padding">
    <div className="container">
      {/* Section-tittle */}
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 col-md-8 pr-0">
          <div className="section-tittle text-center">
            <h2>Tips and Tricks From Our Exparts</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="single-tips mb-50">
            <div className="tips-img">
              <img src="assets/img/tips/tips_1.jpg" alt="" />
            </div>
            <div className="tips-caption">
              <h4><a href="#">Twice profit than before you ever got</a></h4>
              <span>Continue Reading</span>
              <p>March 3, 2020</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="single-tips mb-50">
            <div className="tips-img">
              <img src="assets/img/tips/tips_2.jpg" alt="" />
            </div>
            <div className="tips-caption">
              <h4><a href="#">Twice profit than before you ever got</a></h4>
              <span>Continue Reading</span>
              <p>March 3, 2020</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="single-tips mb-50">
            <div className="tips-img">
              <img src="assets/img/tips/tips_3.jpg" alt="" />
            </div>
            <div className="tips-caption">
              <h4><a href="#">Twice profit than before you ever got</a></h4>
              <span>Continue Reading</span>
              <p>March 3, 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Tips Triks End */}
  {/* have-project Start*/}
  <div className="have-project">
    <div className="container">
      <div className="haveAproject" data-background="assets/img/team/have.jpg">
        <div className="row d-flex align-items-center">
          <div className="col-xl-7 col-lg-9 col-md-12">
            <div className="wantToWork-caption">
              <h2>Have project in mind?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut.</p>
            </div>
          </div>
          <div className="col-xl-5 col-lg-3 col-md-12">
            <div className="wantToWork-btn f-right">
              <a href="#" className="btn btn-ans">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* have-project End */}
</main>

        )
    }
}