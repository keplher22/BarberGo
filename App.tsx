import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { BookingScreen } from './src/screens/BookingScreen';
import { BarbershopScreen } from './src/screens/BarbershopScreen';
import { ConfirmationScreen } from './src/screens/ConfirmationScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { services } from './src/data/mockData';
import { Booking, ScreenName } from './src/types';

const initialBooking: Booking = { service: services[0]!, date: '30 de julho', time: '10:30' };

export default function App() {
  const [screen, setScreen] = useState<ScreenName>('home');
  const [booking, setBooking] = useState<Booking>(initialBooking);
  return <>
    <StatusBar style={screen === 'home' ? 'dark' : 'dark'} />
    {screen === 'home' && <HomeScreen onOpenShop={() => setScreen('barbershop')} />}
    {screen === 'barbershop' && <BarbershopScreen onBack={() => setScreen('home')} onBook={() => setScreen('booking')} />}
    {screen === 'booking' && <BookingScreen onBack={() => setScreen('barbershop')} onConfirm={value => { setBooking(value); setScreen('confirmation'); }} />}
    {screen === 'confirmation' && <ConfirmationScreen booking={booking} onHome={() => setScreen('home')} />}
  </>;
}
