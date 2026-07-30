export type ScreenName = 'home' | 'barbershop' | 'booking' | 'confirmation';

export type Service = {
  id: string;
  name: string;
  price: number;
  duration: number;
};

export type Booking = {
  service: Service;
  date: string;
  time: string;
};
