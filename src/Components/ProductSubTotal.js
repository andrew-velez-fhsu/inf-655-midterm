import { Grid, Paper, Typography } from "@mui/material";

export default function ProductSubTotal({
  id,
  title,
  description,
  cost,
  imageUri,
  quantity,
  cart,
}) {
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <Grid item xs={12}>
      <Paper elevation={2}>
        <Grid item xs={4}>
          <img src={imageUri} alt={description} className="img" />
        </Grid>
        <Grid item xs={5}>
          {id}
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          <div>{description}</div>
          <div>Price: {cost}</div>
        </Grid>
        <Grid item xs={3}>
          <span>Sub-total: {USDollar.format(cost * quantity)}</span>
        </Grid>
      </Paper>
    </Grid>
  );
}
