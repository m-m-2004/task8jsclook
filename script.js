function updateClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";
  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dayOfWeek = weekday[date.getDay()];

  let dayOfMonth = months[date.getMonth()];
  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }
  let timeString = `${hours}:${minutes}:${seconds} ${session}`;
  let monthNumber = date.getMonth() + 1; // يجب إضافة واحد لأن الأشهر تبدأ من 0
  document.getElementById("time").innerHTML = timeString;
  document.getElementById("time").textContent = timeString;
  document.getElementById("day").innerHTML = `${dayOfMonth}  ${monthNumber}  /  ${date.getFullYear()}`;
  document.getElementById("dayOfWeek").innerHTML = `${dayOfWeek}`;
  setTimeout(updateClock, 1000);
}
updateClock();
