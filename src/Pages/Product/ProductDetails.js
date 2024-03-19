import Header from "../../Components/Header";
import { Grid, Typography, Button } from "@mui/material";
import Products from "../../Data/ProductCatalog.json";
import { useParams } from "react-router-dom";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import {
  AddCircleOutline,
  DeleteOutline,
  RemoveCircleOutline,
} from "@mui/icons-material";

export default function ProductDetails() {
  const { id } = useParams();
  const cart = useContext(CartContext);
  const [quantity, setQuantity] = useState(
    Number(id) in cart ? cart[id]["quantity"] : 0
  );
  const [showDelete, setShowDelete] = useState(Number(id) in cart);
  //if (Object.keys(cart).includes(id)) setQuantity(cart[id].quantity);

  const product = Products.find((p) => p.id === Number(id));

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrementQuantity = () => {
    setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    cart[id] = {
      ...product,
      quantity: quantity,
      subTotal: product.cost * quantity,
    };
    setShowDelete(true);
    console.log(cart);
  };

  const handleRemoveFromCart = () => {
    delete cart[id];
    setQuantity(0);
    setShowDelete(false);
    console.log(cart);
  };

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <Header />
      <Typography variant="h3" component="h2">
        Product Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img
            src={product.imageUri}
            alt={product.description}
            className="imgDetail"
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" component="h3">
            {product.title}
          </Typography>
          <div>{product.description}</div>
          <div>Price: {USDollar.format(product.cost)}</div>
          <div>
            <Button
              variant="text"
              disabled={quantity < 1}
              onClick={handleDecrementQuantity}
            >
              <RemoveCircleOutline />
            </Button>
            <span>{quantity}</span>
            <Button variant="text" onClick={handleIncrementQuantity}>
              <AddCircleOutline />
            </Button>

            <Button
              variant="contained"
              startIcon={<AddShoppingCartOutlinedIcon />}
              onClick={handleAddToCart}
              disabled={quantity < 1}
            >
              Add to Cart
            </Button>
          </div>
          {showDelete && (
            <>
              <span>
                Sub-total:{" "}
                {USDollar.format(product.cost * cart[id]["quantity"])}
              </span>
              <Button
                variant="contained"
                startIcon={<DeleteOutline />}
                onClick={handleRemoveFromCart}
              >
                Remove from Cart
              </Button>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}
