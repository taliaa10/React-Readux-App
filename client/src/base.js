import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBpoF6maU6UzMFMAY5QamJDcE4l1_3EcUM',
  authDomain: 'react-redux-project-taliaa.firebaseapp.com',
  databaseURL: 'https://react-redux-project-taliaa.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
