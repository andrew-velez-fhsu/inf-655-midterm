import { useContext } from "react";
import Header from "../../Components/Header";
import { CartContext } from "../../Context/CartContext";
import { Grid, Typography } from "@mui/material";
import ProductSubTotal from "../../Components/ProductSubTotal";
import CartTotal from "../../Components/CartTotal";

export default function Cart() {
  const { cart } = useContext(CartContext);

  let total = cart
    .map((item) => item.subTotal)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

  return (
    <>
      <Header />
      <Typography variant="h3" component="h2">
        Your Cart
      </Typography>

      <Grid container>
        {cart.map((item) => {
          return (
            <ProductSubTotal key={item.id} {...item} disableEditing={false} />
          );
        })}
        <CartTotal total={total} />
      </Grid>
    </>
  );
}
