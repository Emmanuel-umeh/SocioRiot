import React from 'react'
import {connect} from 'react-redux'
import PropTypes from "prop-types";
import { login } from "../../../actions/authActions";
// import { Alert } from "reactstrap";
import {withRouter} from 'react-router-dom'
import { clearErrors } from "../../../actions/errorActions";
import { AUTH_ERROR } from "../../../actions/types";

import '../../../css/password.css'

 class Login extends React.Component{
  constructor(props){
    super(props)
  }
  state = {
    msg : null
  }


  static propTypes = {
    auth: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  // componentDidMount(){

  //   const { error, isAuthenticated } = this.props;
  //   console.log("is user already logged in ? ", isAuthenticated)
  //   if(isAuthenticated){
  //     this.props.history.push('/')
  //   }

  // }
  

  
  componentDidUpdate(prevProps) {

    // this.props.showLoader()
   
    // setTimeout(() => {
    //   // fetch("https://jsonplaceholder.typicode.com/posts")
    //   // .then(response => response.json())
    //    this.props.showLoader();
    //   }, 1200);
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //
      if (error.id === "REGISTER_FAIL") {
        // this.setState({
        //   msg: error.msg.msg
        // });
        console.log({ msg: error.msg.msg})
      } else if (error.id === "LOGIN_FAIL") {
        this.setState({
          msg: error.msg.msg
        });
        console.log({ msg: error.msg.msg})
      } else if (error.id === "REGISTER_SUCCESS") {
        // this.props.history.push("/sponsor")
        
        // window.location.reload()
        console.log("register success")
      }

      else if (error.id === "LOGIN_SUCCESS") {
        // this.props.history.push("/sponsor")

        console.log("logged in successfully")
        // window.location.reload()
      }
      
      
      else {
        this.setState({
          msg: null
        });
      }
    }

    // if authenticated, close modal

    // if (isAuthenticated) {
    //   //  alert("Logged in")
    //   console.log("logged in");
    // }
  }

  // clearTheErrors() {
  //   this.setState({
  //     msg: null
  //   });
  // }
  



  login = async(e) =>{
    e.preventDefault()
    // 
    const email = this.email.value
    const password = this.password.value

    console.log(email, password)
    const newUser = {
      email,
      password
    };

    console.log("new user ", newUser)
    // function sleep(ms) {
    //   return new Promise(resolve => setTimeout(resolve, ms));
    // }

    await this.props.login(newUser);


    // const { user, isAuthenticated, token } = this.props.auth;
  

    // function sleep(ms) {
    //   return new Promise(resolve => setTimeout(resolve, ms));
    // }
    

    // //  await this.props.login(newUser);

  

    //   // this.props.showLoader()
    
    // await sleep(5000);
    //   console.log("this is the user ", user)
    //   console.log("is authenticated, ", this.props.auth.isAuthenticated)

    // if(this.props.auth.isAuthenticated){
    //   console.log("this is the user ", user)
    //   this.props.history.push('/loggedIn')
    // }

  
//  e.preventDefault()

    // await sleep(4000);
    
    // // console.log("new usser ", newUser);
    // const { error } = this.props;
    // const {token, user, isAuthenticated } = this.props.auth;

    // console.log(user)

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
          {this.state.msg ?
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
          {this.state.msg}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
        </div>
          :<div></div> }
          
        </div>
        <div className="col-lg-8">
          <form 
              className="form-contact" 
              onSubmit={this.login}
              >
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
                        placeholder="Enter Password"
                        ref = {(input) => this.password = input}
                        />
                </div>
              </div>
              
            </div>
            <div className="form-group mt-3">
                <center>
              <button 
              type="submit" 
              className="button button-contactForm boxed-btn"
              //  onClick = {this.login}
               >Login</button>
              </center>
            </div>
          </form>
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


const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});
export default connect(mapStateToProps, { login})(
  withRouter(Login)
);