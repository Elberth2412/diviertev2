import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDwBpuAxAWE_HJoV7-lONw5i17wOy718kc",
  authDomain: "diviertev2.firebaseapp.com",
  projectId: "diviertev2",
  storageBucket: "diviertev2.firebasestorage.app",
  messagingSenderId: "158511642159",
  appId: "1:158511642159:web:08afc8ee6d49c11d3038da"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();