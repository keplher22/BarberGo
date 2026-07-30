import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';
import { Service } from '../types';

export function ServiceCard({ service, selected = false, onPress }: { service: Service; selected?: boolean; onPress?: () => void }) {
  return (
    <Pressable disabled={!onPress} onPress={onPress} style={[styles.card, selected && styles.selected]}>
      <View style={[styles.icon, selected && styles.selectedIcon]}>
        <Ionicons name={service.id === 'beard' ? 'person-outline' : 'cut-outline'} size={20} color={selected ? colors.surface : colors.ink} />
      </View>
      <View style={styles.copy}>
        <Text style={styles.name}>{service.name}</Text>
        <Text style={styles.duration}>{service.duration} min</Text>
      </View>
      <Text style={styles.price}>R$ {service.price}</Text>
      {onPress ? <View style={[styles.radio, selected && styles.radioSelected]}>{selected && <View style={styles.dot} />}</View> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { minHeight: 78, padding: 14, borderRadius: 18, borderWidth: 1, borderColor: colors.line, backgroundColor: colors.surface, flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  selected: { borderColor: colors.action, backgroundColor: '#F1FBF7' },
  icon: { width: 44, height: 44, borderRadius: 14, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  selectedIcon: { backgroundColor: colors.action },
  copy: { flex: 1 },
  name: { color: colors.ink, fontWeight: '800', fontSize: 16 },
  duration: { color: colors.muted, marginTop: 4, fontSize: 13 },
  price: { color: colors.ink, fontWeight: '800', fontSize: 15, marginRight: 12 },
  radio: { width: 21, height: 21, borderRadius: 11, borderWidth: 2, borderColor: '#C7CED7', alignItems: 'center', justifyContent: 'center' },
  radioSelected: { borderColor: colors.action },
  dot: { width: 11, height: 11, borderRadius: 6, backgroundColor: colors.action },
});
