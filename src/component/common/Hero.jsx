import React from "react";
const Hero = () => {
    return (
        <>

            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-12">
                        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner d-flex align-items-center">
                                <div class="carousel-item active">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="hero-right">
                                                <span className="badge text-bg-warning mb-3">Opening Discount 50% Off</span>
                                                <h1 className="fw-bold">Super Market Fot fresh Grocery</h1>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                                <a href="/shop">Shop Now</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="hero-img">
                                                <img src="/assets/images/hero.jpg" alt="" className="img-circle"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-7">
                                        <div className="hero-right">
                                        <span className="badge text-bg-warning mb-3">Opening Discount 50% Offnjrijg</span>
                                                <h1 className="fw-bold">Super Market Fot fresh Grocery</h1>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                                <a href="/shop">Shop Now</a>
                                        </div>
                                        </div>
                                        <div className="col-lg-6 col-md-5">
                                        <div className="hero-img">
                                                <img src="/assets/images/hero.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon bg-danger" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span class="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
                                <span class="visually-hidden bg-danger">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;