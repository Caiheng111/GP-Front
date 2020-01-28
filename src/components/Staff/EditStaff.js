import React, { Component } from "react";
// import {withRouter} from 'react-router-dom'
import "../../css/staff.css";
import axios from "axios";

class CreateStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      name: "",
      aboutText: ""
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAboutText = this.onChangeAboutText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .put(
        process.env.REACT_APP_BACKEND_URL +
          "/admin/edit_staff/" +
          this.props.match.params.id
      )
      .then(res => {
        this.setState({
          name: res.data.name,
          aboutText: res.data.aboutText
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeAboutText(e) {
    this.setState({ aboutText: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const staffObject = {
      name: this.state.name,
      aboutText: this.state.aboutText
    };
    axios
      .put(
        process.env.REACT_APP_BACKEND_URL +
          "/admin/update_staff/" +
          this.props.match.params.id,
        staffObject
      )
      .then(res => {
        console.log(res.data);
        console.log("Staff successfully updated");
      })
      .catch(error => {
        console.log(error);
      });
    // Redirect to Staff List
    this.props.history.push("/admin/staff");
    window.location.reload(true);
  }

  // AWS
  // submitFile = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append('file', this.state.file[0]);
  //   axios.post(process.env.REACT_APP_BACKEND_URL + '/admin/upload_image', formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   }).then(response => {
  //     // handle your response;
  //   }).catch(error => {
  //     console.log(error)
  //     // handle your error
  //   });
  // }

  // handleFileUpload = (event) => {
  //   this.setState({file: event.target.files});
  // }

  render() {
    return (
      <div>
        <div className="staffs">
          <div className="staff-infor"></div>

          <div className="add_staff">
            <h1>Edit Staff Information Here</h1>
            <form onSubmit={this.onSubmit}>
              <div>
                <label>Staff Name</label> <br />
                <input
                  type="text"
                  placeholder={this.state.name}
                  value={this.state.name}
                  onChange={this.onChangeName}
                ></input>
              </div>
              <div>
                <label>Staff Introduction</label> <br />
                <textarea
                  type="text"
                  placeholder={this.state.aboutText}
                  value={this.state.aboutText}
                  onChange={this.onChangeAboutText}
                />
              </div>
              {/* <div onSubmit={this.submitFile}>
                <input label='upload file' type='file' className="upload-image" onChange={this.handleFileUpload} />
                <button type='submit' className="upload">Upload Image</button>
              </div> */}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateStaff;
