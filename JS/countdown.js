const validationPrint = (timeUnit) => {
    return timeUnit < 10 ? `0${timeUnit}` : timeUnit;
  };
  
  let seconds = +document.querySelector("#seconds").textContent;
  let minutes = +document.querySelector("#minutes").textContent;
  let hours = +document.querySelector("#hours").textContent;
  let days = +document.querySelector("#days").textContent;
  
  const changeTimeWithLimit = setInterval(() => {
    seconds -= 1;
    document.querySelector("#seconds").textContent = validationPrint(seconds);
    if (seconds === 0 && minutes > 0) {
      seconds = 60;
      minutes -= 1;
      document.querySelector("#minutes").textContent = validationPrint(minutes);
    }
    if (seconds === 0 && minutes === 0 && hours > 0) {
      seconds = 60;
      minutes = 60;
      hours -= 1;
      document.querySelector("#hours").textContent = validationPrint(hours);
    }
    if (seconds === 0 && minutes === 0 && hours === 0 && days > 0) {
      seconds = 60;
      minutes = 60;
      hours = 24;
      days -= 1;
      document.querySelector("#days").textContent = validationPrint(days);
    }
    if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
      clearInterval(changeTimeWithLimit);
    }
  }, 1000);
  
  changeTimeWithLimit;
  