import { Button, Grid, Typography, Box } from "@mui/material";
import ProductSubTotal from "./ProductSubTotal";
import CartTotal from "./CartTotal";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

export default function Review({
  address,
  creditCard,
  handleNext,
  handleBack,
}) {
  const { cart } = useContext(CartContext);
  const { USDollar } = useContext(CartContext);

  let total = cart
    .map((item) => item.subTotal)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

  return (
    <>
      <Typography variant="h3" component="h2">
        Review your order
      </Typography>

      <Typography variant="h5" component="h3">
        Order Summary
      </Typography>

      <Grid container>
        {cart.map((item) => {
          return <ProductSubTotal {...item} disableEditing={true} />;
        })}
        <CartTotal total={total} readOnly={true} />
      </Grid>

      <div className="subSection">
        <Typography variant="h5" component="h3">
          Shipping information
        </Typography>
        <div>
          {address.firstName} {address.lastName}
        </div>
        <div>{address.email}</div>
        <div>{address.address1}</div>
        <div>{address.address2}</div>
        <div>
          {address.city}, {address.state} {address.zip}
        </div>
      </div>

      <div className="subSection">
        <Typography variant="h5" component="h3">
          Billing Information
        </Typography>
        <div>
          <strong>{USDollar.format(total)}</strong> will be charged to credit
          card ending in ****
          {creditCard.cardNumber.slice(-4)}
        </div>
      </div>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          justifyContent: "space-between",
          alignItems: "end",
          flexGrow: 1,
          gap: 1,
          pb: { xs: 12, sm: 0 },
          mt: { xs: 2, sm: 0 },
          mb: "60px",
        }}
      >
        <Button
          startIcon={<ChevronLeftRoundedIcon />}
          onClick={handleBack}
          variant="text"
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          Previous
        </Button>

        <Button
          variant="contained"
          endIcon={<ChevronRightRoundedIcon />}
          onClick={handleNext}
          sx={{
            width: { xs: "100%", sm: "fit-content" },
          }}
        >
          Place order
        </Button>
      </Box>
    </>
  );
}
