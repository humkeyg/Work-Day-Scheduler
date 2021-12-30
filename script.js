var saveBtn = document.getElementsByTagName('button');

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
    const value=document.getElementById(key).value;

    localStorage.setItem(key, value);
  }

  let btnArray = document.querySelectorAll('.saveBtn')

  for (let index = 0; index < btnArray.length; index++) {
    btnArray[index].addEventListener('click', function(event) {
      save(event)
    });
    
  }

  function loadText() {
    let textArray=document.querySelectorAll('.description')

    for (let index = 0; index < textArray.length; index++) {
      const localStorageKey=textArray[index].id;
      const localStorageValue=localStorage.getItem(localStorageKey);

      if (localStorageValue) {
        document.getElementById(localStorageKey).value = localStorageValue;
      }  
    }
  }

  loadText();
  hourCheck();
  setInterval(displayTime, 1000);
});
