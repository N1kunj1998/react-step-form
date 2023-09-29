import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";

const theme = createTheme();

export class Confirm extends Component {
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
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={values.firstname} />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemText primary="Last Name" secondary={values.lastname} />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemText primary="Email" secondary={values.email} />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemText primary="Occupation" secondary={values.occupation} />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemText primary="City" secondary={values.city} />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemText primary="Bio" secondary={values.bio} />
            </ListItem>
          </List>
          {console.log(values)}
          <Button variant="contained" color="primary" style={styles.button} onClick={this.continue}>
            Confirm & Continue
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

export default Confirm;
