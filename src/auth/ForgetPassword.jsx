import React from "react";
import LoginHeader from "../component/common/LoginHeader";
import Footer from "../includes/Footer";
const ForgetPassword = () => {
    return (
        <>
           <LoginHeader />
           <div className="container mt-5 mb-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="text-center">
                        <img src="/assets/images/fp-g.svg" alt="" />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="forget-form">
                        <h4>Forget Your Password</h4>
                        <p>Please enter the email address associated with your account and We will email you a link to reset your password.</p>
                        <div className="form-group">
                            <input type="email" name="" id="" className="form-control" placeholder="Email"/>
                        </div>

                        <div className="f-form-btn">
                            <button className="reset">Reset Password</button>
                            <button className="back">Back</button>
                        </div>
                    </div>
                </div>
            </div>
           </div>
           <Footer />
        </>
    )
}

export default ForgetPassword;