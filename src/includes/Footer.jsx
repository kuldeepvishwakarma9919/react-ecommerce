import React from "react";
import "./footer.css";
const Footer = () => {
    return (
        <>
            <div className="container-fluid pt-5" id="footer">
                <div className="container">
                    <div className="row justify-content-between" id="F_TOP1">
                        <div className="col-lg-2 col-md-6 col-6">
                            <h5 className="MAIN_HEAD">Category</h5>
                            <ul>
                                <li className="nav-item"><a href="" className="nav-link">Vegetables & Fruits</a></li>
                                <li className="nav-item"><a href="" className="nav-link">BreakFast & Instant Food</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Bakery & Biscuits</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Atta, Rise & Dal</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Sauces & spreads</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Organic & gourmet</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Baby care</a></li>

                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 col-6">
                            <h5 className="MAIN_HEAD">Get to know us</h5>
                            <ul>
                                <li className="nav-item"><a href="" className="nav-link">Company</a></li>
                                <li className="nav-item"><a href="" className="nav-link">About</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Blog</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Help Center</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Our Value</a></li>

                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 col-6">
                            <h5 className="MAIN_HEAD">For Consumers</h5>
                            <ul>
                                <li className="nav-item"><a href="" className="nav-link">Payment</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Shipping</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Product Return</a></li>
                                <li className="nav-item"><a href="" className="nav-link">FAQ</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Shop Checkout</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 col-6">
                            <h5 className="MAIN_HEAD">Become a Shopper</h5>
                            <ul>
                                <li className="nav-item"><a href="" className="nav-link">Shopper Opportunity</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Become a shopper</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Earnings</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Ideas & Guides</a></li>
                                <li className="nav-item"><a href="" className="nav-link">New Retailers</a></li>

                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 col-6">
                            <h5 className="MAIN_HEAD">Freshcart programs</h5>
                            <ul>
                                <li className="nav-item"><a href="" className="nav-link">Freshcart programs</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Gift Card</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Promos & Coupons</a></li>
                                <li className="nav-item"><a href="" className="nav-link">FreshCart & Ads</a></li>
                                <li className="nav-item"><a href="" className="nav-link">Careers</a></li>

                            </ul>
                        </div>


                    </div>

                    <div className="row border-top border-bottom py-3 mt-3" id="M_TOP1">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <h6>Payment Partner</h6>
                                <div className="PAY_IMG">
                                    <img src="/assets/images/1.svg" alt="" />
                                    <img src="/assets/images/2.svg" alt="" />
                                    <img src="/assets/images/3.svg" alt="" />
                                    <img src="/assets/images/4.svg" alt="" />
                                    <img src="/assets/images/5.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex justify-content-end align-items-center" id="M_DIV_LEFT">
                                <h6>Get deliveries with FreshCart</h6>
                                <img src="/assets/images/appstore-btn.svg" alt="" />
                                <img src="/assets/images/googleplay-btn.svg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center" id="B_TOP1">
                        <div className="col-lg-7 B_TOP_IMG_R" >
                            <p>© 2025 - 2026 FreshCart eCommerce Vegetable Website. All rights reserved. Develop by 
                               &nbsp; <span>Kuldeep</span>
                                .</p>
                        </div>
                        <div className="col-lg-5 d-flex justify-content-end align-items-center" >
                            <p>Follow us on</p>
                            <p className="B_TOP_IMG">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </p>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Footer;