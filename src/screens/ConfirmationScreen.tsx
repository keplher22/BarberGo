import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { barbershop } from '../data/mockData';
import { colors, shadow } from '../theme';
import { Booking } from '../types';

export function ConfirmationScreen({ booking, onHome }: { booking: Booking; onHome: () => void }) {
  return <SafeAreaView style={styles.safe}>
    <View style={styles.content}>
      <View style={styles.successHalo}><View style={styles.success}><Ionicons name="checkmark" size={43} color={colors.surface} /></View></View>
      <Text style={styles.eyebrow}>TUDO CERTO!</Text><Text style={styles.title}>Agendamento{`\n`}confirmado!</Text><Text style={styles.subtitle}>Seu horário está reservado. Agora é só chegar e aproveitar a experiência.</Text>
      <View style={[styles.ticket, shadow]}>
        <View style={styles.shopRow}><View style={styles.shopIcon}><Ionicons name="cut" size={23} color={colors.surface} /></View><View style={{ flex: 1 }}><Text style={styles.shopLabel}>BARBEARIA</Text><Text style={styles.shop}>{barbershop.name}</Text></View><Ionicons name="checkmark-circle" size={22} color={colors.action} /></View>
        <View style={styles.rule} />
        <Detail icon="calendar-outline" label="DATA" value={booking.date} />
        <Detail icon="time-outline" label="HORÁRIO" value={booking.time} />
        <Detail icon="cut-outline" label="SERVIÇO" value={`${booking.service.name} · R$ ${booking.service.price}`} />
      </View>
      <View style={styles.tip}><Ionicons name="notifications-outline" size={20} color={colors.actionDark} /><Text style={styles.tipText}>Enviaremos um lembrete antes do seu horário.</Text></View>
    </View>
    <View style={styles.actions}><PrimaryButton label="VER ROTA" icon="navigate-outline" onPress={() => {}} /><PrimaryButton label="VOLTAR PARA HOME" variant="secondary" onPress={onHome} style={styles.homeButton} /></View>
  </SafeAreaView>;
}

function Detail({ icon, label, value }: { icon: keyof typeof Ionicons.glyphMap; label: string; value: string }) { return <View style={styles.detail}><View style={styles.detailIcon}><Ionicons name={icon} size={19} color={colors.ink} /></View><View><Text style={styles.detailLabel}>{label}</Text><Text style={styles.detailValue}>{value}</Text></View></View>; }

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background }, content: { flex: 1, paddingHorizontal: 24, alignItems: 'center', paddingTop: 35 },
  successHalo: { width: 104, height: 104, borderRadius: 52, backgroundColor: '#DDF5EC', alignItems: 'center', justifyContent: 'center' }, success: { width: 72, height: 72, borderRadius: 36, backgroundColor: colors.action, alignItems: 'center', justifyContent: 'center' },
  eyebrow: { marginTop: 22, color: colors.actionDark, fontWeight: '900', fontSize: 10, letterSpacing: 1.5 }, title: { marginTop: 6, color: colors.ink, fontSize: 30, lineHeight: 35, fontWeight: '900', textAlign: 'center', letterSpacing: -0.7 }, subtitle: { color: colors.muted, textAlign: 'center', fontSize: 14, lineHeight: 21, marginTop: 10, maxWidth: 315 },
  ticket: { backgroundColor: colors.surface, alignSelf: 'stretch', borderRadius: 24, padding: 19, marginTop: 24 }, shopRow: { flexDirection: 'row', alignItems: 'center' }, shopIcon: { width: 48, height: 48, borderRadius: 16, backgroundColor: colors.ink, alignItems: 'center', justifyContent: 'center', marginRight: 12 }, shopLabel: { fontSize: 9, color: colors.muted, fontWeight: '800', letterSpacing: 1 }, shop: { color: colors.ink, fontWeight: '900', fontSize: 16, marginTop: 4 }, rule: { height: 1, backgroundColor: colors.line, marginVertical: 16 },
  detail: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 }, detailIcon: { width: 36, height: 36, borderRadius: 12, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', marginRight: 11 }, detailLabel: { fontSize: 9, color: colors.muted, fontWeight: '800', letterSpacing: 0.8 }, detailValue: { color: colors.ink, fontSize: 14, fontWeight: '800', marginTop: 3 },
  tip: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 18 }, tipText: { color: colors.inkSoft, fontSize: 12 }, actions: { paddingHorizontal: 20, paddingBottom: 18 }, homeButton: { marginTop: 10 },
});
