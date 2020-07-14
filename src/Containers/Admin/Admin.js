import React, { Component } from "react";
import TableList from "../../Components/TableList/TableList";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {
  DialogTitle,
  Button,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Admin extends Component {
  state = {
    data: [],
    open: false,
    currentData: {},
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    axios
      .get("http://steg-bube.staging-sys.de/api/m1/de/project/project", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("TOKEN"),
        },
      })
      .then((response) => {
        if (response && response.data) {
          this.setState({
            data: response.data,
          });
        }
      });
  }
  handleDelete = (data) => {
    this.setState(
      {
        currentData: data,
      },
      () => this.handleClickOpen()
    );
  };

  //dialog methods
  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  handleOk = () => {
    axios
      .delete(
        `http://steg-bube.staging-sys.de/api/m1/de/project/project/${this.state.currentData.id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("TOKEN"),
          },
        }
      )
      .then((response) => {
        alert("Deleted");
        this.handleClose();
        this.fetchData();
      });
  };
  handleEdit = (rowData) => {
    this.props.history.push(`/Project/${rowData.id}`);
  };

  render() {
    //console.log(this.state.data);
    const columns = [
      { title: "Short Description", field: "shortDesc" },
      {
        title: "Team Text",
        field: "teamText",
      },
      { title: "End On", field: "theEnd" },
      { title: "Starts On", field: "theStart" },
      { title: "Title", field: "title" },
      { title: "Url Key", field: "urlKey" },
      {
        title: "Edit",
        render: (rowData) => (
          <EditIcon onClick={() => this.handleEdit(rowData)} />
        ),
      },
      {
        title: "Delete",
        render: (rowData) => (
          <DeleteIcon onClick={() => this.handleDelete(rowData)} />
        ),
      },
    ];

    return (
      <div
        style={{
          backgroundImage:
            "linear-gradient(70deg,#b5c4d4, #66d0c8,#4becc1,#228251)",
        }}
      >
        {this.state.data.length > 0 ? (
          <TableList columns={columns} data={this.state.data} />
        ) : (
          <div style={{ margin: "auto" }}> "loding ..."</div>
        )}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Delete Item"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are You Sure ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleOk} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withRouter(Admin);
