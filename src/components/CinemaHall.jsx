import React, { useState, useEffect } from 'react';
import './CinemaHall.css';

const TOTAL_ROWS = 5;
const SEATS_PER_ROW = 8;

// ��������� ������: onSelect � ��� �������� ������ �����,
// selectedSeats � ������ ��������,
// bookedSeats � ����, �� ��� �����������
function CinemaHall({ onSelect, selectedSeats = [], bookedSeats = [] }) {
    const [localSelectedSeats, setLocalSelectedSeats] = useState([]);

    useEffect(() => {
        setLocalSelectedSeats(selectedSeats); // ����������� ������� ����
    }, [selectedSeats]);

    // ������� ���� �� ����
    const toggleSeat = (seat) => {
        // ���� ���� ��� ������������ � ����� �� ������
        if (bookedSeats.includes(seat)) return;

        const isSelected = localSelectedSeats.includes(seat);
        const updated = isSelected
            ? localSelectedSeats.filter(s => s !== seat)
            : [...localSelectedSeats, seat];

        setLocalSelectedSeats(updated);
        onSelect(updated); // �������� ���� � Booking.jsx
    };

    // �������� �� ����
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
