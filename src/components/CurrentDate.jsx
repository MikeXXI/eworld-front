import React from 'react';

function CurrentDate() {
    const currentDate = new Date();

    const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    const dayOfWeek = daysOfWeek[currentDate.getDay()]; // Récupère le nom du jour de la semaine
    const date = currentDate.getDate(); // Récupère le numéro du jour dans le mois
    const month = months[currentDate.getMonth()]; // Récupère le nom du mois
    const year = currentDate.getFullYear(); // Récupère l'année

    return (
        <div style={{ color: 'white', display: 'flex', flexDirection: 'column', fontWeight: 'bold'}}>
        <p style={{ margin: '0' }}>Aujourd'hui {dayOfWeek}</p>
            <div style={{ color: '#D9D9D9',opacity: '40%', display: 'flex', flexDirection: 'row'}}>
            <p style={{ margin: '2px' }}>{date}</p>
            <p style={{ margin: '2px' }}>{month}</p>
            <p style={{ margin: '2px' }}>{year}</p>
            </div>
        </div>
    );
}

export default CurrentDate;
