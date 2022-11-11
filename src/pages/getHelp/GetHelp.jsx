import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "../../components/getHelp/addressForm/AddressForm";
import ApplicationForm from "../../components/getHelp/applicationForm/ApplicationForm";
import Review from "../../components/getHelp/review/Review";
import { Fragment, useState } from "react";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link className="link" to="/">
        mentalhealth
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = [
  "Personal address",
  "Application details",
  "Review your application",
];

const theme = createTheme();

export default function GetHelp({ disorders, psychiatrists }) {
  const [activeStep, setActiveStep] = useState(0);
  const [addressData, setAddressData] = useState({});
  const [applicationData, setApplicationData] = useState({});
  const [disable, setDisable] = useState(false);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm getAddressData={getAddressData} />;
      case 1:
        return (
          <ApplicationForm
            disorders={disorders}
            getApplicationData={getApplicationData}
            psychiatrists={psychiatrists}
          />
        );
      case 2:
        return (
          <Review addressData={addressData} applicationData={applicationData} />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getAddressData = (data) => {
    setAddressData(data);
    // if (data) {
    //   setDisable(false);
    // }
  };
  const getApplicationData = (data) => {
    setApplicationData(data);
    // if (data) {
    //   setDisable(false);
    // }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <Link to="/" className="link">
              <h1>Mental Health</h1>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            GET HELP
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your application.
              </Typography>
              <Typography variant="subtitle1" sx={{ justifyContent: "center" }}>
                Your application number is #2001539. We have emailed your
                application confirmation, and will send you an update when your
                application to get help has assigned to the your preferred
                psychiatrist.
                <Button
                  href="/"
                  sx={{
                    width: "100%",
                    backgroundColor: "lightgrey",
                    fontWeight: 600,
                  }}
                >
                  Home
                </Button>
              </Typography>
            </Fragment>
          ) : (
            <Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  disabled={disable}
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1
                    ? "Submit Application"
                    : "Next"}
                </Button>
              </Box>
            </Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
