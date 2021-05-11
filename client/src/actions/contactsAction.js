import axios from "axios"

export const getContacts = () => (dispatch) => {
    axios.get('api/contacts').then( (response) => {
        console.log(response.data)
        dispatch({
            type: "GET_CONTACTS",
            payload: response.data,
        });
    });
};

export const getOneContact = (id) => async (dispatch) => {
    const {data} = await axios.get(`/api/contacts/${id}`)
    dispatch({
        type: "GET_ONE",
        payload: data, // normalement on ecrit response.data , mais ici on a fait destructuring
    });

};

export const Add = (newContact) => async (dispatch) => {
    const msg = await axios.post(`/api/contacts` , newContact)
    dispatch({
        type: "ADD",
        payload: msg, // normalement on ecrit response.data , mais ici on a fait destructuring
    });
    dispatch(getContacts());
}