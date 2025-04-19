import React from "react";
import "./shop.css"
import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";
import BroadCrump from "../component/common/BroadCrump";
import CateMenu from "../component/common/CateMenu";
import ShopProduct from "../component/common/ShopProduct";
const Shop = () => {
    return (
        <>
            <Navbar />
            <BroadCrump />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="cate_sidebar">
                            <CateMenu />
                        </div>

                        <div className="mt-3">
                            <label htmlFor="" className="form-label">Stores</label>
                            <input type="text" className="form-control" placeholder="Search For Store"/>
                        </div>

                        <div className="mt-3">
                            <label htmlFor="" className="form-label">Price</label>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3" />
                            <div className="mt-2">
                                Price : $29 - $199
                            </div>
                        </div>

                        <div className="side-back">
                             <h4>Fresh Fruits</h4>
                             <p>Get Upto 25% Off</p>
                             <button>Shop Now</button>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="shop-header">
                                    Snacks & Munchies
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-8">
                                <div className="c_fil_left1">
                                    <span>26 Products found</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="c_fil_left2">
                                    <select name="" id="" className="form-control">
                                        <option value="">10</option>
                                        <option value="">20</option>
                                        <option value="">30</option>
                                    </select>

                                    <select name="" id="" className="form-control">
                                        <option value="">Sort By Feature</option>
                                        <option value="">Low to High</option>
                                        <option value="">High to Low</option>
                                        <option value="">Release Date</option>
                                        <option value="">Avg Rating</option>
                                    </select>


                                </div>
                            </div>
                        </div>
                       <ShopProduct />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Shop;