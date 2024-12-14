import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import UserCard from './components/UserCard';
import { fetchUsers } from './services/api';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const userList = await fetchUsers(20); 
      setUsers(userList);
    };
    loadUsers();
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="user-list">
        {users.map(user => (
          <UserCard key={user.uuid} user={user} />
        ))}
      </main>
      <footer className="footer">
        <p>2024 - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default App;
