async function displayResults() {
  const d = new Date();
  let hour = d.getHours();
  let minutes = d.getMinutes();
  let day = d.getDay();
  const currentDay = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ][day].toLowerCase();

  if (hour > "09" && hour < "12") {
    window.location.href = './ochtend.html';
    console.log('./ochtend.html');
  } else if (hour > "12" && hour < "15") {
    window.location.href = './middag.html';
  } else if (hour > "15" && hour < "17") {
    window.location.href = './avond.html';
  }
}

displayResults();

console.log(displayResults());