import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('.feedback-form input');
const textareaRef = document.querySelector('.feedback-form textarea');

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: inputRef.value, message: textareaRef.value });

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput() {
  const formData = {
    email: inputRef.value,
    message: textareaRef.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedMessage);

  if (savedMessage) {
    inputRef.value = savedMessage.email;
    textareaRef.value = savedMessage.message;
  }
}
