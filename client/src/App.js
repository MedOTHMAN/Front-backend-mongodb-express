import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getContacts,
  Add,
  deleteContact,
  saveContact,
  updateContact,
} from "./actions/contactsAction";
import { Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactsReducer.contacts);
  const save = useSelector((state) => state.contactsReducer.save);
  const [inputs, setInputs] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch(getContacts());
    if (save) setInputs(save);
  }, [dispatch, save]);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <header className="App-header">
        {contacts.map((el) => (
          <div key={el._id}>
            <h6>{el.firstName}</h6>
            <h6>{el.email}</h6>
            <button onClick={() => dispatch(deleteContact(el._id))}>
              delete
            </button>
            <button>
              <Link to={`/contact/${el._id}`}>See details</Link>
            </button>
            <button onClick={() => dispatch(saveContact(el))}>update</button>
          </div>
        ))}
        <div>
          <label>name </label>
          <input
            onChange={handleChange}
            value={inputs.firstName}
            type="text"
            name="firstName"
            id=""
          />
          <br />
          <label>email </label>
          <input
            onChange={handleChange}
            value={inputs.email}
            type="text"
            name="email"
            id=""
          />
          <br />
          <label>password </label>
          <input
            onChange={handleChange}
            value={inputs.password}
            type="text"
            name="password"
            id=""
          />
          <br />
          <button
            onClick={() => {
              save
                ? dispatch(updateContact(inputs)) &&
                  setInputs({
                    firstName: "",
                    email: "",
                    password: "",
                  })
                : dispatch(Add(inputs));
            }}
          >
            {save ? "update" : "add Contact"}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
