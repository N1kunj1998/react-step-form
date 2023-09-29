import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography } from "@mui/material";

const theme = createTheme();

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };
  render() {
    const { values }  = this.props;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Confirm User Details</Typography>
            </Toolbar>
          </AppBar>
          <h1>Thank You For Your Submission</h1>
          <p>You will get am email with further instructions</p>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}


export default Success;
