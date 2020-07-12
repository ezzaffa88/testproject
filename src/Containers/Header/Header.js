import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import { withRouter } from "react-router-dom";

import {
  AppBar,
  IconButton,
  Typography,
  Button,
  Toolbar,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const handleHomeClick = () => {
    props.history.push("/admin");
  };
  const handleLogout = () => {
    localStorage.clear();
    props.history.push("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <HomeIcon onClick={handleHomeClick} />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Rezgui Test App
        </Typography>
        {localStorage.getItem("TOKEN") && (
          <Button onClick={handleLogout} color="inherit">
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
