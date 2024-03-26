import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TextField, Button, Typography } from "@mui/material";

export default function AddressForm({ address, setAddress, handleNext }) {
  const formik = useFormik({
    initialValues: {
      email: address.email,
      firstName: address.firstName,
      lastName: address.lastName,
      address1: address.address1,
      address2: address.address2,
      city: address.city,
      state: address.state,
      zip: address.zip,
    },
    onSubmit: (values) => {
      setAddress({
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        address1: values.address1,
        address2: values.address2,
        city: values.city,
        state: values.state,
        zip: values.state,
      });
      handleNext();
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email address required"),
      firstName: Yup.string().required("First name required"),
      lastName: Yup.string().required("Last name required"),
      address1: Yup.string()
        .min(5, "Address should contain street number and street name")
        .required("Address required"),
      city: Yup.string().required("City required"),
      state: Yup.string()
        .required("State required")
        .min(2, "Use 2 digit state abbreviation")
        .max(2, "Use 2 digit state abbreviation"),
      zip: Yup.string().max(10, "Zip code should be 5 digits, or Zip+4"),
    }),
  });

  return (
    <>
      <Typography variant="h3" component="h2">
        Shipping information
      </Typography>
      <div>Please provide the following information:</div>
      <div className="addressForm">
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            value={formik.values.email}
            placeholder="Email Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin="dense"
          />

          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            value={formik.values.firstName}
            placeholder="First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            margin="dense"
          />

          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            value={formik.values.lastName}
            placeholder="Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            margin="dense"
          />

          <TextField
            fullWidth
            id="address1"
            name="address1"
            label="Address 1"
            value={formik.values.address1}
            placeholder="Address 1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address1 && Boolean(formik.errors.address1)}
            helperText={formik.touched.address1 && formik.errors.address1}
            margin="dense"
          />

          <TextField
            fullWidth
            id="address2"
            name="address2"
            label="Address 2"
            value={formik.values.address2}
            placeholder="Address 2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address2 && Boolean(formik.errors.address2)}
            helperText={formik.touched.address2 && formik.errors.address2}
            margin="dense"
          />

          <TextField
            fullWidth
            id="city"
            name="city"
            label="City"
            value={formik.values.city}
            placeholder="City"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            margin="dense"
          />

          <TextField
            fullWidth
            id="state"
            name="state"
            label="State"
            value={formik.values.state}
            placeholder="State"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.astatedress2 && formik.errors.state}
            margin="dense"
          />

          <TextField
            fullWidth
            id="zip"
            name="zip"
            label="ZIP Code"
            value={formik.values.zip}
            placeholder="ZIP Code"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.zip && Boolean(formik.errors.zip)}
            helperText={formik.touched.zip && formik.errors.zip}
            margin="dense"
          />

          <Button color="primary" variant="contained" fullWidth type="submit">
            Next
          </Button>
        </form>
      </div>
    </>
  );
}
