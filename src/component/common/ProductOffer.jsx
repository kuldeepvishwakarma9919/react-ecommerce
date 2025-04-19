import React from "react";
const ProductOffer = () => {
    return (
        <>
        <div className="container">
            <div className="row" id="OFFER_ROW">
                <div className="col-lg-3">
                    <div className="OFFER_BOX">
                    <i class="fa-solid fa-clock"></i>
                    <h6>10 minute grocery now</h6>
                    <p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="OFFER_BOX">
                    <i class="fa-solid fa-gift"></i>
                    <h6>Best Prices & Offers</h6>
                    <p>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="OFFER_BOX">
                    <i class="fa-solid fa-window-restore"></i>
                    <h6>Wide Assortment</h6>
                    <p>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.</p>
                    </div>
                </div>
                <div className="col-lg-3">
                     <div className="OFFER_BOX">
                     <i class="fa-solid fa-arrow-right-arrow-left"></i>
                <h6>Easy Returns</h6>
                <p>Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy .</p>
                     </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductOffer;