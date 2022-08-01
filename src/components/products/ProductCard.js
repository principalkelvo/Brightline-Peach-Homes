import ProductCardCSS from "./ProductCard.module.css";
// import image from "../../logo.svg";
// import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ProductCard({ estates, activeFilter }) {
  // useEffect(() => {
  //   if (activeFilter === true) {
  //     setFiltered(data);
  //     return;
  //   }
  //   const featured = estates.filter((estate) => estate.featured === activeFilter);
  //   setFiltered(featured);
  //   console.log("featured", featured);
  // }, []);
  const estatesCard = estates.map((estate) => (
    <div className={ProductCardCSS.fullCard} key={estate.id}>
      <Link className={ProductCardCSS.link} to={`/product/${estate.id}`}>
        <div
          className={
            activeFilter
              ? ProductCardCSS.cardColor + " " + ProductCardCSS.card
              : ProductCardCSS.card
          }
        >
          <div className={ProductCardCSS.image}>
            <div
              className={
                estate.forSale
                  ? ProductCardCSS.type
                  : ProductCardCSS.rentType + " " + ProductCardCSS.type
              }
            >
              For {estate.forSale ? "Sale" : "Rent"}
            </div>
            <div className={ProductCardCSS.price}>
              <p>
                Ksh {estate.forSale ? estate.price.sale : estate.price.rent}
                <span>/mo</span>
              </p>
            </div>
            <img src={estate.image} alt={estate.title} />
          </div>

          <div className={ProductCardCSS.companyDetails}>
            <div className={ProductCardCSS.companyCategory}>
              {estate.category}
            </div>
            <div className={ProductCardCSS.companyTitle}>
              <h1 className={ProductCardCSS.title}>{estate.title}</h1>
            </div>
            <div className={ProductCardCSS.companyLocation}>
              {estate.location.street} {estate.location.city}{" "}
              {estate.location.country}
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
                  SqFt:<span>{estate.size}</span>
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className={ProductCardCSS.owner}>
            <div className={ProductCardCSS.ownerDetails}>
              <div className={ProductCardCSS.profileImage}>
                <img
                  src={estate.owner.profilePic}
                  alt={estate.owner.firstName + " " + estate.owner.lastName}
                />
              </div>
              <div className={ProductCardCSS.name}>
                {estate.owner.firstName + " " + estate.owner.lastName}
              </div>
            </div>
            <div className={ProductCardCSS.dateRange}>
              {estate.date.range} days ago
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));
  return (
    <div className="columns is-multiline">
      {estatesCard}
      {/* <div className="column is-4">
      <div className={ProductCardCSS.card}>
        <div className={ProductCardCSS.image}>
          <div className={ProductCardCSS.type}>estatesCard.id</div>
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
    </div> */}
    </div>
  );
}
export default ProductCard;
