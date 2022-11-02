import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PsychologyAlt } from "@mui/icons-material";
import { MenuItem, Stack } from "@mui/material";
import dayjs from "dayjs";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
export default function ApplicationForm() {
  const newDate = new Date()
  const [currency, setCurrency] = React.useState("EUR");
  const [value, setValue] = React.useState(dayjs(newDate.Date));

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleChangeDate = (newValue) => {
    setValue(newValue);
  };
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
            value={currency}
            onChange={handleChange}
            helperText="Please select area of help you need"
            variant="standard"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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
            value={currency}
            onChange={handleChange}
            helperText="Please a preferred psychiatrist"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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
        <Grid item xs={12} md={6}>
          {/* <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          /> */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack
            //  spacing={3}
            >
              <DateTimePicker
                label="Date&Time picker"
                value={value}
                onChange={handleChangeDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </Grid>
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
