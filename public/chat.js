var socket = io.connect('http://localhost:4000');
var handle;
var message = document.getElementById('message');
var btn = document.getElementById('send');
var start = document.getElementById('namesend')
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');
var name_win = document.getElementById('name_win');
var chat_win = document.getElementById('chat_win');


btn.addEventListener('click', function(){
	socket.emit('chat', {
		message: message.value,
		handle: handle
	});
});

function takeName(){
    handle = document.getElementById('name').value;
	name_win.style = 'display: none';
	chat_win.style = 'display: block';
};

message.addEventListener('keypress', function(){
	socket.emit('typing', handle);
});

socket.on('chat', function(data){
	feedback.innerHTML = "";
	output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(data){
	console.log('yp' + data);
	feedback.innerHTML = '<p><strong>' + data + ': </strong> is typing.... </p>';
});

