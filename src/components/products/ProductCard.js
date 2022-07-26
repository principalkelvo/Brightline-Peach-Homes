import ProductCardCSS from "./ProductCard.module.css";
import React from "react";

function ProductCard() {
  return (
    <div className="column is-4">
      <div className={ProductCardCSS.card}>
        <div className={ProductCardCSS.image}>
          <img src="#" alt="ProductName" />
        </div>

        <div className={ProductCardCSS.companyDetails}>
          <div className={ProductCardCSS.companyCategory}>Apartment</div>
          <div className={ProductCardCSS.companyTitle}>Maridadi Home</div>
          <div className={ProductCardCSS.companyLocation}>
            1425 San Pedri St. Los Angeles, CA 90015
          </div>
          <div className={ProductCardCSS.details}>
            <div>
                <p>Beds:<span>4</span></p>
            </div>
            <div>
                <p>Baths:<span>4</span></p>
            </div>
            <div>
                <p>SqFt:<span>4</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
