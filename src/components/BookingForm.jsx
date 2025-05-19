import React, { useState } from 'react';
import './BookingForm.css';
import { toast } from 'react-toastify';

function BookingForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !email) {
      toast.error('Будь ласка, заповніть усі поля');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Невірний формат Email');
      return;
    }

    onSubmit({ name, phone, email });
    toast.success('Бронювання успішно збережено!');

    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h3>Ваші дані для бронювання</h3>

      <div className="form-group">
        <label>Ім’я</label>
        <input
          type="text"
          placeholder="Введіть ім’я"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Телефон</label>
        <input
          type="tel"
          placeholder="Введіть телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Введіть email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">Підтвердити бронювання</button>
    </form>
  );
}

export default BookingForm;
