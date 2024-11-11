const enddate = new Date("7 Nov, 2024 21:00:00").getTime();
const startdate = new Date().getTime();

// function which updates timer

let x = setInterval(function updatetimer() {
  const currentdate = new Date().getTime();

  const distancecovered = currentdate - startdate;
  const distanceremaining = enddate - currentdate;

  // calculate days,hrs,mins,secs remaining
  // 1 day = 24*60*60*1000 msec
  // 1 hr = 60*60*1000 msec
  // 1 min = 60*1000 msec
  // 1 sec = 1000 msec

  const days = Math.floor(distanceremaining / (24 * 60 * 60 * 1000));

  const hrs = Math.floor(
    (distanceremaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );

  const mins = Math.floor((distanceremaining % (60 * 60 * 1000)) / (60 * 1000));

  const secs = Math.floor((distanceremaining % (60 * 1000)) / 1000);

  // upar waali 4 values ko ui pr show krana hai

  document.getElementById("days").innerHTML = days;

  document.getElementById("hrs").innerHTML = hrs;

  document.getElementById("min").innerHTML = mins;

  document.getElementById("sec").innerHTML = secs;

  // Progress bar

  // calculate width % for progress bar

  const totaldistance = enddate - startdate;

  const percentagewidth = (distancecovered / totaldistance) * 100;

  // set width for progress bar

  document.getElementById("progress").style.width = percentagewidth + "%";

  // condition check

  if (distanceremaining < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
    document.getElementById("progress").style.width = "100%";
  }
}, 1000); // ye update timer func ko call krega after every 1 sec
