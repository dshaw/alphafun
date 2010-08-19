(function(document){
  var letter   = document.getElementById("letter"),
      alphabet = document.getElementById("alphabet"),
      abc      = [];

  for (var a=65, c=a; c<(a+26); c++) {
    abc.push(String.fromCharCode(c));
  }

  abc.forEach(function(c){
    alphabet.innerHTML += "<span id="+c+">"+c+"</span>";
  });

  var index    = -1,
      current  = abc[index],
      max      = abc.length - 1;

  if (document.addEventListener) {
    document.addEventListener("keypress", keyHandler, false);
} else if (document.attachEvent){
    document.attachEvent("onkeypress", keyHandler);
  }

  function keyHandler(event) {
    // convert charChode to uppercase
    var c = (event.charCode > 96) ? event.charCode-32 : event.charCode;
    if (c == current.charCodeAt(0)) { nextLetter(); }
  }

  function nextLetter() {
    current = abc[index];
    var el = document.getElementById(current);
    if (el) { el.style.color = "#D42C1C"; }
    if (index < max) {
      index++;
      current = abc[index];
      letter.innerHTML = current;
    } else {
      win();
    }
  }

  function win() {
    letter.innerHTML = "You Win!";
    letter.style.color = "#469D40";
  }

  nextLetter();
})(document);