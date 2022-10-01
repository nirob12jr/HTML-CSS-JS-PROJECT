
/*const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");


function setDate() {
    const now = new Date();

    const getHour = now.getHours();
    const getSecond = now.getSeconds();
    const getMinute = now.getMinutes();

    const hourDeg = (getHour / 12) * 360;
    const secondDeg = (getSecond / 60) * 360;
    const minuteDeg = (getMinute / 60) * 360;

    hour.style.trasnform = `rotate(${hourDeg}deg)`;
    second.style.trasnform = `rotate(${secondDeg}deg)`;
    minute.style.trasnform = `rotate(${minuteDeg}deg)`;

}

setInterval(setDate, 1000);*/

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
  const now = new Date();

  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();

  const secondDegree = (getSecond / 60) * 360;
  const minuteDegree = (getMinute / 60) * 360;
  const hourDegree = (getHour / 12) * 360;

  second.style.transform = `rotate(${secondDegree}deg)`;
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);





