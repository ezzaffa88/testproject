import React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Avatar } from "@material-ui/core";
import myImage from "../../assets/images/testt.png";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  wrapper: {
    backgroundImage: "linear-gradient(70deg,#b5c4d4, #66d0c8,#4becc1,#228251)",
    height: "100vh",
  },
  image: {
    margin: "auto",
    marginBottom: "70px",
    width: theme.spacing(70),
    height: theme.spacing(40),
  },
}));
const Login = () => {
  const classes = useStyles();
  return (
    <Container className={classes.wrapper}>
      <Avatar
        variant="square"
        sizes="large"
        className={classes.image}
        alt="logo"
        src={myImage}
      />
      <div className={classes.container}>
        <LoginForm />
      </div>
    </Container>
  );
};

export default Login;
