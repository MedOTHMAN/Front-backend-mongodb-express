import axios from "axios";

export const getContacts = () => (dispatch) => {
  axios.get("api/contacts").then((response) => {
    dispatch({
      type: "GET_CONTACTS",
      payload: response.data,
    });
  });
};

export const getOneContact = (id) => async (dispatch) => {
  const { data } = await axios.get(`/api/contacts/${id}`);
  dispatch({
    type: "GET_ONE",
    payload: data, // normalement on ecrit response.data , mais ici on a fait destructuring
  });
};

export const Add = (newContact) => async (dispatch) => {
  await axios.post(`/api/contacts`, newContact);
  dispatch({
    type: "ADD",
  });
  dispatch(getContacts());
};

export const deleteContact = (id) => async (dispatch) => {
  await axios.delete(`/api/contacts/${id}`);
  dispatch({
    type: "DELETE",
  });
  dispatch(getContacts());
};

export const saveContact = (el) => {
  return {
    type: "SAVE",
    payload: el,
  };
};

export const updateContact = (contact) => async (dispatch) => {
  await axios.put(`/api/contacts/${contact._id}`, contact);
  dispatch({
    type: "UPDATE",
  });
  dispatch(getContacts());
};
