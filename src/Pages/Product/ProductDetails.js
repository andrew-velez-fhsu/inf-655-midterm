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
import { useNavigate } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

export default function ProductDetails() {
  const { id } = useParams();
  const { cart, updateCart, removeFromCart, getFromCart, containsItem } =
    useContext(CartContext);

  const [quantity, setQuantity] = useState(
    getFromCart(id) ? getFromCart(id)["quantity"] : 0
  );
  const [showDelete, setShowDelete] = useState(getFromCart(id) !== undefined);
  //if (Object.keys(cart).includes(id)) setQuantity(cart[id].quantity);

  const product = Products.find((p) => p.id === Number(id));

  console.log(product);
  console.log(cart);

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrementQuantity = () => {
    setQuantity(quantity - 1);
  };

  const checkCartContainsItem = () => {
    let contains = containsItem(id);
    console.log(`Cart contains item ${id} ${contains}`);
    return contains;
  };

  const handleAddToCart = () => {
    updateCart({
      ...product,
      quantity: quantity,
      subTotal: product.cost * quantity,
    });
    setShowDelete(true);
    console.log(`Cart after add: ${cart}`);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setQuantity(0);
    setShowDelete(false);
    console.log(`Cart after remove: ${cart}`);
  };

  let navigate = useNavigate();
  const handleRouteChange = () => {
    let path = `/cart`;
    navigate(path);
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
              {checkCartContainsItem() ? "Update Cart" : "Add to Cart"}
            </Button>
          </div>
          {showDelete && (
            <div>
              <div className="subTotal">
                Sub-total: {USDollar.format(product.cost * quantity)}
              </div>
              <div>
                <Button
                  variant="outlined"
                  startIcon={<DeleteOutline />}
                  onClick={handleRemoveFromCart}
                >
                  Remove from Cart
                </Button>
              </div>
            </div>
          )}
          <div className="checkoutButton">
            <Button
              disabled={cart.length === 0}
              variant="contained"
              onClick={handleRouteChange}
              startIcon={<ShoppingCartCheckoutIcon />}
            >
              Checkout
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
