
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

formEl.addEventListener('input', onInputChange);
formEl.addEventListener('submit', onFormSubmit);

function onInputChange(event) {
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const message = formElements.message.value;

    const formData = {
        email,
        message,
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

function onFormSubmit(event) {
    event.preventDefault();

    const rawValues = localStorage.getItem('feedback-form-state');
    const valuesObject = JSON.parse(rawValues);
    console.log(valuesObject);

    event.currentTarget.reset();
}

 const rawValues = localStorage.getItem('feedback-form-state');
 const valuesObject = JSON.parse(rawValues);
   
 const savedEmail = valuesObject.email;
 const savedMessage = valuesObject.message;
 
 if(savedEmail) {
     document.querySelector('input').value = savedEmail;
 };
 if(savedMessage) {
     document.querySelector('textarea').value = savedMessage;
 };



// inputEl.addEventListener('change', onInputChange);
// messageEl.addEventListener('change', onTextAreaChange);

// function onInputChange(e) {
//    const currentEmail = e.currentTarget.value;
//    console.log(currentEmail);
//    localStorage.setItem('current-email', currentEmail);
// };
// function onTextAreaChange(e) {
//     const currentMessage = e.currentTarget.value;
//     console.log(currentMessage);
//     localStorage.setItem('current-message', currentMessage);
// }

// const savedEmail = localStorage.getItem('current-email');
// const savedMessage = localStorage.getItem('current-message');

// if(savedEmail) {
//     document.querySelector('input').value = savedEmail;
// };
// if(savedMessage) {
//     document.querySelector('textarea').value = savedMessage;
// };


