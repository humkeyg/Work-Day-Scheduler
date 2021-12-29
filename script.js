document.addEventListener("DOMContentLoaded", function(){
var timeDisplayEl = $('#time-display');

function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

function hourCheck() {
  let currentTime=moment().format('HH');
  console.log(currentTime);
  let hourArray=document.querySelectorAll('.hour');
  console.log(hourArray);
  for (let index = 0; index < hourArray.length; index++) {
    console.log(hourArray[index].getAttribute('data-hour'));
    if (hourArray[index].getAttribute('data-hour') < currentTime) {
      hourArray[index].classList.add('past');

    }else if (hourArray[index].getAttribute('data-hour') == currentTime) {
      hourArray[index].classList.add('present');

    }else if (hourArray[index].getAttribute('data-hour') > currentTime) {
      hourArray[index].classList.add('future');
      console.log(hourArray[index].getAttribute('data-hour'));  
    }
  }
}

hourCheck();
setInterval(displayTime, 1000);
});