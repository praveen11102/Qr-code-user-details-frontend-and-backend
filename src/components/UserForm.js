// client/src/components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', { name, email });
      addUser(response.data);
      setName('');
      setEmail('');
      toast.success("User added successfully");
      navigate('/userlist');
      
    } catch (error) {
      console.error(error);
      toast.error("Couldn't add user , please try again")
    }
  };

  return (
    <div className="user-form-container">
      <h2 className="user-form-title">Add a New User</h2>
      <form onSubmit={handleSubmit}>
        <input className="user-form-input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input className="user-form-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit" className="user-form-button">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
