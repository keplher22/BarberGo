import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { colors, shadow } from '../theme';

type Props = {
  label: string;
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  variant?: 'primary' | 'secondary';
  style?: ViewStyle;
};

export function PrimaryButton({ label, onPress, icon, variant = 'primary', style }: Props) {
  const secondary = variant === 'secondary';
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, secondary && styles.secondary, !secondary && shadow, pressed && styles.pressed, style]}
    >
      {icon ? <Ionicons name={icon} size={20} color={secondary ? colors.ink : colors.surface} /> : null}
      <Text style={[styles.label, secondary && styles.secondaryLabel]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { height: 58, borderRadius: 18, backgroundColor: colors.action, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 10 },
  secondary: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.line },
  label: { color: colors.surface, fontSize: 15, fontWeight: '800', letterSpacing: 0.5 },
  secondaryLabel: { color: colors.ink },
  pressed: { opacity: 0.82, transform: [{ scale: 0.99 }] },
});
