import React from "react";
// import logo from './logo.svg';
// import './App.css';
import { connect } from "react-redux";
import store from "./store";
// import {withRouter} from 'react-router-dom'
import HomePage from "./views/HomePage/Components/Home";
import {
  Route,
  NavLink, 
  Link,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import About from "./views/HomePage/Components/About";
import Services from "./views/HomePage/Components/Services";
import ContactUs from "./views/HomePage/Components/ContactUs";
import Login from "./views/HomePage/Components/Login"
import Signup from "./views/HomePage/Components/Signup"
import Successful from "./views/HomePage/Components/loggIn";
import {clearErrors} from './actions/errorActions'
import { loadUser, logout } from "./actions/authActions";

import Aux from "./hoc/Aux"
class App extends React.Component {

state = {
  visible : false,
  user : null
}
showLoader = () =>{
  this.setState({
    visible : !this.state.visible
  })
}

logOut = () =>{
this.props.logout()
}

// componentDidMount(){
//   const { user, isAuthenticated, token } = this.props.auth;

//   if(user || isAuthenticated){
//     this.setState({
//       user : user
//     })
//   }

// }
componentDidMount() {

  store.dispatch(loadUser());

}


  render() {

    
    const { isAuthenticated, user } = this.props.auth;
    console.log("is authenticated app.js ", isAuthenticated)
    console.log("user details ", user)

    return (
      <div>
{this.state.visible ?
<div id="preloader-active">
  <div className="preloader d-flex align-items-center justify-content-center">
    <div className="preloader-inner position-relative">
      <div className="preloader-circle" />
      <div className="preloader-img pere-text">
        <img src="assets/img/logo/logo.png" alt="" />
      </div>
    </div>
  </div>
</div>
: null
}


        <Router>
          <header>

          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/">
                          <img src="assets/img/logo/logo.png" alt="" />
                        </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink to="/" className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about"className="nav-link" >About Us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/services" className="nav-link" >Services</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
      </li>
      {isAuthenticated ? (<li className="nav-item ">
        <NavLink to="/signup" className="nav-link" onClick= {this.logOut} >Logout</NavLink>
      </li>)  :
     (<Aux>
      <li className="nav-item ">
        <NavLink to="/signup" className="nav-link">Signup</NavLink>
      </li>
       
      <li className="nav-item ">
        <NavLink to="/login" className="nav-link">Login</NavLink>
      </li></Aux>)
    }
      {/* {user && this.props.auth.isAuthenticated ? <h2 className="nav-item ">
        Welcome {this.props.auth.user.local.email}
      </h2>: <div></div> } */}
       
      {/* <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
  </div>
</nav>

    
            {/* Header Start */}
           

         
            {/* Header End */}
          </header>


          <Route path="/about">
            <About showLoader = {this.showLoader} />
          </Route>

          <Route path="/services">
            <Services showLoader = {this.showLoader} />
          </Route>

          <Route path="/contact">
            <ContactUs showLoader = {this.showLoader} />
          </Route>
          <Route path="/signup">
            <Signup showLoader = {this.showLoader} />
          </Route>
          <Route path="/login">
            {isAuthenticated ? <HomePage /> :
            <Login showLoader = {this.showLoader} />
          }
          </Route>
          <Route path="/loggedIn">
            <Successful />
          </Route>



          
          <Route path exact ="/">
            <HomePage />
          </Route>
        </Router>



        {/* //  Body
        <HomePage /> */}

        <footer>
          
          {/* Footer Start*/}
          <div
            className="footer-main"
            data-background="assets/img/shape/footer_bg.png"
          >
            <div className="footer-area footer-padding">
              <div className="container">
                <div className="row d-flex justify-content-between">
                  <div className="col-lg-3 col-md-4 col-sm-8">
                    <div className="single-footer-caption mb-50">
                      <div className="single-footer-caption mb-30">
                        {/* logo */}
                        <div className="footer-logo">
                          <a href="index.html">
                            <img
                              src="assets/img/logo/logo2_footer.png"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="footer-tittle">
                          <div className="footer-pera">
                            <p className="info1">
                              221B Baker Street, P.O Box 353 Park <br /> Road,
                              USA - 215431
                            </p>
                            <p className="info2">info@yourdomain.com</p>
                          </div>
                        </div>
                        <div className="footer-social">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fas fa-globe" />
                          </a>
                          <a href="#">
                            <i className="fab fa-behance" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-5">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>Quick Links</h4>
                        <ul>
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="about.html">Features</a>
                          </li>
                          <li>
                            <a href="single-blog.html">Pricing</a>
                          </li>
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-7">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>Support</h4>
                        <ul>
                          <li>
                            <a href="#">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="#">Terms &amp; Conditions</a>
                          </li>
                          <li>
                            <a href="#"> Sitemap</a>
                          </li>
                          <li>
                            <a href="#">FAQs</a>
                          </li>
                          <li>
                            <a href="#">Report a bugb</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-5">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>Core Features</h4>
                        <ul>
                          <li>
                            <a href="#">Email Marketing</a>
                          </li>
                          <li>
                            <a href="#"> Offline SEO</a>
                          </li>
                          <li>
                            <a href="#">Social Media Marketing</a>
                          </li>
                          <li>
                            <a href="#">Lead Generation</a>
                          </li>
                          <li>
                            <a href="#"> 24/7 Support</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* footer-bottom aera */}
            <div className="footer-bottom-area footer-bg">
              <div className="container">
                <div className="footer-border">
                  <div className="row d-flex align-items-center">
                    <div className="col-xl-12 ">
                      <div className="footer-copy-right text-center">
                        <p>
                          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                          Copyright © All rights reserved | This template is
                          made with{" "}
                          <i className="ti-heart" aria-hidden="true" /> by{" "}
                          <a href="https://colorlib.com" target="_blank">
                            Colorlib
                          </a>
                          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer End*/}
        </footer>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});
export default connect(mapStateToProps, {clearErrors, logout})(
  App
);