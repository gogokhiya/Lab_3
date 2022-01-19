document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.num').
		forEach(
			(obj) => {
				obj.addEventListener('click',()=>{
					set_num(obj.innerText);
				},false);
			}
		);

	document.querySelectorAll('.act').
		forEach(
			(obj) => {
				obj.addEventListener('click',()=>{
					set_act(obj.innerText);
				},false);
			}
		);

	document.querySelectorAll('.spec').
		forEach(
			(obj) => {
				obj.addEventListener('click',()=>{
					set_spec(obj.innerText);
				},false);
			}
		);
});

var memo = 0;
var action = '';

function set_num(num){
	if(input.value === '0'){
		input.value = num;
	}else{
		input.value += num;
	}
}

function set_act(act){
	memo = parseInt(input.value);
	input.value = 0;
	action = act;
}

function set_spec(spec){
	switch(spec){
		case '=':
			result();
			break;
		case '<':
			del();
			break;
		case 'C':
			erase();
			break;
	}
}

function erase(){
	memo = 0;
	action = '';
	input.value = 0;
}

function del(){
	input.value = input.value.slice(0,-1);
	if(!input.value.length)input.value = 0;;
}

function result(){
	var val = parseInt(input.value);

	switch (action){
		case '*':
			input.value = memo * val;
		break;
		case '/':
			input.value = Math.round(memo / val);
		break;
		case '-':
			input.value = memo - val;
		break;
		case '+':
			input.value = memo + val;
		break;
	}
	action = '';
}


document.onkeydown = function(e){
	switch(e.key){
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
		case '0':
			set_num(e.key);
		break;
		case '*':
		case '/':
		case '-':
		case '+':
			set_act(e.key);
		break;
		case 'Backspace':
			set_spec('<');
		break;
		case 'С':
		case 'с':
			set_spec('C');
		break;
		case '=':
		case 'Enter':
			set_spec('=');
		break;

	}
}
