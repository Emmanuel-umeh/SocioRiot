import React from 'react'

export default class Login extends React.Component{
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
            <div>
  {/* Slider Area Start*/}
  {/* <div className="services-area">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <div className="section-tittle text-center mb-80">
            <span>Login</span>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  {/* Slider Area End*/}
  {/* ================ contact section start ================= */}
  <section className="contact-section">
    <div className="container">
      <div className="d-none d-sm-block mb-5 pb-4">
      </div>
      <div className="row">
        <div className="col-12">
          <h2 className="contact-title">LOGIN</h2>
        </div>
        <div className="col-lg-8">
          <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
            <div className="row">
              
              <div className="col-12">
                <div className="form-group">
                  <input 
                    className="form-control" 
                    name="email" 
                    id="email" 
                    type="email" 
                    onfocus="this.placeholder = ''" 
                    onblur="this.placeholder = 'Enter Email'" 
                    placeholder="Enter Email" 
                    ref = {(input) => this.email = input}
                    />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input 
                        className="form-control" 
                        name="password" 
                        id="password" 
                        type="password" 
                        onfocus="this.placeholder = ''" 
                        onblur="this.placeholder = 'Enter Password'" 
                        placeholder="Enter Password" />
                </div>
              </div>
              
            </div>
            <div className="form-group mt-3">
                <center>
              <button type="submit" className="button button-contactForm boxed-btn">Login</button>
              </center>
            </div>
          </form>
        </div>
        <div className="col-lg-3 offset-lg-1">
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-home" /></span>
            <div className="media-body">
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-tablet" /></span>
            <div className="media-body">
              <h3>+1 253 565 2365</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-email" /></span>
            <div className="media-body">
              <h3>support@colorlib.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ================ contact section end ================= */}
  {/* have-project Start*/}
  
  {/* have-project End */}
</div>

        )
    }
}