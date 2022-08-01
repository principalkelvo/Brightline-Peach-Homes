import FormCSS from "./Form.module.css";
import React, { useState } from "react";
import Input from "./Input";

function Form(id, type, name, value, onChange, label) {
  // console.log(id, type, name, value)

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
    console.log("input");
  };
  //owner name, contacts, property name, category dropdown, price, location, description, size in ft,

  return (
    <div className={FormCSS.formContainer}>
      <form onSubmit={handleOnSubmit} className={FormCSS.form}>
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
        <Input
          id="sale"
          type="text"
          name="sale"
          value={input.sale}
          onChange={handleOnChange}
          label="sale price"
        />
        <Input
          id="rent"
          type="text"
          name="rent"
          value={input.rent}
          onChange={handleOnChange}
          label="rent price"
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
        <Input
          id="size"
          type="text"
          name="size"
          value={input.size}
          onChange={handleOnChange}
          label="size"
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
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
