console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("sucessfully submitted...")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function submit(event){
	event.preventDefault();
	alert("submit succesfully... Good job");
}

const ducky= document.querySelector('#ducky');

ducky.addEventListener('mouseover',submit);