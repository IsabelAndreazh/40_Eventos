var close = document.getElementsByClassName("lista");//borra tarea de la lista
for (var i = 0; i < close.length; i++) {
  lista[i].onclick = function() {
  }
}

var list = document.querySelector('ul');// checked
list.addEventListener('click', function(ev)  {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



function nombreDeLaLista() { // agregar nombre
  var input=document.createElement("textarea");
  var li = document.createElement("li");
  //var inputValue = document.getElementById("lista").value;
  var t = document.createTextNode(inputValue);
   li.appendChild(input);
   li.appendChild(t);
  if (inputValue === '') {
    alert("Escribe algo");
  } else {
    document.getElementById("UL").appendChild(li);
  }
  //document.getElementById("lista").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (var i = 0; i < close.length; i++) {
    lista[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  input.type="textarea";
}


