import { Service } from '../types';

export const barbershop = {
  name: 'Barbearia Blackwood',
  rating: 4.9,
  reviews: 284,
  distance: '850 m',
  address: 'Rua das Flores, 128 · Centro',
};

export const services: Service[] = [
  { id: 'cut', name: 'Corte', price: 45, duration: 30 },
  { id: 'beard', name: 'Barba', price: 35, duration: 20 },
  { id: 'combo', name: 'Corte + Barba', price: 70, duration: 50 },
];

export const dates = [
  { id: 'today', weekday: 'HOJE', day: '30', month: 'JUL' },
  { id: 'tomorrow', weekday: 'SEX', day: '31', month: 'JUL' },
  { id: 'sat', weekday: 'SÁB', day: '01', month: 'AGO' },
  { id: 'sun', weekday: 'DOM', day: '02', month: 'AGO' },
];

export const times = ['09:00', '10:30', '11:30', '14:00', '15:30', '17:00'];
