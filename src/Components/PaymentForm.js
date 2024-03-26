import { Box, TextField, Button, Typography } from "@mui/material";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function PaymentForm({
  creditCard,
  setCreditCard,
  handleNext,
  handleBack,
}) {
  const currentYear = new Date().getFullYear();

  const formik = useFormik({
    initialValues: {
      cardNumber: creditCard.cardNumber,
      expirationMonth: creditCard.expirationMonth,
      expirationYear: creditCard.expirationYear,
      securityCode: creditCard.securityCode,
      billingZip: creditCard.billingZip,
    },
    onSubmit: (values) => {
      setCreditCard({
        cardNumber: values.cardNumber,
        expirationMonth: values.expirationMonth,
        expirationYear: values.expirationYear,
        securityCode: values.securityCode,
        billingZip: values.billingZip,
      });
      handleNext();
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string()
        .min(15, "Enter a valid card number")
        .max(16, "Enter a valid card number without spaces or dashes")
        .matches(/[0-9]{15,16}/, "Use only numbers"),
      expirationMonth: Yup.number()
        .min(1)
        .max(12, "Enter a valid month (1-12)"),
      expirationYear: Yup.number()
        .min(currentYear, "Expiration date must be in the future")
        .max(currentYear + 15, "Enter a valid year"),
      securityCode: Yup.string().matches(
        /[0-9]{3,4}/,
        "Enter a valid 3 or 4 digit security code"
      ),
      billingZip: Yup.string().max(10, "Zip code should be 5 digits, or Zip+4"),
    }),
  });
  return (
    <>
      <Typography variant="h3" component="h2">
        Payment Details
      </Typography>
      <div>Please provide the following information:</div>
      <div className="addressForm">
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="cardNumber"
            name="cardNumber"
            label="Credit Card Number"
            value={formik.values.cardNumber}
            placeholder="Credit Card Number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.cardNumber && Boolean(formik.errors.cardNumber)
            }
            helperText={formik.touched.cardNumber && formik.errors.cardNumber}
            margin="dense"
          />

          <TextField
            fullWidth
            id="expirationMonth"
            name="expirationMonth"
            label="Expiration Month"
            value={formik.values.expirationMonth}
            placeholder="Expiration Month"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.expirationMonth &&
              Boolean(formik.errors.expirationMonth)
            }
            helperText={
              formik.touched.expirationMonth && formik.errors.expirationMonth
            }
            margin="dense"
          />

          <TextField
            fullWidth
            id="expirationYear"
            name="expirationYear"
            label="Expiration Year"
            value={formik.values.expirationYear}
            placeholder="Expiration Year"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.expirationYear &&
              Boolean(formik.errors.expirationYear)
            }
            helperText={
              formik.touched.expirationYear && formik.errors.expirationYear
            }
            margin="dense"
          />

          <TextField
            fullWidth
            id="securityCode"
            name="securityCode"
            label="Security Code"
            value={formik.values.securityCode}
            placeholder="Security Code"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.securityCode && Boolean(formik.errors.securityCode)
            }
            helperText={
              formik.touched.securityCode && formik.errors.securityCode
            }
            margin="dense"
          />

          <TextField
            fullWidth
            id="billingZip"
            name="billingZip"
            label="Billing ZIP Code"
            value={formik.values.billingZip}
            placeholder="Billing ZIP Code"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.billingZip && Boolean(formik.errors.billingZip)
            }
            helperText={formik.touched.billingZip && formik.errors.billingZip}
            margin="dense"
          />

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
              type="submit"
              sx={{
                width: { xs: "100%", sm: "fit-content" },
              }}
            >
              Next
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
}
