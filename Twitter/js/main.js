
var close = document.getElementsByClassName("close");//borra tarea de la lista
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');// checked
list.addEventListener('click', function(ev)  {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() { // agrega tarea a la lista
  var box=document.createElement("input");
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

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  box.type="checkbox";
}

