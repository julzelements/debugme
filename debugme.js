function printTime() {
    const currentTime = new Date().toLocaleTimeString();
    console.log(currentTime);
  }
  
  const intervalId = setInterval(printTime, 1000);
  
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Program stopped after 10 minutes.");
  }, 600000);
  