import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * En web necesitamos devolver un valor estable para render estático.
 * Cuando llega la hidratación, React Native nos da el esquema real.
 */
export function useColorScheme() {
  const colorScheme = useRNColorScheme();

  return colorScheme ?? 'light';
}
