import { Ionicons } from '@expo/vector-icons';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { barbershop } from '../data/mockData';
import { colors, shadow } from '../theme';

export function HomeScreen({ onOpenShop }: { onOpenShop: () => void }) {
  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <View style={[styles.road, styles.roadOne]} />
        <View style={[styles.road, styles.roadTwo]} />
        <View style={[styles.road, styles.roadThree]} />
        <View style={styles.park}><Text style={styles.parkText}>PARQUE CENTRAL</Text></View>
        <Pin top="35%" left="17%" />
        <Pin top="47%" left="61%" featured onPress={onOpenShop} />
        <Pin top="65%" left="34%" />
        <View style={styles.userLocation}><View style={styles.userDot} /></View>
      </View>

      <SafeAreaView style={styles.overlay} pointerEvents="box-none">
        <View style={styles.brandRow}>
          <View>
            <Text style={styles.eyebrow}>OLÁ, BEM-VINDO 👋</Text>
            <Text style={styles.brand}>Barber<Text style={styles.brandAccent}>Go</Text></Text>
          </View>
          <View style={styles.avatar}><Ionicons name="person" size={20} color={colors.ink} /></View>
        </View>
        <View style={[styles.search, shadow]}>
          <Ionicons name="search" size={22} color={colors.inkSoft} />
          <TextInput placeholder="Buscar barbearia..." placeholderTextColor={colors.muted} style={styles.input} />
          <View style={styles.filter}><Ionicons name="options-outline" size={19} color={colors.surface} /></View>
        </View>
      </SafeAreaView>

      <Pressable accessibilityLabel="Ir para minha localização" style={[styles.location, shadow]}>
        <Ionicons name="locate" size={24} color={colors.ink} />
      </Pressable>

      <View style={[styles.bottomCard, shadow]}>
        <View style={styles.handle} />
        <View style={styles.nearbyRow}>
          <View><Text style={styles.nearbyLabel}>MAIS PRÓXIMA DE VOCÊ</Text><Text style={styles.shopName}>{barbershop.name}</Text></View>
          <View style={styles.distance}><Ionicons name="walk-outline" size={15} color={colors.actionDark} /><Text style={styles.distanceText}>{barbershop.distance}</Text></View>
        </View>
        <View style={styles.meta}><Ionicons name="star" size={16} color={colors.gold} /><Text style={styles.metaStrong}>{barbershop.rating}</Text><Text style={styles.metaText}>({barbershop.reviews})</Text><View style={styles.dot} /><Text style={styles.metaText}>Aberta até 20h</Text></View>
        <PrimaryButton label="CORTAR AGORA" icon="cut-outline" onPress={onOpenShop} />
      </View>
    </View>
  );
}

function Pin({ top, left, featured, onPress }: { top: `${number}%`; left: `${number}%`; featured?: boolean; onPress?: () => void }) {
  return <Pressable onPress={onPress} style={[styles.pin, featured && styles.pinFeatured, { top, left }]}><Ionicons name="cut" size={featured ? 20 : 16} color={colors.surface} /></Pressable>;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.map },
  map: { ...StyleSheet.absoluteFillObject, overflow: 'hidden' },
  road: { position: 'absolute', backgroundColor: '#FFFFFF', borderColor: '#DDE4E0', borderWidth: 1, height: 34, width: '140%' },
  roadOne: { top: '40%', left: '-20%', transform: [{ rotate: '-17deg' }] },
  roadTwo: { top: '62%', left: '-20%', transform: [{ rotate: '19deg' }] },
  roadThree: { top: '44%', left: '-25%', transform: [{ rotate: '79deg' }] },
  park: { position: 'absolute', top: '26%', right: '-6%', width: 155, height: 125, borderRadius: 55, backgroundColor: '#CEE4D4', alignItems: 'center', justifyContent: 'center', transform: [{ rotate: '-10deg' }] },
  parkText: { color: '#75A180', fontWeight: '800', fontSize: 9, letterSpacing: 1 },
  overlay: { paddingHorizontal: 20 },
  brandRow: { paddingTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  eyebrow: { fontSize: 10, color: colors.inkSoft, fontWeight: '700', letterSpacing: 1 },
  brand: { fontSize: 27, color: colors.ink, fontWeight: '900', letterSpacing: -1 },
  brandAccent: { color: colors.action },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center', ...shadow },
  search: { marginTop: 18, height: 60, borderRadius: 20, paddingHorizontal: 17, backgroundColor: colors.surface, flexDirection: 'row', alignItems: 'center' },
  input: { flex: 1, paddingHorizontal: 12, color: colors.ink, fontSize: 15 },
  filter: { height: 38, width: 38, borderRadius: 13, backgroundColor: colors.ink, alignItems: 'center', justifyContent: 'center' },
  pin: { position: 'absolute', width: 40, height: 40, borderRadius: 20, backgroundColor: colors.inkSoft, alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: colors.surface, ...shadow },
  pinFeatured: { width: 50, height: 50, borderRadius: 25, backgroundColor: colors.action },
  userLocation: { position: 'absolute', top: '55%', left: '49%', width: 30, height: 30, borderRadius: 15, backgroundColor: '#3A8DFF35', alignItems: 'center', justifyContent: 'center' },
  userDot: { width: 13, height: 13, borderRadius: 7, backgroundColor: '#3A8DFF', borderWidth: 2, borderColor: colors.surface },
  location: { position: 'absolute', right: 20, bottom: 275, width: 52, height: 52, borderRadius: 18, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center' },
  bottomCard: { position: 'absolute', left: 12, right: 12, bottom: 12, borderRadius: 28, backgroundColor: colors.surface, padding: 20 },
  handle: { width: 42, height: 4, borderRadius: 2, backgroundColor: colors.line, alignSelf: 'center', marginBottom: 16 },
  nearbyRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  nearbyLabel: { color: colors.actionDark, fontSize: 10, fontWeight: '900', letterSpacing: 0.8 },
  shopName: { color: colors.ink, fontSize: 20, fontWeight: '900', marginTop: 5 },
  distance: { backgroundColor: '#EAF8F3', borderRadius: 12, paddingHorizontal: 10, paddingVertical: 7, flexDirection: 'row', gap: 4 },
  distanceText: { color: colors.actionDark, fontWeight: '800', fontSize: 12 },
  meta: { flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 18, gap: 5 },
  metaStrong: { color: colors.ink, fontWeight: '800' }, metaText: { color: colors.muted, fontSize: 13 }, dot: { width: 3, height: 3, borderRadius: 2, backgroundColor: colors.muted, marginHorizontal: 4 },
});
