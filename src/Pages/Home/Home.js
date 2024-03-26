import { Paper, Typography, Button } from "@mui/material";
import Header from "../../Components/Header";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { cart } = useContext(CartContext);
  let navigate = useNavigate();

  const goToSearch = () => {
    let path = `/search`;
    navigate(path);
  };

  return (
    <Paper>
      <Header />
      <Typography variant="h3" component="h2">
        Andrew's Computer Supplies
      </Typography>
      {cart.length > 0 && (
        <>
          <Typography variant="h5" component="h3">
            Welcome back! You have {cart.length} item
            {cart.length === 1 ? "" : "s"} in your cart. How can we help?
          </Typography>
        </>
      )}
      <div className="shoppingButton">
        <Button
          fullWidth
          variant="contained"
          color="success"
          size="large"
          onClick={goToSearch}
        >
          Let's go shopping!
        </Button>
      </div>
    </Paper>
  );
}
