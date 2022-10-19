import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAkp3gQdHbMPD5pCfHbBzIIgFpdCJXD5KM',
  authDomain: 'wily-app-v2.firebaseapp.com',
  projectId: 'wily-app-v2',
  storageBucket: 'wily-app-v2.appspot.com',
  messagingSenderId: '772559744213',
  appId: '1:772559744213:web:9417b879882f231175065c',
  measurementId: 'G-H8Y352W6Z2',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
