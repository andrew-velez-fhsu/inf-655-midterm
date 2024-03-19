import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Typography } from "@mui/material";

export default function Header() {
  return (
    <div className="header">
      <Typography variant="h2" component="h1">
        Andrew Velez Midterm
      </Typography>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <ShoppingCartOutlinedIcon />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
