import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import LocationForm from "../../Components/LocationForm/LocationForm";
const useStyles = makeStyles({
  cont: {
    display: "flex",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    boxShadow: "3px grey",
    flexDirection: "column",
    width: "300px",
  },
});
const Location = (props) => {
  const [data, setData] = useState({});
  const classes = useStyles();
  useEffect(() => {
    getProject();
  }, []);
  const getProject = () => {
    axios
      .get(
        `http://steg-bube.staging-sys.de/api/m1/de/project/project/${props.match.params.id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("TOKEN"),
          },
        }
      )
      .then((response) => setData(response.data));
  };
  const isEmpty = (obj) => {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return JSON.stringify(obj) === JSON.stringify({});
  };
  return (
    <Container classes={classes.cont}>
      {!isEmpty(data) ? <LocationForm {...data} /> : <div>Loading </div>}
    </Container>
  );
};

export default Location;
