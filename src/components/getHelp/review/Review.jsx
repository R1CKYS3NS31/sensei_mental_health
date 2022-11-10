import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const addresses = [
  {
    name: "First Name",
    detail: "George",
  },
  {
    name: "Last Name",
    // desc: 'Another thing',
    detail: "Musinde",
  },
  {
    name: "Avalibale Email",
    // desc: 'Something else',
    detail: "georgemusinde@gmail.com",
  },
  {
    name: "City",
    // desc: 'Best thing of all',
    detail: "Nairobi",
  },
  {
    name: "Province",
    detail: "Nairobi",
  },
  {
    name: "Postal Code",
    detail: "100",
  },
  {
    name: "Country",
    detail: "Kenya",
  },
];

const payments = [
  { name: "Category of Help", detail: "Bipolar" },
  { name: "Specialized Psychiatrist", detail: "Mr. John Smith" },
  { name: "Proposed Date of Session", detail: "04/2024" },
];

export default function Review({ addressData, applicationData }) {
  const [addressDetails, setAddressDetails] = React.useState({});
  const [applicationDetails, setApplicationDetails] = React.useState({});

  React.useEffect(() => {
    setAddressDetails(addressData);
    setApplicationDetails(applicationData);

    console.log({ addressDetails, applicationDetails });
  }, [addressData, applicationData]);

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Address summary
      </Typography>
      <List disablePadding>
        {addresses.map((address) => (
          <ListItem key={address.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={address.name} />
            <Typography variant="body2" sx={{ color: "gray" }}>
              {address.detail}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
            Application Summary
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom sx={{ color: "gray" }}>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            inventore ipsa suscipit, sed adipisci voluptates veniam laudantium
            quaerat totam maiores debitis aspernatur, eveniet atque officia
            odio, ex necessitatibus eos repellat.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
