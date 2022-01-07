import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import Proptypes from "prop-types";
import { connect } from "react-redux";

export class Alerts extends Component {
  static propTypes = {
    error: Proptypes.object.isRequired,
    message: Proptypes.object.isRequired,
  };
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.message)
        alert.error(`Message: ${error.msg.message.join()}`);
    }
    if (message !== prevProps.message) {
      if (message.deleteLead) {
        alert.success(message.deleteLead);
      }
      if (message.addedLead) {
        alert.success(message.addedLead);
      }
    }
  }
  render() {
    return <Fragment></Fragment>;
  }
}

const mapStateToProp = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProp)(withAlert()(Alerts));
