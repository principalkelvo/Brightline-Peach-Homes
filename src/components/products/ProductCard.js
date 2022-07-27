import ProductCardCSS from "./ProductCard.module.css";
import image from "../../logo.svg";
import React from "react";

function ProductCard() {
  return (
    <div className="columns is-multiline">
    <div className="column is-4">
      <div className={ProductCardCSS.card}>
        <div className={ProductCardCSS.image}>
          <div className={ProductCardCSS.type}>For Rent</div>
          <div className={ProductCardCSS.price}><p>Ksh 3,100<span>/mo</span></p></div>
          <img src={image} alt="ProductName" />
        </div>

        <div className={ProductCardCSS.companyDetails}>
          <div className={ProductCardCSS.companyCategory}>Apartment</div>
          <div className={ProductCardCSS.companyTitle}>
            <h1 className={ProductCardCSS.title}>Maridadi Home</h1>
          </div>
          <div className={ProductCardCSS.companyLocation}>
            1425 San Pedri St. Los Angeles, CA 90015
          </div>
          <div className={ProductCardCSS.details}>
            <div>
              <p>
                Beds:<span>4</span>
              </p>
            </div>
            <div>
              <p>
                Baths:<span>4</span>
              </p>
            </div>
            <div>
              <p>
                SqFt:<span>4</span>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className={ProductCardCSS.owner}>
          <div className={ProductCardCSS.ownerDetails}>
            <div className={ProductCardCSS.profileImage}>
              <img src={image} alt="profileImage" />
            </div>
            <div className={ProductCardCSS.name}>principal</div>
          </div>
          <div className={ProductCardCSS.dateRange}>4 days ago</div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default ProductCard;
