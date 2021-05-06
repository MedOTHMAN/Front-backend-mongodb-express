import axios from "axios"

export const getContact = ()=> (dispatch) =>{
    axios.get('api/contacts').then( (response) =>{
        dispatch({
            type: "GET_CONTACT",
            payload: response,
        });
    });
};