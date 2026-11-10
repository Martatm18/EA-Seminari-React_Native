// src/app/(tabs)/favorites.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useStore } from '@nanostores/react';

import { favoritesStore, toggleFavorite } from '../../stores/favorites';
import { useApiList } from '../../hooks/useApiList';
import { bookService } from '../../services/book.service';
import { BookCard } from '../../components/BookCard';
import type { Book } from '../../models';

export default function FavouritesScreen() {
  const router = useRouter();
  const favorites = useStore(favoritesStore);
  const { items: books, loading } = useApiList(bookService.getBooks);

  const favoriteBooks = books.filter((book) => favorites.includes(book._id));

  const handleDetail = (book: Book) => {
    router.push({
      pathname: '/(tabs)/books/[id]',
      params: { id: book._id },
    });
  };

  const handleEdit = (book: Book) => {
    router.push({
      pathname: '/(tabs)/books/[id]/edit',
      params: { id: book._id },
    });
  };

  const handleRemoveFavorite = (book: Book) => {
    toggleFavorite(book._id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Libros Favoritos</Text>
        <Text style={styles.subtitle}>
          {favoriteBooks.length} {favoriteBooks.length === 1 ? 'favorito' : 'favoritos'}
        </Text>
      </View>

      {loading ? (
        <View style={styles.centered}>
          <Text style={styles.loadingText}>Cargando favoritos...</Text>
        </View>
      ) : (
        <FlatList
          data={favoriteBooks}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <BookCard
              book={item}
              viewMode="list"
              onEdit={handleEdit}
              onDelete={handleRemoveFavorite}
              onPress={() => handleDetail(item)}
            />
          )}
          contentContainerStyle={favoriteBooks.length === 0 ? styles.emptyList : styles.list}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons name="heart-dislike-outline" size={48} color="#94A3B8" />
              <Text style={styles.emptyTitle}>No tienes favoritos todavía</Text>
              <Text style={styles.emptySubtitle}>Marca libros como favoritos desde el catálogo</Text>
            </View>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  header: {
    marginVertical: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },
  list: {
    paddingBottom: 24,
  },
  emptyList: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    gap: 8,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#475569',
  },
  emptySubtitle: {
    fontSize: 13,
    color: '#94A3B8',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 14,
    color: '#64748B',
  },
});