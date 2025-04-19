import React, { useState } from "react";

const CateMenu = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const categoryData = [
    {
      name: "Grocery",
      subcategories: ["Vegetables", "Fruits", "Dairy", "Grains"],
    },
    {
      name: "Personal Care",
      subcategories: ["Hair Care", "Skin Care", "Oral Care"],
    },
    {
      name: "Home Essentials",
      subcategories: ["Cleaning", "Detergents", "Air Fresheners"],
    },
    {
      name: "Baby Products",
      subcategories: ["Diapers", "Baby Food", "Wipes"],
    },
    {
      name: "Beverages",
      subcategories: ["Juices", "Soft Drinks", "Tea", "Coffee"],
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion" id="categoryAccordion">
      {categoryData.map((category, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header " id={`heading${index}`}>
            <button
              className={`accordion-button text-dark shadow-none ${openIndex === index ? "" : "collapsed"}`}
              type="button"
              onClick={() => handleToggle(index)}
              aria-expanded={openIndex === index}
              aria-controls={`collapse${index}`}
            >
              {category.name}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#categoryAccordion"
          >
            <div className="accordion-body">
              <ul className="list-unstyled mb-0">
                {category.subcategories.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <a href="#" className="text-decoration-none">{sub}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CateMenu;
