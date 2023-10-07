// // client/src/components/UserList.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const UserList = ({ users }) => {
//   return (
//     <div>
//       <h2>User List</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user._id}>
//             <Link to={`/user/${user._id}`}>{user.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;


// client/src/components/UserList.js
import React from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';

const UserList = ({ users }) => {
  return (
    <div className="container">
      <h2>User List</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user._id}>
            <Link to={`/user/${user._id}`} className="user-link">
              {user.name}
              <QRCode value={`Name: ${user.name}\nEmail: ${user.email}`} className="qr-code"/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
