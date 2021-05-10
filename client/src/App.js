import './App.css';
import { useEffect } from "react"
import { useDispatch , useSelector } from 'react-redux';
import { getContacts } from "./actions/contactsAction"

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactReducer);
console.log(contacts);
  useEffect(() => {
    dispatch(getContacts());
  },[]);


  return (
    <div className="App">
      <header className="App-header">
        {contacts.map((el) => (
          <div key={el._id}>
            <h6>{el.firstName}</h6>
            <h6>{el.email}</h6>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
