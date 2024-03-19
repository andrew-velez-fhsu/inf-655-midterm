import { useState } from "react";
import { Typography, Grid } from "@mui/material";
import Header from "../../Components/Header";
import Product from "../../Components/Product";

export default function Search({ products }) {
  const [query, setQuery] = useState("");

  return (
    <>
      <Header />
      <Typography variant="h3" component="h2">
        Product Search
      </Typography>
      <div className="search">
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="Search the catalog"
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <Grid container spacing={3}>
        {products
          .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
          .map((p) => (
            <Product
              key={p.id}
              id={p.id}
              title={p.title}
              description={p.description}
              cost={p.cost}
              imageUri={p.imageUri}
            />
          ))}
      </Grid>
    </>
  );
}
