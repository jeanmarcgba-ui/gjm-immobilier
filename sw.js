// Service worker minimal — sert uniquement à rendre GJM Immobilier installable
// (icône sur l'écran d'accueil / bureau). Ne met rien en cache : l'application
// continue de fonctionner exactement comme avant, en ligne, avec les données
// toujours à jour depuis Supabase.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // On laisse passer toutes les requêtes normalement (pas de mode hors-ligne).
});
