import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";
import "./product.css"; // Add the updated CSS for hover effect here

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setSelectedImage(data.thumbnail || data.images?.[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail,
        quantity: quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} added to cart successfully!`);
  };

  if (loading) return <div className="container mt-5"><h4>Loading product...</h4></div>;
  if (!product) return <div className="container mt-5"><h4>Product not found.</h4></div>;

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Link to="/" className="btn btn-secondary mb-3">← Back to Products</Link>
        <div className="row">
          {/* Image Section */}
          <div className="col-md-6">
            <div className="border rounded mb-4 img-div">
              <img
                src={selectedImage}
                className="img-fluid mb-3 main-image"
                alt={product.title}
              />
            </div>
            <div className="d-flex gap-2">
              {product.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="img-thumbnail thumb-image"
                  style={{ width: 70, height: 70 }}
                  alt="thumb"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="col-md-6">
            <h3>{product.title}</h3>
            <h5 className="text-muted">{product.category}</h5>
            <div className="mb-3">
              <span className="fs-4 fw-bold text-success">₹{product.price}</span>
              <span className="text-decoration-line-through text-muted ms-2">
                ₹{Math.round(product.price * 1.2)}
              </span>
            </div>
            <p>{product.description}</p>
            {/* Quantity Controls with Count */}
            <div className="d-flex align-items-center mb-3">
              <button className="btn btn-outline-secondary" onClick={decreaseQty}>-</button>
              <span className="mx-3 fs-5">{quantity}</span>
              <button className="btn btn-outline-secondary" onClick={increaseQty}>+</button>
            </div>

            <button className="btn btn-success" onClick={handleAddToCart}>
              <i className="fa fa-shopping-cart me-2"></i> Add to Cart
            </button>
          </div>
        </div>


        <div className="row">
          <div className="col-lg-12" id="PRO_DETAIL_TAB">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Product Detail</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Information</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Reviews</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>Seller Info</button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
               <div className="mt-4">
               <h4 className="fw-bold">Nutrient Value & Benefits</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <h6 className="fw-bold">
                  Storage Tips
                </h6>
                <p>
                  Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

               </div>

              </div>
              <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                <h4 className="fw-bold">Details</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <table className="table table-hovered table-striped">
                      <tbody>
                        <tr>
                          <td>Weight:</td>
                          <td>{product.weight}g</td>
                        </tr>
                        <tr>
                          <td>Discount:</td>
                          <td>{product.discountPercentage}%</td>
                        </tr>
                        <tr>
                          <td>Rating:</td>
                          <td>{product.rating} ⭐</td>
                        </tr>

                        <tr>
                          <td>Tags:</td>
                          <td>{product.tags?.join(", ")}</td>
                        </tr>

                        <tr>
                          <td>Dimensions:</td>
                          <td>{product.dimensions?.width} x {product.dimensions?.height} x {product.dimensions?.depth} cm</td>
                        </tr>

                        <tr>
                          <td><strong>Return Policy:</strong></td>
                          <td>{product.returnPolicy}</td>
                        </tr>

                        <tr>
                          <td><strong>Barcode:</strong></td>
                          <td>{product.meta?.barcode}</td>
                        </tr>
            
                      </tbody>
                    </table>
                  </div>

                  <div className="col-lg-6">
                    <table className="table table-hovered table-striped">
                      <tbody>
                        <tr>
                          <td>Warranty:</td>
                          <td>{product.warrantyInformation}</td>
                        </tr>
                        <tr>
                          <td>Shipping:</td>
                          <td>{product.shippingInformation}</td>
                        </tr>
            

                        <tr>
                          <td><strong>Brand:</strong></td>
                          <td>{product.brand}</td>
                        </tr>

                        <tr>
                          <td><strong>SKU:</strong></td>
                          <td>{product.sku}</td>
                        </tr>

                        <tr>
                          <td><strong>Stock:</strong></td>
                          <td>{product.stock}</td>
                        </tr>

                        <tr>
                          <td><strong>Availability:</strong></td>
                          <td>{product.availabilityStatus}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>           
                  <p>
              <strong>QR Code:</strong><br />
              <img src={product.meta?.qrCode} alt="QR" style={{ width: "100px" }} />
            </p>


                </div>
              </div>
              <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                {/* Reviews */}
                <div className="mt-5">
                  <h4>Customer Reviews</h4>
                  {product.reviews && product.reviews.length > 0 ? (
                    product.reviews.map((review, index) => (
                      <div key={index} className="border p-3 mb-2 rounded">
                        <strong>{review.reviewerName}</strong> ({review.reviewerEmail})<br />
                        <span className="text-warning">Rating: {review.rating} ⭐</span><br />
                        <p>{review.comment}</p>
                        <small className="text-muted">{new Date(review.date).toLocaleDateString()}</small>
                      </div>
                    ))
                  ) : (
                    <p>No reviews yet.</p>
                  )}
                </div>
              </div>
              <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
            </div>
          </div>
        </div>
      

      <div className="row">
        <div className="col-lg-3">
          <div>

          </div>
        </div>
      </div>

      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
