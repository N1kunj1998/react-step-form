import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Toolbar, Typography } from "@mui/material";

const theme = createTheme();

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
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
            label="Enter your first name"
            variant="outlined"
            placeholder="First Name"
            onChange={handleChange("firstname")}
            value={values.firstname}
          />
          <br />
          <TextField
            style={{ marginTop: "1rem" }}
            label="Enter your last name"
            variant="outlined"
            placeholder="Last Name"
            onChange={handleChange("lastname")}
            value={values.lastname}
          />
          <br />
          <TextField
            style={{ marginTop: "1rem" }}
            label="Enter your email"
            variant="outlined"
            placeholder="Email"
            onChange={handleChange("email")}
            value={values.email}
          />
          <br />
          <Button variant="contained" color="primary" style={styles.button} onClick={this.continue}>
            Continue
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

export default FormUserDetails;
