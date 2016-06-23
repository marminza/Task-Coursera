window.addEventListener("load", init);
 
var todos = [];
 
function init() // init create <a> tag in a button
{
	var add = document.querySelector("#add");
	add.addEventListener("click", addTodo);
}
 
function addTodo(event)
{
	//prevenimos el evento del enlace
	event.preventDefault();
	//comprobamos que tenga texto
	if(document.querySelector("#todo").value === "") return;
 
	//creamos el objeto con la información del li
	var li = 
	{
		index: todos.length + 1,
		value: document.querySelector("#todo").value
	};
	todos.push(li);
	displayTodos(li);
}
 
function displayTodos(li)
{
	//creamos el elemento li
    var node = document.createElement("li");  
    node.classList.add("col-md-12", "list-group-item");
    node.id = "todo"+li.index;
    
    //add <a> link to li
    var link = document.createElement("a");
    link.setAttribute("href", "task.html");

    //creamos el contenido del elementi li
	var textnode = document.createTextNode(li.value);    
	link.appendChild(textnode);   
	document.querySelector("#todoList").appendChild(node); 
	document.querySelector("#todo").value = "";
    node.appendChild(link);
 
	//añadimos el botón
	var deleteButton = createButton(li);
    node.appendChild(deleteButton);

}
 
function createButton(li)
{
	//creamos un input
	var todo = document.createElement("input");
	//de tipo button
    todo.type = "button";
    //añadimos un margen
 //   todo.style.marginTop = "10px";
    //flotamos a la derecha
    todo.style.float = "right";
    //el texto del input
    todo.value = "Delete";
    //añadimos un margen
 //   todo.style.marginLeft = "15px";
    //añadimos varias clases
    todo.classList.add("removeTodo", "btn", "btn-danger");
    //añadimos el evento click para que sea eliminado
    todo.onclick = function() 
    { 
        var toDelete = document.querySelector('#todo'+li.index);
		toDelete.parentNode.removeChild(toDelete);
    };
    //devolvemos el nuevo elemento
    return todo;
}