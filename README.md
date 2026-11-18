# Enllaç Vídeo Explicació Exercici React Native Seminari 8: 
https://drive.google.com/file/d/1_TQSW67t-6FN2HQ6IyFtQx_81zLTK9dU/view?usp=sharing

# Documentació:
**1. Referències dels materials consultats**
- Repositoris del seminari.
- Els vídeos proposats.
- Explicació de classe.

**2. Detall de l'ús de la IA generativa**
Eina i model d'IA usat: Gemini (Google).
- **Registre d'usos:**
- **Registre 1:**  Estructuració de la Pantalla de Favorits amb Expo Router i FlatList (Frontend):
  - **Prompt literal:** Com construeixo la pantalla de favorits a favorites.tsx dins d'Expo Router utilitzant FlatList per filtrar de manera reactiva a partir del store global de Nanostores?
  - **Incoherències detectades en la resposta:** La IA va proposar utilitzar un element div o mapatges web estàtics (.map()) que no s'ajusten al patró de rendiment optimitzat per a dispositius mòbils.
  - **Solució / adaptació manual:** Vaig haver de configurar manualment la implementació d'una FlatList amb el seu keyExtractor, l'estat de càrrega i un component ListEmptyComponent per gestionar adequadament quan no hi ha favorits guardats.
- **Registre 2:**
  - **Prompt literal:** Com gestiono l'estat tàctil pressed de Pressable a React Native mentre canvio de color i d'icona (heart / heart-outline) a Ionicons segons l'estat de Nanostores?
  - **Incoherències detectades en la resposta:** La IA va aplicar estats de CSS web (:hover) i classes de tipografia incompatibles amb les primitives de React Native.
  - **Solució / adaptació manual:** Vaig adaptar manualment la funció d'estil inline del Pressable combinant-la amb l'avaluació de si l'ID del llibre està inclòs al store mitjançant useStore().
