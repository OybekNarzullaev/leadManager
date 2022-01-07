import React, { Component } from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { getLeads, deleteLead } from "../../actions/leads";

class Leads extends Component {
  // propslar toifalari
  static propTypes = {
    leads: Proptypes.array.isRequired,
    getLeads: Proptypes.func.isRequired,
    deleteLead: Proptypes.func.isRequired,
  };

  // useEffect o'riga
  componentDidMount() {
    this.props.getLeads();
  }
  render() {
    return (
      <div>
        <h1>Leads</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Messaga</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button
                    onClick={this.props.deleteLead.bind(this, lead.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProp = (state) => ({
  leads: state.leads.leads,
});

export default connect(mapStateToProp, { getLeads, deleteLead })(Leads);
