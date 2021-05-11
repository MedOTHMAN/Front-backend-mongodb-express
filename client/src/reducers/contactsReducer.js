const contactReducer = (state =  {contacts :[] , contact :{}}, {type , payload})=> {
    switch (type) {
        case "GET_CONTACTS":
            return {...state, contacts:payload};
        case "GET_ONE":
            return {...state, contact:payload};
    
        default:
            return state
    }
}

export default contactReducer;