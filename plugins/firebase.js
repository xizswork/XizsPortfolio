import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAlYwfppprfMRAryDyjtziTPm6qkjxI-00",
  authDomain: "xizsportfolio-c4a3c.firebaseapp.com",
  projectId: "xizsportfolio-c4a3c",
  storageBucket: "xizsportfolio-c4a3c.appspot.com",
  messagingSenderId: "989750039883",
  appId: "1:989750039883:web:a684eaab77a481bdde84ce",
  measurementId: "G-MP5HM8ESEG"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)