//Create input element for testing
var input = document.createElement('input');
//Create supports
var supports = {};
supports.autofocus = 'autofocus' in input;
supports.required = 'required' in input;
supports.placeholder = 'placeholder' in input;

if (!supports.autofocus){

}
if (!supports.required){

}
if (!supports.placeholder){

}
var send = document.getElementById('contact-submit');
if (send) {
	send.onclick = function () {
		this.innerHTML = '...Sending';
	}
}