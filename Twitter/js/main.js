
var close = document.getElementsByClassName("close");//borra tarea de la lista
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  }
}
function newElement() { // agrega tarea a la lista
  var box=document.createElement("input");
  box.type="checkbox";
  box.onclick = function(ev){
    ev.target.parentNode.classList.toggle("checked");
  }
  var li = document.createElement("li");
  var inputValue = document.getElementById("lista").value;
  var t = document.createTextNode(inputValue);
   li.appendChild(box);
   li.appendChild(t);
  if (inputValue === '') {
    alert("Escribe algo");
  } else {
    document.getElementById("UL").appendChild(li);
  }
  document.getElementById("lista").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
}

