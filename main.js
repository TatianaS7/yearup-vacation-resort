console.log("Your code is running");

//Overnight Stay Functions
function getRoomRate() {
  let checkIn = document.getElementById("checkInDate");
  let roomType = document.getElementById("")//different values for each type??

  if(checkIn) //if check in date is June (06) - Aug (08) | also add room 
}

// Dining
function showAsYouGo() {
  document.getElementById("asYouGo").style.display = "block";
  document.getElementById("all-inclusive").style.display = "none"; 
}

function showAllInclusive() {
  document.getElementById("asYouGo").style.display = "none";
  document.getElementById("all-inclusive").style.display = "block"; 
}



let extraPerDay = 0;
let tollTag = document.getElementById("tollTag").checked;

if (tollTag == true) {
  extraPerDay += 3.95;
}

let gps = document.getElementById("gps").checked;
if (gps == true) {
  extraPerDay += 4.95;
}

let roadside = document.getElementById("roadside").checked;
if (roadside == true) {
  extraPerDay += 2.95;
}

//Audio Fieldset
let autoRadioBtn = document.getElementById("auto");
let homeRadioBtn = document.getElementById("home");
let basePremium = 0;

if (autoRadioBtn.checked) {
    basePremium = 175.00;
}
else if (homeRadioBtn.checked) {
    basePremium = 395.00;
}
else { // it must be life!
    basePremium = 225.00;
}

console.log(extraPerDay);
