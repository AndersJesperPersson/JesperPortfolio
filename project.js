let index = 0;
showSide(index);

function navigateSides(n) {
  showSide(index+=n);
}

function showSide(n) {
  let i;
  let sides = document.querySelectorAll(".my__slides")

  if (n < 0) {index = 2}
  if (n > 3) {index = 0}
  for (i = 0; i < sides.length; i++) {
      sides[i].style.display = "none";
  }

  sides[index].style.display = "flex";
  
}