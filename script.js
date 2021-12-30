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
  let scheduleValue=event.target.parentElement.previousElementSibling.children[0].value;
  let scheduleKey=event.target.parentElement.previousElementSibling.children[0].getAttribute('data-description');
  console.log(scheduleValue);
  localStorage.setItem(scheduleKey, scheduleValue);
}

let btnArray = document.querySelectorAll('.saveBtn')

for (let index = 0; index < btnArray.length; index++) {
  btnArray[index].addEventListener('click', function(event) {
   // console.log(event.target.parentElement.previousElementSibling.children[0].getAttribute('data-description'));
    save(event)
  });
  
}

//make into savetext function
function saveText() {
  let textArray=document.querySelectorAll('.description')
  //put all text areas in an array
  for (let index = 0; index < textArray.length; index++) {
    textArray[index];
    //then if not, don't display anything
    if (localStorage.getItem(textArray)===null) {
      //then check if there's something for it in local storage, possibly give id value that matches key
    } else {
      //if there is, then grab the local storage value and set the text area's value = to that
      localStorage.setItem(scheduleKey, scheduleValue)
    }
  }
}

saveText();
hourCheck();
setInterval(displayTime, 1000);
});
