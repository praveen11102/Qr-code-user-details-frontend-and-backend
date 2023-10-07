// client/src/components/UserDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import QRCode from 'qrcode.react';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [id]);

  const qrCodeValue = `Name: ${user.name}\nEmail: ${user.email}`;

  return (
    <div className="user-detail-container">
      <h2 className="user-detail-title">User Detail</h2>
      <p className="user-detail-info">Name: {user.name}</p>
      <p className="user-detail-info">Email: {user.email}</p>

      <QRCode value={qrCodeValue} className="qr-code"/>
    </div>
  );
};

export default UserDetail;
