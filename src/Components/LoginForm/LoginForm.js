import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "20%",
    borderRadius: "25px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    height: "40%",
  },
  myButton: {
    margin: "auto",
  },
}));

const LoginForm = (props) => {
  const classes = useStyles();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(props);
    axios({
      method: "post",
      url: "http://steg-bube.staging-sys.de/api/auth/m1/de/login",
      data: {
        username: state.email,
        password: state.password,
      },
    })
      .then((res) => {
        window.localStorage.setItem("TOKEN", res.data.loginToken.token);
        props.history.push("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleMailChange = (e) => {
    setState({
      ...state,
      email: e.target.value,
    });
  };
  const handlePasswordChange = (e) => {
    setState({
      ...state,
      password: e.target.value,
    });
  };

  return (
    <Paper className={classes.container}>
      <Typography>User Login</Typography>{" "}
      <TextField
        id="standard-basic"
        label="Email"
        onChange={handleMailChange}
        value={state.email}
      />
      <TextField
        type="password"
        id="inputPassword"
        label="Password"
        onChange={handlePasswordChange}
        value={state.password}
      />
      <Button
        className={classes.myButton}
        type="submit"
        onClick={(e) => handleLogin(e)}
      >
        LOGIN
      </Button>
    </Paper>
  );
};
const mapStateToProps = (state) => {
  return { logged: state.token };
};

const mapDispatchToProps = (dispatch) => {
  // ... normally is an object full of action creators
  return {
    log: (data) =>
      dispatch({
        type: "loggedIn",
        payload: data,
      }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginForm));
