import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [users, setUsers] = useState([]);
    
    if (localStorage.getItem('user_id') === null) {
        window.location.href = '/connexion';
    }

    useEffect(() => {
        fetch('https://eworld-api.osc-fr1.scalingo.io/api/users')
            .then((res) => res.json())
            .then((data) => {
                // Convertir les utilisateurs en un tableau
                const usersArray = Object.values(data);
                setUsers(usersArray);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
