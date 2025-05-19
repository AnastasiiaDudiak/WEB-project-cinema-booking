import React, { useState, useEffect } from 'react';
import './CinemaHall.css';

const TOTAL_ROWS = 5;
const SEATS_PER_ROW = 8;

//  омпонент приймаЇ: onSelect Ч дл€ передач≥ вибору назад,
// selectedSeats Ч список вибраних,
// bookedSeats Ч м≥сц€, €к≥ вже заброньован≥
function CinemaHall({ onSelect, selectedSeats = [], bookedSeats = [] }) {
    const [localSelectedSeats, setLocalSelectedSeats] = useState([]);

    useEffect(() => {
        setLocalSelectedSeats(selectedSeats); // синхрон≥зуЇмо зовн≥шн≥й стан
    }, [selectedSeats]);

    // ќбробка кл≥ку по м≥сцю
    const toggleSeat = (seat) => {
        // якщо м≥сце вже заброньоване Ч н≥чого не робимо
        if (bookedSeats.includes(seat)) return;

        const isSelected = localSelectedSeats.includes(seat);
        const updated = isSelected
            ? localSelectedSeats.filter(s => s !== seat)
            : [...localSelectedSeats, seat];

        setLocalSelectedSeats(updated);
        onSelect(updated); // передаЇмо зм≥ни у Booking.jsx
    };

    // √енеруЇмо вс≥ м≥сц€
    const seats = [];
    for (let row = 0; row < TOTAL_ROWS; row++) {
        for (let col = 0; col < SEATS_PER_ROW; col++) {
            const seat = `${row + 1}-${col + 1}`;
            seats.push(seat);
        }
    }

    return (
        <div className="cinema">
            {seats.map(seat => {
                const isBooked = bookedSeats.includes(seat);
                const isSelected = localSelectedSeats.includes(seat);

                return (
                    <div
                        key={seat}
                        className={`seat ${isBooked ? 'booked' : isSelected ? 'selected' : 'available'
                            }`}
                        onClick={() => toggleSeat(seat)}
                    >
                        {seat}
                    </div>
                );
            })}
        </div>
    );
}

export default CinemaHall;
