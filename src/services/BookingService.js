//  люч дл€ збереженн€ в LocalStorage
const STORAGE_KEY = 'bookings';

// ќтримати вс≥ бронюванн€ з LocalStorage
export function getBookings() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
}

// ќтримати заброньован≥ м≥сц€ дл€ конкретного ф≥льму за його id
export function getBookedSeatsByMovieId(movieId) {
    const bookings = getBookings();
    return bookings[movieId] || [];
}

// «берегти нове бронюванн€
export function saveBooking(movieId, seats, userData) {
    const bookings = getBookings();

    // якщо ран≥ше дл€ цього ф≥льму вже були м≥сц€ Ч додаЇмо нов≥
    const updatedSeats = [...(bookings[movieId] || []), ...seats];
    bookings[movieId] = updatedSeats;

    // ƒодатково можна збер≥гати дан≥ користувача (не обовТ€зково)
    bookings[`user-${movieId}`] = userData;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}
