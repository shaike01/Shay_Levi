
const button = document.getElementById("button");
    let currentRotation = 0;

    function flipFunc() {
      currentRotation += 90;
      if (currentRotation > 270) {
        currentRotation = 0;
      }
      button.style.transform = `rotate(${currentRotation}deg)`;
      button.classList.toggle("style");
    }