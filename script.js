var saveBtn = document.getElementsByTagName('button');
// saveBtn.addEventListener("click", save());


document.addEventListener("DOMContentLoaded", function(){
var timeDisplayEl = $('#time-display');

function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

function hourCheck() {

  let currentTime=moment().format('HH');
  let hourArray=document.querySelectorAll('.hour');

  for (let index = 0; index < hourArray.length; index++) {
    if (hourArray[index].getAttribute('data-hour') < currentTime) {
      hourArray[index].classList.add('past');

    }else if (hourArray[index].getAttribute('data-hour') == currentTime) {
      hourArray[index].classList.add('present');

    }else if (hourArray[index].getAttribute('data-hour') > currentTime) {
      hourArray[index].classList.add('future');
    }
  }
}

function save(event) {
  const id=event.target.dataset.schedulekey;
  const key=`scheduleKey-${id}`;
  console.log(key);
  const value=document.getElementById(key).value;
  console.log(value);
  // let scheduleValue=event.target.parentElement.previousElementSibling.children[0].value;
  // let scheduleKey=event.target.parentElement.previousElementSibling.children[0].getAttribute('id');
  // console.log(scheduleKey, scheduleValue);
  // localStorage.setItem(scheduleKey, scheduleValue);
  localStorage.setItem(key, value);
}

let btnArray = document.querySelectorAll('.saveBtn')

for (let index = 0; index < btnArray.length; index++) {
  btnArray[index].addEventListener('click', function(event) {
   // console.log(event.target.parentElement.previousElementSibling.children[0].getAttribute('data-description'));
    save(event)
  });
  
}

//make into savetext function
function loadText() {
  //put all text areas in an array
  let textArray=document.querySelectorAll('.description')
  for (let index = 0; index < textArray.length; index++) {
    const localStorageKey=textArray[index].id;
    const localStorageValue=localStorage.getItem(localStorageKey);
    //then if not, don't display anything 
    if (localStorageValue) {
      document.getElementById(localStorageKey).value = localStorageValue;
      //then check if there's something for it in local storage, possibly give id value that matches key
    }  
  }
}

loadText();
hourCheck();
setInterval(displayTime, 1000);
});
