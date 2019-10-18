function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printResult(rst){
	var div = document.createElement('div');
	div.innerHTML = rst;
	document.getElementById('results').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}