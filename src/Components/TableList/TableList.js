import React from "react";
import { makeStyles } from "@material-ui/core";
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles({
  root: {
    width: "80%",
  },
});
const TableList = (props) => {
  console.log("props", props);
  const classes = useStyles();

  console.log();

  return (
    <Container className={classes.root}>
      <MaterialTable
        title="Location Manager"
        columns={props.columns}
        data={props.data}
      />
    </Container>
  );
};
export default TableList;
