import { useState, useContext } from "react";
import AddressForm from "../../Components/AddressForm";
import Header from "../../Components/Header";
import { Step, Typography, StepLabel, Stepper } from "@mui/material";
import PaymentForm from "../../Components/PaymentForm";
import Review from "../../Components/Review";
import { CartContext } from "../../Context/CartContext";

export default function Checkout() {
  const [address, setAddress] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [creditCard, setCreditCard] = useState({
    cardNumber: "",
    expirationMonth: null,
    expirationYear: null,
    securityCode: "",
    billingZip: "",
  });
  const { removeAllFromCart } = useContext(CartContext);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);

    if (activeStep + 1 === steps.length) {
      ///this would normally submit the order for processing. For now, clear the data
      setCreditCard({
        cardNumber: "",
        expirationMonth: null,
        expirationYear: null,
        securityCode: "",
        billingZip: "",
      });
      setAddress({
        email: "",
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
      });
      removeAllFromCart();
    }
  };

  const handleBack = () => {
    console.log("Here");
    setActiveStep(activeStep - 1);
  };

  const steps = ["Shipping address", "Payment details", "Review your order"];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressForm
            setAddress={setAddress}
            address={address}
            handleNext={handleNext}
          />
        );
      case 1:
        return (
          <PaymentForm
            creditCard={creditCard}
            setCreditCard={setCreditCard}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <Review
            address={address}
            creditCard={creditCard}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <>
      <Header />
      <Stepper id="stepper" activeStep={activeStep}>
        {steps.map((label) => (
          <Step
            sx={{
              ":first-child": { pl: 0 },
              ":last-child": { pr: 0 },
            }}
            key={label}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography variant="h5">Thank you for your order!</Typography>
          <div>
            We have emailed your order confirmation and will contact you once it
            has shipped.
          </div>
        </>
      ) : (
        <>{getStepContent(activeStep)}</>
      )}
    </>
  );
}
