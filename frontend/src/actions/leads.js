import axios from "axios";
import { createMessage } from "./messages";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from "./types";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export const getLeads = () => (dispatch) => {
  axios
    .get("/api/leads/")
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteLead = (id) => (dispatch) => {
  axios
    .delete(`/api/leads/${id}`)
    .then((res) => {
      dispatch(createMessage({ deleteLead: "lead Deleted" }));
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// add lead
export const addLead = (lead) => (dispatch) => {
  axios
    .post(`/api/leads/`, lead)
    .then((res) => {
      dispatch(createMessage({ addedLead: "lead added" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
