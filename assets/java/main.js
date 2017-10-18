 // 1. Initialize Firebase
 var config = {
   apiKey: "AIzaSyBk0xoNjEH7zQ6gSEugVkjHuPJNdPVlFxc",
    authDomain: "train-746f7.firebaseapp.com",
    databaseURL: "https://train-746f7.firebaseio.com",
    projectId: "train-746f7",
    storageBucket: "train-746f7.appspot.com",
    messagingSenderId: "488564384574"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
 
  // 2. Button for adding Employees
  $("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var trainDestination= $("#destination-input").val().trim();
  var trainStart = moment($("#time-input").val().trim(), "DD/MM/YY").format("X");
  var trainFreq = $("#freq-input").val().trim();

  // Creates local "temporary" object for holding employee data
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    start: trainStart,
    freq: trainFreq
  };

  // Uploads employee data to the database
  database.ref().set(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.start);
  console.log(newTrain.freq);

  // Alert
  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#freq-input").val("");
});
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainStart = childSnapshot.val().start;
  var trainFreq = childSnapshot.val().freq;

  // Employee Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainStart);
  console.log(trainFreq);

 
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" +trainDestination + "</td><td>" +
  trainStart + "</td><td>" + trainFreq );
});