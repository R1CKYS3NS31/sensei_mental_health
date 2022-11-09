import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PsychologyAlt } from "@mui/icons-material";
import { Button, MenuItem, Stack } from "@mui/material";
import dayjs from "dayjs";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";

export default function ApplicationForm({ disorders,getApplicationData }) {
  const newDate = new Date();
  const [disorder, setDisorder] = React.useState("");
  const [value, setValue] = React.useState(dayjs(newDate.Date));
  const handleChange = (event) => {
    setDisorder(event.target.value);
  };

  const handleChangeDate = (newValue) => {
    setValue(newValue);
  };
  const onSubmitApplication = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    getApplicationData({
      disorder: data.get("disorder"),
      psychiatrist: data.get("psychiatrist"),
      experience: data.get("experience"),
      sessionDate: value.$d,
    });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Applcation Details
        <PsychologyAlt />
      </Typography>
      <form onSubmit={onSubmitApplication}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              select
              id="disorder"
              name="disorder"
              label="Category of Help(Disoder)"
              fullWidth
              autoComplete="cc-name"
              value={disorder}
              onChange={handleChange}
              helperText="Please select area of help you need"
              variant="standard"
            >
              {disorders.map((disorder, i) => (
                <MenuItem key={disorder.id} value={disorder.title}>
                  {disorder.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              select
              id="psychiatrist"
              name="psychiatrist"
              label="Psychiatrist"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
              value={disorder}
              onChange={handleChange}
              helperText="Please a preferred psychiatrist"
            >
              {disorders.map((disorder, i) => (
                <MenuItem key={disorder.id} value={disorder.title}>
                  {disorder.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              required
              id="experience"
              name="experience"
              label="Brief description of issue you're experiencing"
              multiline
              fullWidth
              autoComplete="cc-exp"
              // variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DateTimePicker
                  required
                  id="sessionDate&Time"
                  name="sessionDate&Time"
                  label="Session Date&Time"
                  value={value}
                  onChange={handleChangeDate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveCard" value="yes" />
              }
              label="Remember application details for next time"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                fontWeight: 600,
                backgroundColor: "lightblue",
              }}
            >
              Submit Application Details
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
