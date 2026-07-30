import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenHeader } from '../components/ScreenHeader';
import { ServiceCard } from '../components/ServiceCard';
import { barbershop, services } from '../data/mockData';
import { colors } from '../theme';

export function BarbershopScreen({ onBack, onBook }: { onBack: () => void; onBook: () => void }) {
  return <SafeAreaView style={styles.safe}>
    <ScreenHeader title="Detalhes da barbearia" onBack={onBack} />
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.hero}>
        <View style={styles.heroGlow} />
        <Ionicons name="cut" size={64} color="#FFFFFFCC" />
        <View style={styles.open}><View style={styles.openDot} /><Text style={styles.openText}>ABERTO AGORA</Text></View>
      </View>
      <View style={styles.titleRow}><View style={{ flex: 1 }}><Text style={styles.name}>{barbershop.name}</Text><Text style={styles.address}>{barbershop.address}</Text></View><View style={styles.heart}><Ionicons name="heart-outline" size={21} color={colors.ink} /></View></View>
      <View style={styles.stats}>
        <View style={styles.stat}><Ionicons name="star" size={19} color={colors.gold} /><View><Text style={styles.statValue}>{barbershop.rating}</Text><Text style={styles.statLabel}>{barbershop.reviews} avaliações</Text></View></View>
        <View style={styles.separator} />
        <View style={styles.stat}><Ionicons name="navigate" size={19} color={colors.action} /><View><Text style={styles.statValue}>{barbershop.distance}</Text><Text style={styles.statLabel}>3 min de você</Text></View></View>
      </View>
      <View style={styles.sectionRow}><Text style={styles.sectionTitle}>Serviços</Text><Text style={styles.sectionMeta}>{services.length} opções</Text></View>
      {services.map(service => <ServiceCard key={service.id} service={service} />)}
    </ScrollView>
    <View style={styles.footer}><PrimaryButton label="AGENDAR HORÁRIO" icon="calendar-outline" onPress={onBook} /></View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background }, content: { paddingHorizontal: 20, paddingBottom: 110 },
  hero: { height: 230, backgroundColor: colors.ink, borderRadius: 26, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
  heroGlow: { position: 'absolute', width: 240, height: 240, borderRadius: 120, backgroundColor: '#234366', top: -90, right: -40 },
  open: { position: 'absolute', left: 16, bottom: 16, paddingHorizontal: 11, paddingVertical: 7, borderRadius: 12, backgroundColor: '#FFFFFFE8', flexDirection: 'row', alignItems: 'center', gap: 6 },
  openDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: colors.action }, openText: { fontSize: 9, fontWeight: '900', color: colors.ink, letterSpacing: 0.7 },
  titleRow: { flexDirection: 'row', alignItems: 'center', marginTop: 20 }, name: { fontSize: 24, fontWeight: '900', color: colors.ink, letterSpacing: -0.5 }, address: { color: colors.muted, marginTop: 6, fontSize: 13 },
  heart: { width: 44, height: 44, borderRadius: 15, borderWidth: 1, borderColor: colors.line, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center' },
  stats: { marginTop: 20, borderRadius: 18, padding: 15, backgroundColor: colors.surface, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.line },
  stat: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 }, separator: { width: 1, height: 34, backgroundColor: colors.line, marginHorizontal: 13 }, statValue: { color: colors.ink, fontWeight: '900', fontSize: 15 }, statLabel: { color: colors.muted, fontSize: 11, marginTop: 2 },
  sectionRow: { marginTop: 26, marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, sectionTitle: { fontSize: 20, fontWeight: '900', color: colors.ink }, sectionMeta: { color: colors.muted, fontSize: 12 },
  footer: { position: 'absolute', left: 0, right: 0, bottom: 0, paddingHorizontal: 20, paddingTop: 12, paddingBottom: 20, backgroundColor: colors.surface, borderTopWidth: 1, borderTopColor: colors.line },
});
