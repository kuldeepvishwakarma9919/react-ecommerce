import React, { useEffect, useState } from 'react';

const ProductFeatured = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching categories:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h4 className="mb-4">All Categories</h4>
      <div className="row">
        {categories.map((category, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={index}>
            <div className="border rounded p-3 py-5 text-center shadow-sm">
              <a  href={category.slug} className="text-capitalize text-dark text-decoration-none">{category.name}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeatured;

