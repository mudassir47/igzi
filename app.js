  // Your Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCjDN2loFBsVmZr3pQJGmVi1ZR3SWpeo4k",
    authDomain: "igzi-418a7.firebaseapp.com",
    projectId: "igzi-418a7",
    storageBucket: "igzi-418a7.appspot.com",
    messagingSenderId: "428960456482",
    appId: "1:428960456482:web:11690cac87a7a09320cf7b",
    measurementId: "G-8LGMW1FGS6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const database = firebase.database();

  // DOM Elements
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const loginTab = document.getElementById('login-tab');
  const registerTab = document.getElementById('register-tab');
  const errorMessage = document.getElementById('error-message');

  // Toggle Forms
  loginTab.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    loginTab.classList.add('border-blue-500');
    registerTab.classList.remove('border-blue-500');
    errorMessage.textContent = "";
  });

  registerTab.addEventListener('click', () => {
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    registerTab.classList.add('border-blue-500');
    loginTab.classList.remove('border-blue-500');
    errorMessage.textContent = "";
  });

  // Handle Registration
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('register-username').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // Save additional data to Realtime Database
        database.ref('users/' + user.uid).set({
          username: username,
          email: email
        });
        errorMessage.textContent = "Registration successful!";
        
        errorMessage.classList.remove('text-red-500');
        errorMessage.classList.add('text-green-500');
        registerForm.reset();
      })
      .catch((error) => {
        errorMessage.textContent = error.message;
        errorMessage.classList.remove('text-green-500');
        errorMessage.classList.add('text-red-500');
      });
  });

  // Handle Login
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        errorMessage.textContent = "Login successful!";
        errorMessage.classList.remove('text-red-500');
        errorMessage.classList.add('text-green-500');
        loginForm.reset();
        // Redirect or perform other actions after login
      })
      .catch((error) => {
        errorMessage.textContent = error.message;
        errorMessage.classList.remove('text-green-500');
        errorMessage.classList.add('text-red-500');
      });
  });