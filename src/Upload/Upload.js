import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon, Button, FormControl } from 'react-bootstrap';
import './Upload.css';

class Upload extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          <h1>Upload a New Food!</h1>
          <Panel header="Food">
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Short desc of the food" />
          <FormControl.Feedback />

          <Button bsStyle="primary" block name="derp">Farts</Button>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Upload;
