import React, { useState } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const divStyle = {
    border: "1px solid steelblue",
    width: "90%",
    margin: "0 auto",
  };

  function addProduct(newProduct) {
    setCart([newProduct, ...cart]);
  }

  function updateProduct(productUpdated) {
    const changeCart = cart.map((element) =>
      element.id === productUpdated.id ? productUpdated : element
    );
    setCart(changeCart);
  }

  function deleteProduct(id) {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  }

  return (
    <>
      <h1>Javascript Technologies</h1>

      <button
        onClick={() =>
          addProduct({
            id: Date.now(),
            title: "new product",
            desc: "Description new product",
          })
        }
      >
        Add Technology
      </button>

      {cart.map((product) => (
        <div key={product.id} style={divStyle}>
          <h2>{product.title}</h2>
          <p>{product.desc}</p>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
          <button
            onClick={() =>
              updateProduct({
                id: product.id,
                title: "Update title",
                desc: "Update description",
              })
            }
          >
            Update
          </button>
        </div>
      ))}
    </>
  );
};

export default ShoppingCart;
