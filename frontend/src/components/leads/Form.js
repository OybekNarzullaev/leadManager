import React, { Component } from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { addLead } from "../../actions/leads";

class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };
  static propTypes = {
    addLead: Proptypes.func.isRequired,
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });
  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <div className="mb-5 mt-3 card card-body">
        <form onSubmit={this.onSubmit}>
          <h1>Add Lead</h1>
          <div className="form-group mt-3 col-sm">
            <label htmlFor="name" className="htmlF-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group col-sm mt-3">
            <label htmlFor="exampleInputEmail1" className="htmlF-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.onChange}
              name="email"
              value={email}
            />
          </div>
          <div className="form-group col-sm mt-3">
            <label htmlFor="message" className="htmlF-label">
              Messaga
            </label>
            <textarea
              type="textTield"
              className="form-control "
              id="message"
              onChange={this.onChange}
              name="message"
              value={message}
            />
          </div>
          <div className="form-group  mt-3">
            <button type="submit" className="col-sm btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addLead })(Form);
