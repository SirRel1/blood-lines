const date = document.querySelector('.date');
const topNum = document.querySelector('.readings');
const bottomNum = document.querySelector('.readings2');
const button = document.querySelector('.btn');
const time = document.querySelector('.selector');
const listDay = document.querySelector('.day1');

button.addEventListener('click', addToChart);

function addToChart() {
	let writeDate = date.value;
	let writeTop = topNum.value;
	let writeBottom = bottomNum.value;
	listDay.innerHTML += `<li><p><b>Blood Pressure:</b></p> <span class='read'>${writeTop}/  ${writeBottom}</span> <span class="time">${new Date()}</span><hr></li>`;
	console.log(writeTop);
	console.log(writeBottom);
	console.log(writeDate);
}

function dateTime() {
	let date = new Date();
	time.innerText = date;
}

setInterval(dateTime, 1000);
