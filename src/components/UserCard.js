import React from 'react';
import './UserCard.css'; 

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <div className="card-image">
        {user.image ? (
          <img 
            src={user.image} 
            alt={`${user.username} avatar`} 
          />
        ) : (
          <span>Foto</span> 
        )}
      </div>
      <div className="card-body">
        <h4>{`${user.firstname} ${user.lastname}`}</h4>
        <p>Usuário: <strong>{user.username}</strong></p>
        <p>E-mail:
            <strong 
            data-full-email={user.email} 
            title={user.email}
          >
            {user.email.length > 15 ? `${user.email.slice(0, 15)}...` : user.email}
          </strong>
        </p>
        <a href={user.website} target="_blank" rel="noopener noreferrer"><strong>{user.website}</strong></a>
      </div>
    </div>
  );
};

export default UserCard;
