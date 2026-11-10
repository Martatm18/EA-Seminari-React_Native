// src/components/FavouriteButton.tsx
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useStore } from '@nanostores/react';
import { favoritesStore, toggleFavorite } from '../stores/favorites';

interface FavouriteButtonProps {
  bookId: string;
}

export function FavouriteButton({ bookId }: FavouriteButtonProps) {
  const favorites = useStore(favoritesStore);
  const isFavorite = favorites.includes(bookId);

  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={() => toggleFavorite(bookId)}
      accessibilityLabel={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
    >
      <Ionicons
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={22}
        color={isFavorite ? '#EF4444' : '#64748B'}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});