function lista() { 
    var input=document.createElement("input"); // agrega lista
    var textoInput=document.createTextNode("Guardar");
    input.id="guardarInput";
    input.appendChild(textoInput);
    var inputValue=document.getElementById("formulario");
    formulario.appendChild(input);

    var botonNombreLista=document.createElement("button");
    var texto=document.createTextNode("Guardar");
    botonNombreLista.className="submit";
    botonNombreLista.appendChild(texto);
    formulario.appendChild(botonNombreLista);

    botonNombreLista.onclick = function(){ 
        var div= document.createElement("div");//guarda nombre de la lista
        var divValue=input.value;
        var titulo=document.createTextNode(divValue);
        div.appendChild(titulo);
        inputValue.appendChild(div);

        var botonAñadirLista=document.createElement("button");//boton para crear tarjeta
        var texto=document.createTextNode("Añadir lista");
        botonAñadirLista.className="submit";
        botonAñadirLista.appendChild(texto);
        formulario.appendChild(botonAñadirLista);

        botonAñadirLista.onclick = function(){ // agrega tarjeta
            var textArea=document.createElement("textarea"); 
            textArea.type="textarea";
            var inputValue=document.getElementById("formulario");
            formulario.appendChild(textArea);

            var botonAgregarLista=document.createElement("button");
            var texto=document.createTextNode("Agregar tarjeta");
            botonAgregarLista.className="submit";
            botonAgregarLista.appendChild(texto);
            formulario.appendChild(botonAgregarLista);

           
            botonAgregarLista.onclick = function(){ 
                var li= document.createElement("li");//guarda nombre de la lista
                var liValue=input.value;
                var nombre=document.createTextNode(liValue);
                li.appendChild(nombre);
               
                document.getElementById("UL").appendChild(li);
            }
        }
    }
}

