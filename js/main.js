var iden = data.forEach(function(element){
	document.write("<li>"+"<b> Lista " + element.id + " : </b>"+ element.title +"</li>" + "<br>");
});

iden();

function ListaTareas(){
	var input = document.getElementById("lista");

	var contLista = document.getElementsByClassName("list");

	contLista[0].innerHTML += input.value +"<br>";

	input.value = " ";
	document.write("<li>"+"<b> Lista " + element.id + " : </b>"+ input.value +"</li>" + "<br>")
}
 







