import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import movies from '../data/movies';
import CinemaHall from '../components/CinemaHall';
import BookingForm from '../components/BookingForm';
import {
    getBookedSeatsByMovieId,
    saveBooking
} from '../services/BookingService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Booking() {
    const { id } = useParams(); // Отримуємо id фільму з URL
    const movie = movies.find(m => m.id === parseInt(id)); // Знаходимо фільм

    const [selectedSeats, setSelectedSeats] = useState([]); // Вибрані місця
    const [bookedSeats, setBookedSeats] = useState([]); // Заброньовані раніше

    useEffect(() => {
        if (movie) {
            const booked = getBookedSeatsByMovieId(movie.id);
            setBookedSeats(booked);
        }
    }, [movie]);

    if (!movie) {
        return <p>Фільм не знайдено</p>;
    }

    // Коли користувач заповнює форму
    const handleBookingSubmit = (userData) => {
        saveBooking(movie.id, selectedSeats, userData); // зберігаємо в LocalStorage
        setBookedSeats(prev => [...prev, ...selectedSeats]); // додаємо до вже заброньованих
        setSelectedSeats([]); // очищаємо вибрані
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Бронювання: {movie.title}</h2>
            <p><strong>Сеанс:</strong> {movie.dateTime}</p>

            {/* Відображаємо зал */}
            <CinemaHall
                onSelect={setSelectedSeats}
                selectedSeats={selectedSeats}
                bookedSeats={bookedSeats}
            />

            {/* Виводимо обрані місця */}
            <p style={{ marginTop: '20px' }}>
                Обрані місця: {selectedSeats.join(', ') || 'Немає'}
            </p>

            {/* Форма для введення даних */}
            {selectedSeats.length > 0 && (
                <BookingForm onSubmit={handleBookingSubmit} />
            )}

            {/* Кнопка повернення */}
            <Link to="/">
                <button style={{ marginTop: '20px' }}>Повернутись до фільмів</button>
            </Link>

            {/* Повідомлення (React Toastify) */}
            <ToastContainer position="top-center" />
        </div>
    );
}

export default Booking;
