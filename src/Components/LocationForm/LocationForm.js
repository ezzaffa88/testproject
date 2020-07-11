import React from "react";
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    display: "flex",
    boxShadow: "3px grey",
    flexDirection: "column",
    width: "400px",
    margin: "auto",
    padding: "5px",
  },
});
const LocationForm = (props) => {
  const classes = useStyles();

  const handleSave = () => {
    console.log("saving...");
  };

  return (
    <Paper className={classes.root}>
      <Typography style={{ margin: "auto" }}>Basic Information</Typography>

      <h4>shortDesc :</h4>
      <TextField
        id="standard-multiline-flexible"
        multiline
        rowsMax={20}
        value={props.shortDesc}
      />

      <h4>teamText :</h4>
      <TextField
        id="standard-multiline-flexible"
        multiline
        rowsMax={20}
        value={props.teamText}
      />

      <h4>theEnd :</h4>
      <TextField
        id="standard-multiline-flexible"
        multiline
        rowsMax={20}
        value={props.teamText}
      />

      <h4>theStart :</h4>
      <TextField
        id="standard-multiline-flexible"
        multiline
        rowsMax={20}
        value={props.theStart}
      />

      <h4>title :</h4>
      <TextField
        id="standard-multiline-flexible"
        multiline
        rowsMax={20}
        value={props.title}
      />
      <h4>urlKey :</h4>
      <TextField
        id="standard-multiline-flexible"
        multiline
        rowsMax={20}
        value={props.urlKey}
      />
      <Button onClick={() => handleSave()}>Save</Button>
    </Paper>
  );
};

export default LocationForm;
