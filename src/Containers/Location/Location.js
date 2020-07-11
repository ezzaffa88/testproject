import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import LocationForm from "../../Components/LocationForm/LocationForm";
const useStyles = makeStyles({
  root: {
    display: "flex",
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

  return (
    <Container>
      <LocationForm {...data} />
    </Container>
  );
};

export default Location;
