// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIAwvw1tLIuEVudTdBycNPZoJ8CT7tO0s",
  authDomain: "compassion-todo-app-7197d.firebaseapp.com",
  databaseURL: "https://compassion-todo-app-7197d-default-rtdb.firebaseio.com",
  projectId: "compassion-todo-app-7197d",
  storageBucket: "compassion-todo-app-7197d.appspot.com",
  messagingSenderId: "610981354257",
  appId: "1:610981354257:web:7568e6944d96cc7ab8cab0",
  measurementId: "G-HY33Z6L6QJ",
};

// Login / Register navigation Variables
const signupButton = document.getElementById("sign-up");
const returnBtn = document.getElementById("return-btn");
const createacctSection = document.getElementById("create-acct");
const main = document.getElementById("main");

// Login / Register navigation functionality
signupButton.addEventListener("click", () => {
  main.style.display = "none";
  createacctSection.style.display = "block";
});

returnBtn.addEventListener("click", () => {
  main.style.display = "block";
  createacctSection.style.display = "none";
});
