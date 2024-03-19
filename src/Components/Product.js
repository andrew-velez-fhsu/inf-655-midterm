import { Paper, Grid, Typography, Box, Button } from "@mui/material";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import { useNavigate } from "react-router-dom";

export default function Product({ id, title, description, cost, imageUri }) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/products/${id}`;
    navigate(path);
  };

  return (
    <Grid item xs={3}>
      <Paper elevation={2}>
        <img src={imageUri} alt={description} className="img" />
        <Box className="productBox">
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          <div>{description}</div>
          <div>Price: {cost}</div>
          <Button
            variant="contained"
            startIcon={<ManageSearchOutlinedIcon />}
            onClick={routeChange}
          >
            View
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
}
