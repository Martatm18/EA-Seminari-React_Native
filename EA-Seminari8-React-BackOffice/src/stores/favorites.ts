// src/stores/favorites.ts
import { atom } from 'nanostores';

const STORAGE_KEY = 'favorite-books';

function getStorage() {
  if (typeof globalThis === 'undefined') {
    return null;
  }

  return 'localStorage' in globalThis ? globalThis.localStorage : null;
}

function getInitialFavorites(): string[] {
  const storage = getStorage();

  if (!storage) {
    return [];
  }

  try {
    const stored = storage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export const favoritesStore = atom<string[]>(getInitialFavorites());

favoritesStore.listen((favorites) => {
  const storage = getStorage();

  if (!storage) {
    return;
  }

  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  } catch {
    // Si falla el almacenamiento local, no pasa nada
  }
});

export function toggleFavorite(bookId: string) {
  const current = favoritesStore.get();
  if (current.includes(bookId)) {
    favoritesStore.set(current.filter((id) => id !== bookId));
  } else {
    favoritesStore.set([...current, bookId]);
  }
}