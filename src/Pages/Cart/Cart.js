import { useState, useContext } from "react";
import Header from "../../Components/Header";
import { CartContext } from "../../Context/CartContext";
import { Grid, Typography, Button } from "@mui/material";
import ProductSubTotal from "../../Components/ProductSubTotal";

export default function Cart() {
  const [subTotal, setSubtotal] = useState(0);
  const cart = useContext(CartContext);

  for (const [key, value] of Object.entries(cart)) {
    console.log(`${key}: ${value}`);
  }

  const renderLine = () => {
    for (const [key, value] of Object.entries(cart)) {
      return (
        <div>
          `${key}: ${value}`
        </div>
      );
    }
  };

  return (
    <>
      <Header />
      <Typography variant="h3" component="h2">
        Your Cart
      </Typography>
      <renderLine />
      <Grid container></Grid>
    </>
  );
}
