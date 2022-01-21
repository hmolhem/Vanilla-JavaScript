data = {
    cardContent: [    
        {
            id:1,
            question:"what color is sky",
            answer:"blue"
        },
        {
            id:2,
            question:"what is the capital city of Iran",
            answer:"Tehran"
        },
        {   
            id:3,
            question:"what is the population of Iran",
            answer:"80M"
        }
    ]
};

const result = document.querySelector('.result');
const dialog = document.querySelector('.example-dialog');

dialog.addEventListener('close', (event) => {
    result.textContent = 'dialog was closed';
});

const openDialog = document.querySelector('#showModalBtn');
openDialog.addEventListener('click', () => {
  if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      result.textContent = '';
  } else {
      result.textContent = 'The dialog API is not supported by this browser';
  }
});

const closeButton = document.querySelector('#close');
closeButton.addEventListener('click', () => {
    dialog.close();
});

const question = document.querySelector('#question');
const answer = document.querySelector('#answer');
const saveModalButton = document.querySelector('#save');

question.addEventListener('click', event =>{
    console.log(event.target.value);
});
answer.addEventListener('click',(event)=>{
    console.log(event.target.tagName);
});

saveModalButton.addEventListener('click',(event)=>{
    // console.log(event.target.tagName);
    console.log(question.value);
    console.log(answer.value);
});

var template = document.getElementById('template').innerHTML;
var rendered = Mustache.render(template, data);
document.getElementById('target').innerHTML = rendered;


const showAnswer = document.querySelectorAll('#showAnswer');
// showAnswer.addEventListener('mousemove',showHideAnswer);

function showHideAnswer() {
    window.alert('Hello');
}