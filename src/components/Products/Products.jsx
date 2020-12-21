import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running Shoes.",
    price: "$5",
    image:
      "https://i.pinimg.com/originals/70/27/60/7027609b959ed10a53377982b10950d3.jpg",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook.",
    price: "$10",
    image:
      "https://i.gadgets360cdn.com/products/large/apple-macbook-pro-mvvj2ll-1200x800-1574233160.jpg",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid iten key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
