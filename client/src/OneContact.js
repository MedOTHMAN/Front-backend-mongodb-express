import React , { useEffect } from 'react'
import {getOneContact} from "./actions/contactsAction";
import { useDispatch , useSelector } from "react-redux";

const OneContact = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOneContact(props.match.params.id));
    }, []);

    const contact = useSelector((state) => state.contactReducer.contact)
    return (
        <div>
            <h1>{contact.email}</h1>
        </div>
    )
}

export default OneContact
