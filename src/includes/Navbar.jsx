import React from "react";
import HeaderLocationModal from "../component/common/HeaderLocationModal";

const Navbar = () => {
    
    return (
        <>
          <div className="container-fluid border-bottom">
          <div className="container py-2">
                <div className="row align-items-center">
                    <div className="col-md-12 col-12">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4">
                                <a href="/" className="navbar-brand t-nav-logo">Fresh Cart</a>
                            </div>
                            <div className="col-lg-7 col-md-8 d-flex">
                                <input type="text" className="form-control t-nav-search rounded" placeholder="Search for products, brands and more" aria-label="Search" />
                                <button className="btn d-flex align-items-center border rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-location-dot"></i> &nbsp;Location</button>
                            </div>
                            <div className="col-md-2 d-none d-lg-block">
                                <div className="ms-auto d-flex align-items-center justify-content-end gap-3">
                                    <i class="fa-solid fa-heart"></i>
                                    <i class="fa-solid fa-user"></i>
                                    <i class="fas fa-shopping-cart"></i>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <nav class="navbar navbar-expand-lg">
                                <div class="container-fluid">
                                    <a class="navbar-brand b-nav-logo" href="#">All Department</a>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                            <li class="nav-item">
                                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="/shop">Shop</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Pages</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Mega Menu</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Stores</a>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Account
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="/login">SignIn</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><hr class="dropdown-divider" /></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link">Dashboard</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
          </div>

            <HeaderLocationModal />
        </>
    )
}

export default Navbar;