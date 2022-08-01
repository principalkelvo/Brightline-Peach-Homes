import FormCSS from "./Form.module.css";
import React, { useState } from "react";
import Input from "./Input";

function Form({ onAddHome }) {
  const [rent, setRent] = useState(false);

  // function handleRent(){
  //   setRent(true);
  // }
  // function handleSale(){
  //   setRent(false);
  // }

  //form data
  const [input, setInput] = useState({
    title: "",
    category: "",
    image: "",
    sale: "",
    rent: "",
    country: "",
    city: "",
    street: "",
    description: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    profilePic: "",
    email: "",
    size: "",
    variants: ["", "", "", "", "", ""],
  });
  // function handleOnChange(e){
  //   console.log(e.target.value);
  // }
  // function handleVariantsOnChange(e,index){
  //   this.setState({
  //     variants: this.state.variants.map((variant,i)=>{
  //       if(i === index) return e.target.value;
  //       return variant
  //     })
  //   })
  // }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    fetch("http://localhost:4000/homes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "moshi villa",
        category: "villa",
        image:
          "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520014434/chatbot-imoveis/ap-america.jpg",
        forSale: !rent,
        price: {
          rent: 2000,
          sale: 50000,
        },
        location: {
          country: "Kenya",
          city: "Nairobi",
          street: "Korogocho",
        },
        owner: {
          firstName: "principal",
          lastName: "kelvin",
          profilePic:
            "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520014276/chatbot-imoveis/casa-costa-silva.jpg",
        },
        description: "get your dream home today",
        contacts: {
          phoneNumber: "+254712345678",
          email: "johndoe@gmail.com",
        },
        date: {
          added: "2/4/2022",
          range: 2,
        },
        size: input.size,
        featured: false,
        rating: 0,
        variants: [
          "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520014434/chatbot-imoveis/ap-america.jpg",
          "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520014434/chatbot-imoveis/ap-america.jpg",
          "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520014434/chatbot-imoveis/ap-america.jpg",
          "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520014434/chatbot-imoveis/ap-america.jpg",
        ],
      }),
    })
      .then((r) => r.json())
      .then((newHome) => onAddHome(newHome));
    const submittedFormData = {
      title: "",
      category: "",
      image: "",
      sale: "",
      rent: "",
      country: "",
      city: "",
      street: "",
      description: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      profilePic: "",
      email: "",
      size: "",
      variants: ["", "", "", "", "", ""],
    };
    setInput(submittedFormData);
    console.log("submitted formData", input);
    console.log("cleared formData", submittedFormData);
  };
  //owner name, contacts, property name, category dropdown, price, location, description, size in ft,

  return (
    <div className={FormCSS.formContainer}>
      <h3>Add Your Perfect Home</h3>
      <div className={FormCSS.category}>
        <div
          className={
            rent
              ? FormCSS.categorySale
              : FormCSS.activeCategory + " " + FormCSS.categorySale
          }
          onClick={() => setRent(false)}
        >
          for sale
        </div>
        <div
          className={
            rent
              ? FormCSS.activeCategory + " " + FormCSS.categoryRent
              : FormCSS.categoryRent
          }
          onClick={() => setRent(true)}
        >
          for rent
        </div>
      </div>
      <form onSubmit={handleOnSubmit} className={FormCSS.form}>
        <div className={FormCSS.inputs}>
          <Input
            id="title"
            type="text"
            name="title"
            value={input.title}
            onChange={handleOnChange}
            label="title"
          />
          <Input
            id="category"
            type="text"
            name="category"
            value={input.category}
            onChange={handleOnChange}
            label="category"
          />
          <Input
            id="image"
            type="text"
            name="image"
            value={input.image}
            onChange={handleOnChange}
            label="image"
          />
          {rent ? (
            <Input
              id="rent"
              type="text"
              name="rent"
              value={input.rent}
              onChange={handleOnChange}
              label="rent price"
            />
          ) : (
            <Input
              id="sale"
              type="text"
              name="sale"
              value={input.sale}
              onChange={handleOnChange}
              label="sale price"
            />
          )}
          <Input
            id="size"
            type="text"
            name="size"
            value={input.size}
            onChange={handleOnChange}
            label="size"
          />
          <Input
            id="country"
            type="text"
            name="country"
            value={input.country}
            onChange={handleOnChange}
            label="country"
          />
          <Input
            id="city"
            type="text"
            name="city"
            value={input.city}
            onChange={handleOnChange}
            label="city"
          />
          <Input
            id="street"
            type="text"
            name="street"
            value={input.street}
            onChange={handleOnChange}
            label="street"
          />
          <Input
            id="description"
            type="text"
            name="description"
            value={input.description}
            onChange={handleOnChange}
            label="description"
          />
          <Input
            id="firstName"
            type="text"
            name="firstName"
            value={input.firstName}
            onChange={handleOnChange}
            label="First Name"
          />
          <Input
            id="lastName"
            type="text"
            name="lastName"
            value={input.lastName}
            onChange={handleOnChange}
            label="last Name"
          />

          <Input
            id="profilePic"
            type="text"
            name="profilePic"
            value={input.profilePic}
            onChange={handleOnChange}
            label="Profile image"
          />
          <Input
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            value={input.phoneNumber}
            onChange={handleOnChange}
            label="phone Number"
          />
          <Input
            id="email"
            type="text"
            name="email"
            value={input.email}
            onChange={handleOnChange}
            label="email"
          />

          {/* <Input
          id="variant1"
          type="text"
          name="variants"
          value={input.variants[0]}
          onChange={handleOnChange}
          label="variant"
        />
        <Input
          id="variant2"
          type="text"
          name="variant"
          value={input.variants[1]}
          onChange={handleOnChange}
          label="variants"
        />
        <Input
          id="variant3"
          type="text"
          name="variant"
          value={input.variants[2]}
          onChange={handleOnChange}
          label="variants"
        />
        <Input
          id="variant4"
          type="text"
          name="variant"
          value={input.variants[3]}
          onChange={handleOnChange}
          label="variant"
        />
        <Input
          id="variant5"
          type="text"
          name="variant"
          value={input.variants[4]}
          onChange={handleOnChange}
          label="variant"
        /> */}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
