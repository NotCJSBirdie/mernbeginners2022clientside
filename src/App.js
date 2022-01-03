import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listofUsers, setListofUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("https://mern-beginners-2022.herokuapp.com/getUsers").then(
      (response) => {
        setListofUsers(response.data);
      }
    );
  }, []);

  const createUser = () => {
    Axios.post("https://mern-beginners-2022.herokuapp.com/createUsers", {
      name: name,
      age: age,
      username: username,
    }).then((response) => {
      alert("USER CREATED");
      setListofUsers([
        ...listofUsers,
        {
          name: name,
          age: age,
          username: username,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <h1>Welcome to React FULL STACK!</h1>

      <div>
        {listofUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}
      </div>
      <input
        type="text"
        placeholder="name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="age"
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <button onClick={createUser}>Create User</button>
      <div></div>
    </div>
  );
}

export default App;
