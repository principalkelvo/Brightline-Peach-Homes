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
    <section className={ProductViewCSS.product}>
      {/* {mapEstate} */}
      {estates
        .filter((estate) => String(estate.id) === id) //change id to string for better comparison (type safe comparison)
        .map((estate) => (
          <div key={estate.id}>
            <div className="columns">
              <div className="column is-7">
                <div className={ProductViewCSS.productImage}>
                  <img src={estate.image} alt={estate.title} />
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
                    <li>SqFt: {estate.size}</li>
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
          </div>
        ))}
    </section>
  );
}
export default ProductView;
