import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, Pressable, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenHeader } from '../components/ScreenHeader';
import { ServiceCard } from '../components/ServiceCard';
import { dates, services, times } from '../data/mockData';
import { colors } from '../theme';
import { Booking, Service } from '../types';

type Props = { onBack: () => void; onConfirm: (booking: Booking) => void };

export function BookingScreen({ onBack, onConfirm }: Props) {
  const [service, setService] = React.useState<Service>(services[0]!);
  const [date, setDate] = React.useState(dates[0]!);
  const [time, setTime] = React.useState(times[1]!);
  const dateLabel = `${date.day} de ${date.month === 'JUL' ? 'julho' : 'agosto'}`;
  return <SafeAreaView style={styles.safe}>
    <ScreenHeader title="Agendar horário" onBack={onBack} />
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.step}>PASSO 1 DE 3</Text><Text style={styles.title}>Qual serviço?</Text>
      {services.map(item => <ServiceCard key={item.id} service={item} selected={item.id === service.id} onPress={() => setService(item)} />)}
      <Text style={styles.step}>PASSO 2 DE 3</Text><Text style={styles.title}>Escolha uma data</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.dateList}>
        {dates.map(item => { const selected = item.id === date.id; return <Pressable key={item.id} onPress={() => setDate(item)} style={[styles.date, selected && styles.selectedDate]}><Text style={[styles.weekday, selected && styles.selectedText]}>{item.weekday}</Text><Text style={[styles.day, selected && styles.selectedText]}>{item.day}</Text><Text style={[styles.month, selected && styles.selectedText]}>{item.month}</Text></Pressable>; })}
      </ScrollView>
      <Text style={styles.step}>PASSO 3 DE 3</Text><View style={styles.titleRow}><Text style={styles.title}>Horários disponíveis</Text><Text style={styles.period}>HOJE</Text></View>
      <View style={styles.timeGrid}>{times.map(item => { const selected = item === time; return <Pressable key={item} onPress={() => setTime(item)} style={[styles.time, selected && styles.selectedTime]}><Text style={[styles.timeText, selected && styles.selectedText]}>{item}</Text></Pressable>; })}</View>
    </ScrollView>
    <View style={styles.footer}><View style={styles.summary}><View><Text style={styles.summaryLabel}>TOTAL</Text><Text style={styles.total}>R$ {service.price}</Text></View><View><Text style={styles.summaryLabel}>DURAÇÃO</Text><Text style={styles.duration}>{service.duration} min</Text></View></View><PrimaryButton label="CONFIRMAR AGENDAMENTO" icon="checkmark-circle-outline" onPress={() => onConfirm({ service, date: dateLabel, time })} /></View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background }, content: { paddingHorizontal: 20, paddingBottom: 190 },
  step: { color: colors.actionDark, fontWeight: '900', fontSize: 10, letterSpacing: 1.1, marginTop: 16, marginBottom: 5 }, title: { color: colors.ink, fontSize: 21, fontWeight: '900', marginBottom: 14 },
  dateList: { gap: 10, paddingBottom: 5 }, date: { width: 72, height: 91, borderRadius: 20, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.line, alignItems: 'center', justifyContent: 'center' }, selectedDate: { backgroundColor: colors.ink, borderColor: colors.ink },
  weekday: { color: colors.muted, fontWeight: '800', fontSize: 9 }, day: { color: colors.ink, fontWeight: '900', fontSize: 24, marginVertical: 3 }, month: { color: colors.muted, fontWeight: '800', fontSize: 9 }, selectedText: { color: colors.surface },
  titleRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }, period: { color: colors.actionDark, backgroundColor: '#E7F7F1', paddingVertical: 5, paddingHorizontal: 8, borderRadius: 8, fontWeight: '900', fontSize: 9 },
  timeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 }, time: { width: '31%', height: 48, borderRadius: 15, borderWidth: 1, borderColor: colors.line, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center' }, selectedTime: { backgroundColor: colors.action, borderColor: colors.action }, timeText: { color: colors.ink, fontWeight: '800' },
  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: colors.surface, borderTopWidth: 1, borderTopColor: colors.line, padding: 20 }, summary: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 13 }, summaryLabel: { color: colors.muted, fontSize: 9, fontWeight: '800', letterSpacing: 1 }, total: { color: colors.ink, fontWeight: '900', fontSize: 20 }, duration: { color: colors.ink, fontWeight: '800', fontSize: 14, textAlign: 'right', marginTop: 4 },
});
