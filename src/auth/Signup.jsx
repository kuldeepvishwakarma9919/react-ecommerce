import React from "react";
import Footer from "../includes/Footer";
import LoginHeader from "../component/common/LoginHeader";
const Signup = () => {
    return (
        <>
          <LoginHeader />
            <div className="container mt-5 mb-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div>
                            <img src="/assets/images/signin-g.svg" alt="" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="signup-form">
                            <h4>Sign up to FreshCart</h4>
                            <p>Welcome back to FreshCart! Enter your email to get started.</p>
                            <div className="form-group mt-3 d-flex">
                                <input type="text" className="form-control me-1" placeholder="First Name"/>
                                <input type="text" className="form-control" placeholder="Last Name"/>
                            </div>

                            <div className="form-group mt-3">
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>

                            <div className="form-group mt-2">
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>

                            <div className="signup-btn">
                            <button className="">Signup</button>
                            </div>

                            <p className="condition">By continuing, you agree to our <a href="">Terms</a> of Service & <a href="">Privacy Policy</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Signup;