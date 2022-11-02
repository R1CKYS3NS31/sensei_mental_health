import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { PsychologyAlt } from "@mui/icons-material";

export default function ApplicationForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Applcation Details
        <PsychologyAlt />
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            select
            id="disorder"
            label="Category of Help(Disoder)"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            select
            id="psychiatrist"
            label="Psychiatrist"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <TextField
            required
            id="experience"
            label="Brief description of issue you're experiencing"
            multiline
            fullWidth
            autoComplete="cc-exp"
            // variant="standard"
          />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid> */}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember application details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
