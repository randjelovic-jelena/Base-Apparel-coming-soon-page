'use strict';

const submitBtn=document.querySelector('#submit-btn');
const email=document.querySelector('#user-email');
const errorSign=document.querySelector('.error-sign');
const errorMessage=document.querySelector('.email-status');

const subscribeForm=document.querySelector('.subscribe-form');

const toggleElements=()=>{
	errorMessage.classList.toggle('show');
	errorSign.classList.toggle('show');
}

const emptyInput=()=>{
	email.value='';
}

submitBtn.addEventListener('click',()=>{
	let emailCheck=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
	if(email.value.match(emailCheck)){
		subscribeForm.classList.remove('warning');
		toggleElements();
		emptyInput();
	}else{
		subscribeForm.classList.add('warning');
		toggleElements();
	}
});

email.addEventListener('blur',()=>{
	emptyInput();
});