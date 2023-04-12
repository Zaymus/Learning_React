import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const newUserHandler = (user) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        user
      ]
    });
  }

  return (
    <div>
      <AddUser onNewUser={newUserHandler}/>
      <UserList users={usersList} />
    </div>
  );
}

export default App;
