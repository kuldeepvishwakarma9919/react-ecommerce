import React, { useState } from "react";

const BestDeals = () => {
  // State to hold the current main image
  const [mainImage, setMainImage] = useState("/assets/images/f2.jpg");

  // Function to change the main image (on click)
  const changeMainImage = (newImage) => {
    setMainImage(newImage);
  };

  return (
    <>
      <div className="container my-3">
        <div className="row" id="best-sells">
          <div className="col-md-12">
            <h1>Daily Best Sells</h1>
            <div className="row">
              <div className="col-md-3">
                <div className="daily-best-sells">
                  <h3 className="text-white fw-bold">100% Organic Coffee Beans.</h3>
                  <p>Get the best deal before close.</p>
                  <button>
                    Shop Now <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              
              {/* Product Card 1 */}
              <div className="col-md-3">
                <div className="product-card">
                  <img
                    src={mainImage}
                    className="card-img-top"
                    alt="Roast Ground Coffee"
                    style={{ transition: "transform 0.3s ease" }}
                  />
                  <h6 className="text-right">Tea, Coffee & Drinks</h6>
                  <h4 className="text-right">Roast Ground Coffee</h4>

                  <div className="icon-pro-view">
                    <i
                      className="fa-solid fa-eye"
                      data-bs-toggle="modal"
                      data-bs-target="#cartDataViewModel"
                    ></i>
                    <i className="fa-solid fa-heart"></i>
                    <i className="fa-solid fa-right-left"></i>
                  </div>

                  <div className="b-d-price d-flex justify-content-between align-items-center">
                    <span>$13.5-$18</span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>

                  <div className="add-to-cart">
                    <a href="">
                      <i className="fa-solid fa-plus"></i> &nbsp; Add To Cart
                    </a>
                  </div>
                </div>
              </div>

              {/* Product Card 2 (Different Image and Content) */}
              <div className="col-md-3">
                <div className="product-card">
                  <img
                    src="/assets/images/f3.jpg"
                    className="card-img-top"
                    alt="Tea Ground Coffee"
                    style={{ transition: "transform 0.3s ease" }}
                  />
                  <h6 className="text-right">Tea, Coffee & Drinks</h6>
                  <h4 className="text-right">Tea Ground Coffee</h4>

                  <div className="icon-pro-view">
                    <i
                      className="fa-solid fa-eye"
                      data-bs-toggle="modal"
                      data-bs-target="#cartDataViewModel"
                    ></i>
                    <i className="fa-solid fa-heart"></i>
                    <i className="fa-solid fa-right-left"></i>
                  </div>

                  <div className="b-d-price d-flex justify-content-between align-items-center">
                    <span>$15.5-$20</span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>

                  <div className="add-to-cart">
                    <a href="">
                      <i className="fa-solid fa-plus"></i> &nbsp; Add To Cart
                    </a>
                  </div>
                </div>
              </div>

              {/* Product Card 3 (Different Image and Content) */}
              <div className="col-md-3">
                <div className="product-card">
                  <img
                    src="/assets/images/f4.jpg"
                    className="card-img-top"
                    alt="Ground Coffee Beans"
                    style={{ transition: "transform 0.3s ease" }}
                  />
                  <h6 className="text-right">Tea, Coffee & Drinks</h6>
                  <h4 className="text-right">Ground Coffee Beans</h4>

                  <div className="icon-pro-view">
                    <i
                      className="fa-solid fa-eye"
                      data-bs-toggle="modal"
                      data-bs-target="#cartDataViewModel"
                    ></i>
                    <i className="fa-solid fa-heart"></i>
                    <i className="fa-solid fa-right-left"></i>
                  </div>

                  <div className="b-d-price d-flex justify-content-between align-items-center">
                    <span>$10.5-$12</span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>

                  <div className="add-to-cart">
                    <a href="">
                      <i className="fa-solid fa-plus"></i> &nbsp; Add To Cart
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Modal with Images */}
      <div
        className="modal fade"
        id="cartDataViewModel"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content p-3">
            <div className="modal-body">
              <div className="row g-4 align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    id="mainProductImage"
                    src={mainImage}
                    alt="Roast Ground Coffee"
                    className="img-fluid rounded shadow-sm mb-3 main-img"
                  />
                  <div className="d-flex justify-content-center gap-2">
                    <img
                      src="/assets/images/f2.jpg"
                      className="img-thumbnail thumb-img"
                      alt="Thumbnail 1"
                      onClick={() => changeMainImage("/assets/images/f2.jpg")}
                    />
                    <img
                      src="/assets/images/f3.jpg"
                      className="img-thumbnail thumb-img"
                      alt="Thumbnail 2"
                      onClick={() => changeMainImage("/assets/images/f3.jpg")}
                    />
                    <img
                      src="/assets/images/f4.jpg"
                      className="img-thumbnail thumb-img"
                      alt="Thumbnail 3"
                      onClick={() => changeMainImage("/assets/images/f4.jpg")}
                    />
                    <img
                      src="/assets/images/f5.jpg"
                      className="img-thumbnail thumb-img"
                      alt="Thumbnail 4"
                      onClick={() => changeMainImage("/assets/images/f5.jpg")}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <h6 className="text-muted">Tea, Coffee & Drinks</h6>
                  <h4 className="fw-bold">Roast Ground Coffee</h4>

                  <div className="d-flex align-items-center mb-2">
                    <span className="text-warning me-2">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span className="text-muted">(4 Reviews)</span>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <h5 className="me-3 text-danger mb-0">
                      $13.5 <small className="text-muted text-decoration-line-through">$18</small>
                    </h5>
                    <span className="badge bg-success">25% Off</span>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Choose Weight:</label>
                    <br />
                    <div className="btn-group" role="group">
                      <button className="btn btn-outline-secondary btn-sm">250g</button>
                      <button className="btn btn-outline-secondary btn-sm">300g</button>
                      <button className="btn btn-outline-secondary btn-sm">1kg</button>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Quantity:</label>
                    <input type="number" value="1" min="1" className="form-control w-25 d-inline-block" />
                  </div>

                  <div className="mb-3 d-flex align-items-center gap-2">
                    <button className="btn btn-primary">Add To Cart</button>
                    <button className="btn btn-outline-danger">
                      <i className="fa-solid fa-heart"></i>
                    </button>
                    <button className="btn btn-outline-secondary">
                      <i className="fa-solid fa-right-left"></i>
                    </button>
                  </div>

                  <div className="product-details text-muted small">
                    <p><strong>Product Code:</strong> FBB00255</p>
                    <p><strong>Availability:</strong> In Stock</p>
                    <p><strong>Type:</strong> Fruits</p>
                    <p><strong>Shipping:</strong> 01 day shipping. (Free pickup today)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestDeals;
