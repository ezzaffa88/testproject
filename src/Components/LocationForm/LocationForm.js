import React, { useState } from "react";
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import axios from "axios";

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    display: "flex",
    boxShadow: "10px ",
    border: "2px solid black",
    flexDirection: "column",
    width: "400px",
    marginTop: "10px",
    margin: "auto",
    padding: "5px",
  },
});
const LocationForm = (props) => {
  const classes = useStyles();
  const [shortDescLocal, setShortDesc] = useState(props.shortDesc);
  const [teamTextLocal, setTeamText] = useState(props.teamText);
  const [theEndLocal, setTheEnd] = useState(props.theEnd);
  const [theStartLocal, setTheStart] = useState(props.theStart);
  const [titleLocal, setTitle] = useState(props.title);
  const [urlKeyLocal, setUrlKey] = useState(props.urlKey);

  const handleSave = () => {
    console.log("saving...");
    console.log(urlKeyLocal);
    axios
      .put(
        `http://steg-bube.staging-sys.de/api/m1/de/project/project/${props.id}`,

        {
          shortDesc: shortDescLocal,
          teamText: teamTextLocal,
          theEnd: { date: theEndLocal },
          theStart: { date: theStartLocal },
          title: titleLocal,
          urlKey: urlKeyLocal,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("TOKEN"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        props.history.push("/admin");
      });
  };

  return (
    <Paper className={classes.root}>
      <Typography style={{ margin: "auto" }}>Basic Information</Typography>

      <h4>shortDesc :</h4>
      <TextField
        id="standard-multiline-flexible"
        multiline
        rowsMax={20}
        onChange={(v) => setShortDesc(v.target.value)}
        value={shortDescLocal}
      />

      <h4>teamText :</h4>
      <TextField
        id="standard-multiline-flexible"
        multiline
        rowsMax={20}
        value={teamTextLocal}
        onChange={(e) => setTeamText(e.target.value)}
      />

      <h4>theEnd :</h4>
      <TextField
        id="date"
        type="date"
        value={theEndLocal}
        onChange={(e) => setTheEnd(e.target.value)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      {/* <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Date picker inline"
        value={theEndLocal}
        onChange={(e) => setTheEnd(e.target.value)}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      /> */}

      <h4>theStart :</h4>
      <TextField
        type="date"
        id="standard-multiline-flexible"
        value={theStartLocal}
        onChange={(e) => setTheStart(e.target.value)}
      />

      <h4>title :</h4>
      <TextField
        id="standard-multiline-flexible"
        multiline
        rowsMax={20}
        value={titleLocal}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h4>urlKey :</h4>
      <TextField
        id="standard-multiline-flexible"
        multiline
        rowsMax={20}
        value={urlKeyLocal}
        onChange={(e) => setUrlKey(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={() => handleSave()}>
        Save
      </Button>
    </Paper>
  );
};

export default withRouter(LocationForm);
