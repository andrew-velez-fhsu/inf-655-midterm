import { Button, Grid } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

export default function CartTotal({ total, readOnly }) {
  const { USDollar } = useContext(CartContext);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/checkout`;
    navigate(path);
  };

  return (
    <>
      <Grid className="cartItem" container item>
        <Grid item xs={9} />
        <Grid className="cartItemCost" item xs={3}>
          <div className="total">Total: {USDollar.format(total)}</div>
          {!readOnly && (
            <Button
              disabled={total <= 0.0}
              variant="contained"
              onClick={routeChange}
              startIcon={<ShoppingCartCheckoutIcon />}
            >
              Checkout
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
}
