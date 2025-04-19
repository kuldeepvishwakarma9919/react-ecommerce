import React from "react";
import Footer from "../includes/Footer";
import LoginHeader from "../component/common/LoginHeader";
const Login = () => {
    return (
        <>
            <LoginHeader />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="text-center">
                            <img src="/assets/images/signin-g.svg" alt="" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="signin-form">
                            <h4>Sign in to FreshCart</h4>
                            <p>Welcome back to FreshCart! Enter your email to get started.</p>
                            <div className="form-group mt-3">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>

                            <div className="form-group mt-2">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>

                            <div className="remember d-flex justify-content-between mt-2">
                                <span>
                                    <input type="checkbox" name="" id="" className="me-2"/>
                                    Remember me
                                </span>
                                <span>
                                Forgot password?
                                <a href="/forget-password" className="reset-link ms-2">Reset it </a>
                                </span>
                            </div>

                            <div className="signin-btn">
                                <button className="">Signin</button>
                            </div>
                            <p className="signup-condition">Don,t Have Account <a href="/signup">Signup</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Login;