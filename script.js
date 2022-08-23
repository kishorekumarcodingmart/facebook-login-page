const myBtn = document.getElementById('myBtn')
const model = document.getElementById('model')
const close = document.getElementsByClassName('material-symbols-outlined')[0]


myBtn.onclick = function() {
    model.style.display = "block"
}

close.onclick = function() {
    model.style.display = "none"
}

window.onclick = function(event) {
  if (event.target == model) {
    model.style.display = "none";
  }
}