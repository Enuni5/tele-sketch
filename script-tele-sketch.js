let gridResolution = 16;

let theColor = "#000000";

gridGeneration();

let colorInput = document.getElementById("color");
colorInput.addEventListener("input", (e) => {
  theColor = e.target.value;
});

function gridGeneration() {
  const divContainer = document.querySelector(".container");
  let pixelSize = 800 / gridResolution;

  while (divContainer.firstChild) {
    divContainer.removeChild(divContainer.firstChild);
  }

  for (let i = 0; i < gridResolution; i++) {
    for (let j = 0; j < gridResolution; j++) {
      const span = document.createElement("span");
      span.classList.add("square");
      span.setAttribute(
        "style",
        `height: ${pixelSize}px; width: ${pixelSize}px;`
      );
      divContainer.appendChild(span);
    }
  }
  const spanToColor = Array.from(document.querySelectorAll("span"));
  spanToColor.forEach((span) => {
    let counter = 0;

    span.addEventListener("mouseover", () => {
      switch (counter) {
        case 0:
          theColor = theColor.substring(0, 7) + "1A";
          break;

        case 1:
          theColor = theColor.substring(0, 7) + "33";
          break;

        case 2:
          theColor = theColor.substring(0, 7) + "4D";
          break;

        case 3:
          theColor = theColor.substring(0, 7) + "66";
          break;

        case 4:
          theColor = theColor.substring(0, 7) + "80";
          break;

        case 5:
          theColor = theColor.substring(0, 7) + "99";
          break;

        case 6:
          theColor = theColor.substring(0, 7) + "B3";
          break;

        case 7:
          theColor = theColor.substring(0, 7) + "CC";
          break;

        case 8:
          theColor = theColor.substring(0, 7) + "E6";
          break;

        case 9:
          theColor = theColor.substring(0, 7) + "FF";
          break;

        default:
          theColor = theColor.substring(0, 7) + "FF";
          break;
      }
      span.style.background = `${theColor}`;
      counter += 1;
      console.log(theColor, counter);
    });
  });
}

function userResolution() {
  gridResolution = prompt("Please, select a grid size between 2 and 100");
  if (
    gridResolution == undefined ||
    gridResolution == null ||
    gridResolution == ""
  ) {
    return;
  } else if (gridResolution < 2 || gridResolution > 100) {
    userResolution();
  } else return gridResolution;
}

const changeButton = document.getElementById("grid");
changeButton.addEventListener("click", () => {
  userResolution();
  gridGeneration();
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", gridGeneration);

// const colorButton = document.getElementById("color");
// colorButton.addEventListener("click", --);
