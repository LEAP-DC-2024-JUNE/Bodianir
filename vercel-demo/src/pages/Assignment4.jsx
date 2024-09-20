// Assignment 4: Filter Products by Availability

import { useState } from "react";

// Task: Write a function filterAvailableProducts that takes an array of products, where each product is an object with name, price, and available properties. It should return a new array containing only the products that are available (available: true).

// function filterAvailableProducts(products) {
//   // Use filter to return only available products
// }

// // Example
// const products = [
//   { name: "Laptop", price: 1200, available: true },
//   { name: "Phone", price: 800, available: false },
//   { name: "Tablet", price: 400, available: true },
// ];
const Assignment4 = () => {
  const [Unen, hudal] = useState("");
  const products = [
    { name: "Laptop", price: 1200, available: true },
    { name: "Phone", price: 800, available: false },
    { name: "Tablet", price: 400, available: true },
  ];
  const availableProducts = products.filter((product) => {
    return product.available == Unen;
  });
  const handleClick = (param1) => {
    hudal(param1);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleClick(false)}>Return false</button>
      </div>
      <div>
        <button onClick={() => handleClick(true)}>Return true</button>
      </div>
      <div>Filter Products by Availability</div>
      {availableProducts.map((product, index) => {
        return (
          <div key={index}>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Assignment4;
