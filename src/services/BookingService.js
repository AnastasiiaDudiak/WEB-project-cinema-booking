// ���� ��� ���������� � LocalStorage
const STORAGE_KEY = 'bookings';

// �������� �� ���������� � LocalStorage
export function getBookings() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
}

// �������� ����������� ���� ��� ����������� ������ �� ���� id
export function getBookedSeatsByMovieId(movieId) {
    const bookings = getBookings();
    return bookings[movieId] || [];
}

// �������� ���� ����������
export function saveBooking(movieId, seats, userData) {
    const bookings = getBookings();

    // ���� ����� ��� ����� ������ ��� ���� ���� � ������ ���
    const updatedSeats = [...(bookings[movieId] || []), ...seats];
    bookings[movieId] = updatedSeats;

    // ��������� ����� �������� ��� ����������� (�� ����������)
    bookings[`user-${movieId}`] = userData;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}
