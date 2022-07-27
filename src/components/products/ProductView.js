import ProductViewCSS from "./ProductView.module.css";
import React from "react";

function ProductView(props) {
  return (
    <section className={ProductViewCSS.product}>
      <div className="columns">
        <div className="column is-7">
          <div className={ProductViewCSS.productImage}>
            <img src="#" alt="Product" />
          </div>
          <div className={ProductViewCSS.productVariants}>
            <div className={ProductViewCSS.variant}>
              <img src="#" alt="variant" />
            </div>
          </div>
        </div>

        <div className="column is-5">
          <div className={ProductViewCSS.button}>
            <button>Book Now</button>
          </div>
          <div className={ProductViewCSS.details}>
            <ul>
              <li>SqFt</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-3">
          <h5>Description</h5>
        </div>
        <div className="column is-3">
          <h5>Contact Us</h5>
        </div>
        <div className="column is-3">
          <h5>More Details</h5>
        </div>
      </div>
    </section>
  );
}
export default ProductView;
