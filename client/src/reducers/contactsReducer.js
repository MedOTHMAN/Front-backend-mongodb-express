const contactsReducer = (state =  {contacts :[] , contact :{} , save : null }, {type , payload})=> {
    switch (type) {
        case "GET_CONTACTS":
            return {...state, contacts:payload};
        case "GET_ONE":
            return {...state, contact:payload};
        case "SAVE":
            return {...state, save:payload};
        case "UPDATE":
            return {...state, save:null};
    
        default:
            return state
    }
}

export default contactsReducer;