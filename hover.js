Array.prototype.forEach.call(document.getElementsByClassName("menu_link"), function (elDisplay) {

  elDisplay.dataset.string = elDisplay.innerHTML;
  var arrCharacters = elDisplay.innerHTML.split(""),
    strCharacterSplit = ""

  for (i = 0; i < arrCharacters.length; i++) {
    var strCharacter = arrCharacters[i]
    strCharacterSplit = strCharacterSplit + "<span data-l='" + strCharacter + "'>" + strCharacter + "</span>"
  }

  elDisplay.innerHTML = strCharacterSplit;

  elDisplay.onmouseover = function () {
    interval = setInterval(function () {
      for (i = 0; i < elDisplay.childNodes.length; i++) {
        flipLetters(elDisplay.childNodes[i])
      }
    }, 50)

    setTimeout(function() {
      clearInterval(interval)
      for (i = 0; i < elDisplay.childNodes.length; i++) {
        var thisLetter = elDisplay.childNodes[i]
        thisLetter.innerHTML = thisLetter.getAttribute('data-l')
      }
    }, 500);

  }

  elDisplay.onmouseout = function () {
    clearInterval(interval)
    for (i = 0; i < elDisplay.childNodes.length; i++) {
      var thisLetter = elDisplay.childNodes[i]
      thisLetter.innerHTML = thisLetter.getAttribute('data-l')
    }
  }

});

function flipLetters(strEl) {
  var arrLetters = strEl.parentElement.dataset.string.split("");
  var intArrLettersLength = arrLetters.length;
  // intArrLettersLength = arrLetters.length;
  if (strEl.innerHTML !== " ") {
    strEl.innerHTML = arrLetters[Math.floor(Math.random() * intArrLettersLength)]
  }
}

