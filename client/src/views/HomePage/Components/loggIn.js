import React, { Component } from 'react';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as Done from "../../../anime/done.json"



const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Done.default,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
}
class Successful extends Component {
    componentDidMount(){
        setTimeout({
            // this.props.hist
        },1200)
    }
    // state = {  }
    render() { 
        return ( 
            <div>
<center><h1>Logged In Successfully</h1></center>

<FadeIn>
                   
                   <div class="d-flex justify-content-center align-items-center">
{/* 
                      <br></br>
                      <br></br>
                      <br></br> */}
                    
                     <Lottie 
                     options={defaultOptions} height={
                         '100vh'
                     } width={"100%"} />     
  
           
                   </div>
                 </FadeIn>
            </div>
         );
    }
}
 
export default Successful;