import React from "react";
const LoginHeader = () => {
    return (
        <>

           <div className="container-fluid shadow-sm">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <nav class="navbar navbar-expand-lg">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="/">
                                    <img src="/assets/images/freshcart-logo.svg" alt="" />
                                </a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li class="nav-item d-flex align-items-center">
                                            Already Have a Account ? 
                                            <a class="nav-link active" aria-current="page" href="/login">Signin</a>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </nav>
                </div>
            </div>
            </div>
           </div>
        </>
    )
}

export default LoginHeader;