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

	listDay.innerHTML += `<li class=thisOne><p><b>Blood Pressure:</b></p> <span class='read'>${writeTop}/  ${writeBottom}</span><br /> <span class="time">${thisDay}</span><hr><button class='clear' onclick='clearRecent(this)'>Trash &#xf014</button></li>`;
	localStorage.setItem(`${thisDay}`, `${writeTop}, ${writeBottom}`);
}

function dateTime() {
	let date = moment().format('MMMM Do YYYY, h:mm:ss a');
	time.innerText = date;
}

function clearRecent(e) {
	let selected = document.querySelector('.thisOne');
	selected.setAttribute('class', 'hide');
	let clicked = localStorage.key(e);

	localStorage.removeItem(clicked);
}

setInterval(dateTime, 1000);

function returning() {
	let a = 0;

	localStorage.getItem(this);
	let clicked = localStorage.key(i);
	console.log(clicked);
	console.log(localStorage.getItem(clicked));

	var values = [],
		keys = Object.keys(localStorage),
		values = Object.values(localStorage);
	i = keys.length;

	while (i--) {
		values.push(localStorage.getItem(keys[i]));
	}

	theNext = () => {
		++a;
		listDay.innerHTML += `<li class=thisOne><p><b>Blood Pressure:</b></p> <span class='read'>${values[a]}</span><br /> <span class="time">${keys[a]}</span><hr><button class='clear' onclick='clearRecent(this)'>Trash &#xf014</button></li>`;

		let clearBtn = document.querySelector('.next');

		if (localStorage.length - 1 == a) {
			clearBtn.disabled = true;
		}
		console.log(a, localStorage.length - 1);
		return a;
	};

	return (listDay.innerHTML += `<li class=thisOne><p><b>Blood Pressure:</b></p> <span class='read'>${values[a]}</span><br /> <span class="time">${keys[a]}</span><hr><button class='clear' onclick='clearRecent(this)'>Trash &#xf014</button><button class='next' onclick='theNext()'>Prev>></button></li>`);
}

localStorage.length == 0 ? console.log('nada') : returning();
