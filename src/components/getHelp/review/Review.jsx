import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { width } from "@mui/system";

export default function Review({ addressData, applicationData }) {
  const [addressDetails, setAddressDetails] = React.useState(
    // addresses.map((address) => address.detail)
    {}
  );
  const [applicationDetails, setApplicationDetails] = React.useState({});

  React.useEffect(() => {
    setAddressDetails(addressData);
    setApplicationDetails(applicationData);

    console.log({ addressDetails, applicationDetails });
    console.log({addressData, applicationData});
  }, []);

  const addresses = [
    {
      name: "First Name",
      detail: addressData.firstName,
    },
    {
      name: "Last Name",
      // desc: 'Another thing',
      detail: addressData.lastName,
    },
    {
      name: "Avalibale Email",
      // desc: 'Something else',
      detail: addressData.email,
    },
    {
      name: "City",
      // desc: 'Best thing of all',
      detail: addressData.city,
    },
    {
      name: "Province",
      detail: addressData.province,
    },
    {
      name: "Postal Code",
      detail:addressData.postalCode,
    },
    {
      name: "Country",
      detail: addressData.country,
    },
  ];

  const application = [
    { name: "Category of Help", detail: applicationData.disorder },
    { name: "Specialized Psychiatrist", detail: applicationData.psychiatrist },
    // { name: "Proposed Date of Session", detail: applicationData.sessionDate },
  ];

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Address summary
      </Typography>
      <List disablePadding>
        {addresses.map((address, i) => (
          <ListItem key={i} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={address.name} />
            <Typography variant="body2" sx={{ color: "gray" }}>
              {address.detail.toUpperCase()}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" >
          <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
            Application Summary
          </Typography>
          <Grid container>
            {application.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom sx={{ color: "gray", width:'100%' }}>
                    {payment.detail}
                  </Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
          <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
            Experience Going Through
          </Typography>
          <Typography
            variant="paragraph"
            gutterBottom
            sx={{ mt: 2, color: "grey" }}
          >
            {applicationData.experience}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
