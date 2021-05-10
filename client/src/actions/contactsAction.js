import axios from "axios"

export const getContacts = ()=> (dispatch) =>{
    axios.get('api/contacts').then( (response) =>{
        dispatch({
            type: "GET_CONTACT",
            payload: response.data,
        });
    });
};