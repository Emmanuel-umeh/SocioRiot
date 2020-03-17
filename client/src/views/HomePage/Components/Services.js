import React from 'react'

export default class Services extends React.Component{

  constructor(props){
    super(props)
  }
    
  componentDidMount() {
  
    this.props.showLoader()
   
    setTimeout(() => {
      // fetch("https://jsonplaceholder.typicode.com/posts")
      // .then(response => response.json())
       this.props.showLoader();
      }, 1200);
  }
    render(){




        return(

            <main>
  {/* Slider Area Start*/}
  <div className="services-area">
    <div className="container">
      {/* Section-tittle */}
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <div className="section-tittle text-center mb-80">
            <span>Services</span>
            <h2>What We Will Do For Your Business​</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Slider Area End*/}
  {/* What We do start*/}
  <div className="what-we-do">
    <div className="container">
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
        </div> <div className="col-lg-4 col-md-6">
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
          <div className="single-do text-center mb-30">
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
  {/* Generating Start */}
  <div className="generating-area visite-padding2">
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