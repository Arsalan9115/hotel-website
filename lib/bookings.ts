export type BookingRequest = {
  id: number;
  reference: string;
  room: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  total: number;
  name: string;
  email: string;
  createdAt: string;
};

const BOOKINGS_KEY = 'aurum_bookings';

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

export const getBookings = (): BookingRequest[] => {
  if (typeof window === 'undefined') return [];

  const stored = localStorage.getItem(BOOKINGS_KEY);
  if (!stored) return [];

  const bookings: unknown = JSON.parse(stored);
  if (!Array.isArray(bookings) || !bookings.every(isRecord)) {
    throw new Error('Saved booking data is invalid.');
  }

  const normalized = bookings.map((booking): BookingRequest => {
    if (
      typeof booking.id !== 'number' ||
      typeof booking.room !== 'string' ||
      typeof booking.checkIn !== 'string' ||
      typeof booking.checkOut !== 'string' ||
      typeof booking.name !== 'string'
    ) {
      throw new Error('Saved booking data is invalid.');
    }

    const nights = typeof booking.nights === 'number'
      ? booking.nights
      : getNights(booking.checkIn, booking.checkOut);
    return {
      id: booking.id,
      reference: typeof booking.reference === 'string'
        ? booking.reference
        : `AA-LEGACY-${booking.id}`,
      room: booking.room,
      checkIn: booking.checkIn,
      checkOut: booking.checkOut,
      nights,
      total: typeof booking.total === 'number' ? booking.total : 0,
      name: booking.name,
      email: typeof booking.email === 'string' ? booking.email : '',
      createdAt: typeof booking.createdAt === 'string' ? booking.createdAt : '',
    };
  });

  if (bookings.some((booking, index) => booking.reference !== normalized[index].reference)) {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(normalized));
  }
  return normalized;
};

export const saveBooking = (booking: Omit<BookingRequest, 'id' | 'reference' | 'createdAt'>) => {
  const savedBooking: BookingRequest = {
    ...booking,
    id: Date.now(),
    reference: `AA-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
  };
  const allBookings = getBookings();
  allBookings.push(savedBooking);
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(allBookings));
  return savedBooking;
};

export const getNights = (checkIn: string, checkOut: string) => {
  if (!checkIn || !checkOut) return 0;
  return Math.max(
    0,
    Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000),
  );
};
