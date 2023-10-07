// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// client/src/App.js
import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import { Navbar } from './components/Navbar';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
      <div className="App">
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path="/user/:id" element={<UserDetail/>} />
          {/* <Route path="/">
            <Link to='#' element={<UserForm addUser={addUser} />}/>
            <Link to='#' element={<UserList users={users} />}/>
          </Route> */}
          <Route path='/' element={<UserForm addUser={addUser}/>}/>
          <Route path='/userlist' element={<UserList users={users}/>}/>
        </Routes>
        <Toaster/>
      </div>
  );
}

export default App;
