function clock() {
  const d = new Date();
  const minutes = d.getMinutes();
  const hours = d.getHours();
  const seconds = d.getSeconds();

  //rotation:
  const hourRot = hours * 30;
  const minRot = minutes * 6;
  const secRot = seconds * 6;

  const hourAnalog = document.querySelector("#analog-hours");
  const minAnalog = document.querySelector("#analog-minutes");
  const secAnalog = document.querySelector("#analog-seconds");

  hourAnalog.style.transform = `rotate(${hourRot}deg) translateY(-50%)`;
  minAnalog.style.transform = `rotate(${minRot}deg) translateY(-50%)`;
  secAnalog.style.transform = `rotate(${secRot}deg) translateY(-50%)`;

  // DIGITAL CLOCK
  const HH = document.querySelector("#HH");
  const MM = document.querySelector("#MM");
  const SS = document.querySelector("#SS");

  HH.innerText = hours < 10 ? "0" + hours : hours;
  MM.innerText = minutes < 10 ? "0" + minutes : minutes;
  SS.innerText = seconds < 10 ? "0" + seconds : seconds;

  let colons = document.querySelectorAll(".colons");
  colons.forEach((el) => el.classList.toggle("colons-hidden"));
}

clock();
setInterval(clock, 1000);
