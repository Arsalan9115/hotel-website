export const getOccupancy = (id: number) => {
  const b = (id * 7) % 10;
  return { booked: b, free: 10 - b, percent: b * 10 };
};