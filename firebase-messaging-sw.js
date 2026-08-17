importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCgMCEapQnEC89b6c3_8lpqjRGRqRD5Quk",
  authDomain: "defter-f2007.firebaseapp.com",
  databaseURL: "https://defter-f2007-default-rtdb.firebaseio.com",
  projectId: "defter-f2007",
  storageBucket: "defter-f2007.firebasestorage.app",
  messagingSenderId: "939612854579",
  appId: "1:939612854579:web:6a5ebf9010f00547ff0646"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || 'Hesap Defteri';
  const body = (payload.notification && payload.notification.body) || '';
  self.registration.showNotification(title, { body: body });
});
