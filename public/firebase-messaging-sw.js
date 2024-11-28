importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyD8uGNu0cw5Eyo3ccjfbNqQlBzOQsN7eWU',
  authDomain: 'projetoteste1-93927.firebaseapp.com',
  projectId: 'projetoteste1-93927',
  storageBucket: 'projetoteste1-93927.firebasestorage.app',
  messagingSenderId: '899912636307',
  appId: '1:899912636307:web:29de07e748f9a1d89dba66'
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});