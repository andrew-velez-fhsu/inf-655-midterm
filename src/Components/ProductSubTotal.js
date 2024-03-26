import { Grid, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { DeleteOutline } from "@mui/icons-material";

export default function ProductSubTotal({
  id,
  title,
  description,
  cost,
  imageUri,
  quantity,
  disableEditing,
}) {
  const { USDollar, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <>
      <Grid className="cartItem" container item>
        <Grid className="cartItemImage" item xs={4}>
          <img src={imageUri} alt={description} className="img" />
        </Grid>
        <Grid className="cartItemDetails" item xs={5}>
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          <div>{description}</div>
          <div>Price: {cost}</div>
        </Grid>
        <Grid className="cartItemCost" item xs={3}>
          <div>Number in Cart: {quantity}</div>
          <div>Sub-total: {USDollar.format(cost * quantity)}</div>
          {!disableEditing && (
            <Button
              variant="contained"
              startIcon={<DeleteOutline />}
              onClick={handleRemoveFromCart}
            >
              Remove from Cart
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
}
