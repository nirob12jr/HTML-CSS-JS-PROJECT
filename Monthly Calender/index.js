const monthsel = document.querySelector(".date h1")
const DateEL = document.querySelector(".date p") // Return and new webpage design and decalre the class fuction
const daysEl = document.querySelector(".days");

const monthinx = new Date().getMonth();//Const are much like variables declared using the let keyword
const lastday = new Date(new Date().getFullYear(), monthinx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthinx, 1).getDay() - 1;

console.log(lastday)

const months =[
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

monthsel.innerText = months[monthinx];
DateEL.innerText = new Date().toDateString();

let days = "";
for (let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`;
  }
for (let i = 1; i <= lastday; i++) {
    if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;

} else{
    days += `<div>${i}</div>`;
}
}



daysEl.innerHTML = days

