import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [users, setUsers] = useState([]);
    
    if (localStorage.getItem('user_id') === null) {
        window.location.href = '/connexion';
    }

    useEffect(() => {
        fetch('https://eworld-api.osc-fr1.scalingo.io/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
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
            <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                <tr>
                    <th style={tableHeaderStyle}>ID</th>
                    <th style={tableHeaderStyle}>Email</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td style={tableCellStyle}>{user.id}</td>
                        <td style={tableCellStyle}>{user.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

const tableHeaderStyle = {
    backgroundColor: '#f2f2f2',
    padding: '8px',
    textAlign: 'left',

};

const tableCellStyle = {
    padding: '8px',
    border: '1px solid #ddd',
    color: 'white',
};

export default Dashboard;
