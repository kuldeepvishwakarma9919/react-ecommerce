import React, { useEffect, useState } from "react";

const PopularProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); // Fetching 'products' array
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading products...</p>;

  return (
    <div className="container py-4">
      <h2 className="mb-4">Popular Products</h2>
      <div className="row">
        {products.map((item) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
            <div className="product-box border rounded shadow-sm p-2 h-100">
              <div className="product-img position-relative">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="img-fluid w-100"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="product-overlay position-absolute top-0 end-0 p-2">
                  <i className="fa-solid fa-eye me-2"></i>
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>

              <div className="pt-2">
                <h6 className="mb-1 text-muted">{item.category}</h6>
                <a href={`/product-details/${item.id}`} className="mb-2 text-decoration-none text-dark">{item.title}</a>

                <div className="product-star mb-2 text-warning">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>

                <div className="product-price d-flex justify-content-between align-items-center">
                  <div>
                    <span className="price">₹{item.price}</span>
                    <span className="compare-price text-decoration-line-through text-muted ms-2">
                      ₹{Math.round(item.price * 1.2)}
                    </span>
                  </div>
                  <div className="add-to-cart">
                    <button className="btn btn-sm btn-success">
                      <i className="fa-solid fa-plus"></i> Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;
