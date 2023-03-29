'use strict';

console.log('funguju!');

//Umožněte uživateli zadat počet vteřin skrze připravené textové poličko. 
//K získání hodnoty z políčka použijte vlastnost value. Nezapomeňte obsah políčka zkonvertovat na číslo. 

let time;

    const startTimer = (event) => {
        //formular sa neodosle
      event.preventDefault();
      //zada sa pociatocny input a zmeni na integer
      const timeInput = document.querySelector(".time-input");
      time = parseInt(timeInput.value);
      const interval = setInterval(() => {
        time--;
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        document.querySelector(".alarm__minutes").textContent = minutes;
        document.querySelector(".alarm__seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;
        if (time === 0) {
          clearInterval(interval);
          const audio = new Audio("assets/alarm.mp3");
          audio.play();
        }
      }, 1000);
        /*if (time > 0) {
        time--;
        document.querySelector(".alarm__seconds").textContent=String(time)
    }
        if (time <= 0) {
            clearInterval(interval);
          const audio = new Audio("assets/alarm.mp3");
          audio.play();
        }
        }, 1000);*/
    }
    document.querySelector(".start").addEventListener("click", startTimer);