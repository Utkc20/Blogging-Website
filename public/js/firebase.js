

let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyB3sXTbWNUsQ5sg6stIpPaJu64gI5MNgoo",
  authDomain: "blog-website-138ce.firebaseapp.com",
  projectId: "blog-website-138ce",
  storageBucket: "blog-website-138ce.appspot.com",
  messagingSenderId: "28448412362",
  appId: "1:28448412362:web:fee1d073105c64797dda33"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser =() =>{
  auth.signOut();
  location.reload();
}




  