import React, { useState } from "react";

const cartData = {
  item1: { pro_name: "Tomato", pro_cate: "Vegetable", price: 20, compare_price: 30 },
  item2: { pro_name: "Potato", pro_cate: "Vegetable", price: 15, compare_price: 25 },
  item3: { pro_name: "Carrot", pro_cate: "Vegetable", price: 25, compare_price: 35 },
  item4: { pro_name: "Onion", pro_cate: "Vegetable", price: 18, compare_price: 28 },
  item5: { pro_name: "Cucumber", pro_cate: "Vegetable", price: 22, compare_price: 32 },
  item6: { pro_name: "Spinach", pro_cate: "Vegetable", price: 10, compare_price: 15 },
  item7: { pro_name: "Broccoli", pro_cate: "Vegetable", price: 40, compare_price: 50 },
  item8: { pro_name: "Peas", pro_cate: "Vegetable", price: 35, compare_price: 45 },
  item9: { pro_name: "Cabbage", pro_cate: "Vegetable", price: 28, compare_price: 38 },
  item10: { pro_name: "Cauliflower", pro_cate: "Vegetable", price: 30, compare_price: 40 },
};

const ShopProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const cartItems = Object.keys(cartData).map((key) => ({
    id: key,
    ...cartData[key],
  }));

  const totalPages = Math.ceil(cartItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = cartItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-3">
      <div className="row">
        {selectedItems.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <a href={`/product-details/${item.pro_name}`}>
            <div className="product-box border shadow-sm p-2">
              <div className="product-img position-relative">
                <img src="/assets/images/p1.jpg" alt="" className="img-fluid" />
                <div className="product-overlay position-absolute top-0 end-0 p-2">
                  <i className="fa-solid fa-eye me-2"></i>
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>

              <div className="p-2">
                <h6 className="text-start">{item.pro_cate}</h6>
                <h6 className="text-start">{item.pro_name}</h6>
                <div className="product-star text-start text-warning mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>

                <div className="product-price d-flex justify-content-between align-items-center">
                  <div>
                    <span className="price fw-bold">₹{item.price}</span>
                    <span className="compare-price text-decoration-line-through text-muted ms-2">
                      ₹{item.compare_price}
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
            </a>
          </div>
        ))}
      </div>

      {/* Bootstrap Pagination */}
      <nav className="d-flex mt-1 mb-3">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
          </li>

          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
            >
              <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}

          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ShopProduct;
