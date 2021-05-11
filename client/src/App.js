import './App.css';
import { useEffect , useState } from "react"
import { useDispatch , useSelector } from 'react-redux';
import { getContacts , Add } from "./actions/contactsAction";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const [inputs, setInputs] = useState({
    firstName : "",
    email : "",
    password : ""
  });

  useEffect(() => {
    dispatch(getContacts());
  },[dispatch]);

  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value});
  };

  return (
    <div className="App">
      <header className="App-header">
        {contacts.map((el) => (
          <div key={el._id}>
            <h6>{el.firstName}</h6>
            <h6>{el.email}</h6>
            <button>
              <Link to={`/contact/${el._id}`}>See details</Link>
              </button>
          </div>
        ))}
        <div>
          <label>name </label>
          <input onChange={handleChange} type="text" name="firstName" id="" /><br/>
          <label>email </label>
          <input onChange={handleChange} type="text" name="email" id="" /><br/>
          <label>password </label>
          <input onChange={handleChange} type="text" name="password" id="" /><br/>
          <button onClick={()=> dispatch(Add(inputs))}>add Contact</button>
        </div>
      </header>
    </div>
  );
}

export default App;
