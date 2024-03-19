import { Paper, Typography } from "@mui/material";
import Header from "../../Components/Header";

export default function Home() {
  return (
    <Paper>
      <Header />
      <Typography variant="h3" component="h2">
        Home
      </Typography>
    </Paper>
  );
}
