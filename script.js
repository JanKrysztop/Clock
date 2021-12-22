setInterval(showTime, 1000)
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let isAmPm = "AM";

  if (hour >= 12) {
    isAmPm = "PM";
    hour -= 11;
  }
  if (hour == 0) {
    hour = 12;
    isAmPm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  let timeNow = hour + ":" + minute + ":" + second + " " + isAmPm;
  document.querySelector("#clock").innerHTML = timeNow;
}
showTime();

