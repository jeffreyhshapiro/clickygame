var imageElements = document.getElementsByTagName('img')
var alreadyClickedPictures = [];
var counter = 0;


function timerInitiate() {
  console.log("timer start");
    //Cannot add addEventListener to an image object, so I am looping through all the images and giving them an onclick attribute
    for (var i = 0; i < imageElements.length; i++) {
      imageElements[i].onclick=clickCounter;
      };
  setTimeout(finalMessage, 20000)
};

function finalMessage() {
  alert("You clicked " + counter + " characters!");
  /*if (counter === 0) {
    alert("How did you not click anything?");
  } else if (counter <== 5 && counter > 0) {
    alert("Not too bad");
  } else if (counter <== 10 && counter > 5) {
    alert("Not too shabby");
  } else if (counter <== 15 && counter > 10) {
    alert("Slowly your power level is increasing");
  } else if (counter <== 19 && counter > 15) {
    alert("Almost there!");
  } else if (counter === 20)*/
};

function clickCounter(e) {
  console.log("clickCounter start");

  var imgId = e.target.id

  if (alreadyClickedPictures.length == 0) {
    alreadyClickedPictures.push(imgId);
    counter++
    console.log(counter);
    console.log(alreadyClickedPictures);
  } else if (alreadyClickedPictures.length > 0) {
    for (var i = 0; i < alreadyClickedPictures.length; i++) {
      if (alreadyClickedPictures[i] == imgId) {
        console.log("Already clicked");
        return false;
      };
    };
    alreadyClickedPictures.push(imgId);
    counter++
    console.log(counter)
  };
};

document.getElementById('start-button').addEventListener("click", timerInitiate);