const date = document.querySelector('.date');
const topNum = document.querySelector('.readings');
const bottomNum = document.querySelector('.readings2');
const button = document.querySelector('.btn');
const time = document.querySelector('.selector');
const listDay = document.querySelector('.day1');
const flash = document.querySelector('.title');
const clear = document.querySelector('.clear');
const theBody = document.querySelector('body');

button.disabled = true;

bottomNum.addEventListener('click', () => (button.disabled = false));

button.addEventListener('click', addToChart);
let i = 0;
function addToChart() {
	let count = ++i;

	let thisDay = moment().format('MMMM Do YYYY, h:mm a');
	let writeDate = date.value;
	let writeTop = topNum.value;
	let writeBottom = bottomNum.value;
	theBody.setAttribute('class', 'body2');
	button.disabled = true;

	writeTop > 171 || writeBottom > 106
		? flash.setAttribute('class', 'red')
		: ((topNum.value = ''), (bottomNum.value = ''));

	listDay.innerHTML += `<li class=this><p><b>Blood Pressure:</b></p> <span class='read'>${writeTop}/  ${writeBottom}</span><br /> <span class="time">${thisDay}</span><hr><button class='clear' onclick='clearRecent()'>&#xf014</button></li>`;
	localStorage.setItem(`${count}`, `${thisDay},${writeTop}, ${writeBottom}`);
}

function dateTime() {
	let date = moment().format('MMMM Do YYYY, h:mm:ss a');
	time.innerText = date;
}

function clearRecent() {
	let selected = document.querySelector('.this');
	selected.setAttribute('class', 'hide');
	localStorage.removeItem(i);
}

setInterval(dateTime, 1000);
