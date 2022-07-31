import ProductViewCSS from "./ProductView.module.css";
import React from "react";
import { useParams } from "react-router";

function ProductView({ estates }) {
  const { id } = useParams();
  console.log("estates 23", estates);
  console.log("estates 23 first", id);

  // const filteredEsto = estates.filter((estate) => String(estate.id )=== id);
  // console.log("filteredEsto", filteredEsto);
  // const mapEstate = filteredEsto.map((estate) =>(
  //   <div key={estate.id}>hello</div>
  // ))

  //mismatch issues where the root param is a string type and product id is an integer type. This is why we get undefined values or empty arrays
  // const filteredEstates = estates
  //   .filter((here) =>
  //   here.id === id)
  //   .map((here) => (
  //     <div key={here.id}>
  //       <ul>
  //         <li>hello</li>
  //       </ul>
  //     </div>
  //   ));

  return (
    <section className={ProductViewCSS.product} >
      {/* {mapEstate} */}
      {estates
        .filter((estate) => String(estate.id) === id) //change id to string for better comparison (type safe comparison)
        .map((estate) => (
          <div key={estate.id}>
            <h1 className={ProductViewCSS.title}>{estate.title}</h1>
            <div className="columns">
              <div className="column is-7">
                <div className={ProductViewCSS.productImage}>
                  <img src={estate.image} alt={estate.title} />
                </div>
                <div className={ProductViewCSS.productVariants}>
                  {estate.variants.map((variant, index) => (
                    <div className={ProductViewCSS.variant} key={index}>
                      <img src={variant} alt="variant" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="column is-5">
                <div className={ProductViewCSS.button}>
                  <button>Book Now</button>
                </div>
                <div className={ProductViewCSS.details}>
                  <ul >
                    <li>SqFt: {estate.size}</li>
                    <li>ratings: {estate.rating}/5</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="columns ">
              <div className="column is-3">
                <div className={ProductViewCSS.desc}>
                  <h5>Description</h5>
                <div className={ProductViewCSS.content}>
                  <p>{estate.description}</p>
                  </div>
                </div>
              </div>
              <div className="column is-3">
                <div className={ProductViewCSS.desc }>
                  <h5>Contact Us</h5>
                <div className={ProductViewCSS.content}>
                  <p>{estate.contacts.phoneNumber}</p>
                  <p>{estate.contacts.email}</p>
                  <p>{estate.contacts.email}</p>
                  </div>
                </div>
              </div>
              <div className="column is-3">
                <div className={ProductViewCSS.desc + " "+ ProductViewCSS.noRightBorder}>
                  <h5>More Details</h5>
                <div className={ProductViewCSS.content}>
                  <p>{estate.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
export default ProductView;
