import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./Components/UserCard";


function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);




  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err));
  }, []);

  return (
    <div className="App">
      {users.map((user) => {
        return <UserCard className="Card" key={user.id} user={user} />;
      })}
    </div>
  );
}

export default App;