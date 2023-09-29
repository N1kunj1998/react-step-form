import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Toolbar, Typography } from "@mui/material";

const theme = createTheme();

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const { values, handleChange } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Enter User Details</Typography>
            </Toolbar>
          </AppBar>
          <TextField
            style={{ marginTop: "1rem" }}
            label="Enter your Occupation"
            variant="outlined"
            placeholder="Occupation"
            onChange={handleChange("occupation")}
            value={values.occupation}
          />
          <br />
          <TextField
            style={{ marginTop: "1rem" }}
            label="Enter your City"
            variant="outlined"
            placeholder="City"
            onChange={handleChange("city")}
            value={values.city}
          />
          <br />
          <TextField
            style={{ marginTop: "1rem" }}
            label="Enter your Bio"
            variant="outlined"
            placeholder="Bio"
            onChange={handleChange("bio")}
            value={values.bio}
          />
          <br />
          <Button variant="contained" color="primary" style={styles.button} onClick={this.continue}>
            Continue
          </Button>
          <Button variant="contained" color="secondary" style={styles.button} onClick={this.continue}>
            Back
          </Button>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormPersonalDetails;
