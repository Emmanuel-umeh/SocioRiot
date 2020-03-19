import React from 'react'

import { connect } from "react-redux";
import GoogleLogin from "react-google-login";
import axios from 'axios'
import PropTypes from "prop-types";
// import register from '../../../actions/authActions'
import {OauthGoogle} from '../../../actions/authActions'
import { clearErrors } from "../../../actions/errorActions";
import {register} from '../../../actions/authActions'

import zxcvbn from 'zxcvbn'

import {withRouter} from 'react-router-dom'
// import e from 'express';


class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      type: 'input',
      score: 'null'
    }
    this.showHide = this.showHide.bind(this);
    this.passwordStrength = this.passwordStrength.bind(this);
  }
  
  showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })  
  }
  
  passwordStrength(e){
    if(e.target.value === ''){
      this.setState({
        score: 'null'
      })
    }
    else{
      var pw = zxcvbn(e.target.value);
      this.setState({
        score: pw.score
      });      
    }

  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
    
  componentDidMount() {
  
    this.props.showLoader()
   
    setTimeout(() => {
      // fetch("https://jsonplaceholder.typicode.com/posts")
      // .then(response => response.json())
       this.props.showLoader();
      }, 1200);
  }

  
  responseGoogle = async res => {
    // console.log("response google", res);
    // console.log(res.accessToken);
    // console.log(res.profileObj.email);

    const email = res.profileObj.email

    await this.props.OauthGoogle(res.accessToken,email);
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }   

    await sleep(5000);
    const { user, isAuthenticated } = this.props.auth;

    console.log("Google user after sleep", user)
   
  
      if(user ){
        // this.props.showLoader()
        await sleep(2000);
        console.log("this is the user " ,user)

        console.log("Logged in")
          // this.props.history.push("/sponsor")



          
    this.props.history.push('/loggedIn')
          
          // window.location.reload()
          // this.props.hideLoader()
        
        }
  
    
    
  };

  signup = async(e) => {
    e.preventDefault()

    console.log("SIGNUP")
    const username = this.username.value
    const email = this.email.value
    const password = this.password2.value

console.log({username,email,password})

await this.props.register({username,email,password})


this.props.history.push('/loggedIn')


  }

  error =(err)=>{
    console.log(err)
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
          <h2 className="contact-title">Signup</h2>
        </div>
        <div className="col-lg-8">
          <form className="form-contact contact_form" onSubmit = {this.signup}>
            <div className="row">
            <div className="col-12">
                <div className="form-group">
                  <input 
                    className="form-control" 
                    name="username" 
                    id="username" 
                    type="username" 
                    onfocus="this.placeholder = ''" 
                    onblur="this.placeholder = 'Enter Username'" 
                    placeholder="Enter Username" 
                    ref = {(input) => this.username = input}
                    />
                </div>
              </div>              
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
                {/* <div className="form-group">
                  <input 
                        className="form-control" 
                        name="password" 
                        id="password" 
                        type="password" 
                        onfocus="this.placeholder = ''" 
                        onblur="this.placeholder = 'Enter Password'" 
                        placeholder="Enter Password" 
                        ref = {(input) => this.password = input}
                        />
                        
                </div> */}
              </div>
              <div className="col-12">
                <div className="form-group">

                <label className="password">Password
      <input type={this.state.type} className="password__input" onChange={this.passwordStrength}   ref = {(input) => this.password2 = input} />
      <span className="password__show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
      <span className="password__strength" data-score={this.state.score} />
      </label>
                  {/* <input 
                        className="form-control" 
                        name="password2" 
                        id="password2" 
                        type="password" 
                        onfocus="this.placeholder = ''" 
                        onblur="this.placeholder = 'Enter Password'" 
                        placeholder="Confirm Password" 
                        ref = {(input) => this.password2 = input}
                        /> */}
                </div>
              </div>
              
            </div>
            <div className="form-group mt-3">
                <center>
              <button type="submit" className="button button-contactForm boxed-btn">Signup</button>
              </center>
            </div>
          </form>
        </div>


        {/* google login */}

        <div>
        <GoogleLogin
    clientId="483013763707-jm3aknuh39grrronsu81rtn5588c32m8.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.error}
    cookiePolicy={'single_host_origin'}
  />

        </div>


        {/* {"end google login"} */}
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

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});

export default connect(mapStateToProps, {register, clearErrors, OauthGoogle })(
  withRouter(Signup)
);