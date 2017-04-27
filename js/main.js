var iden = data.forEach(function(element){
	document.write("<li>"+"<b> Lista " + element.id + " : </b>"+ element.title +"</li>" + "<br>");
});

iden();

function ListaTareas(){
	var input = document.getElementById("lista");

	var contLista = document.getElementsByClassName("list");

	contLista[0].innerHTML += "<li>" + "<b> Lista : </b>"+ input.value + "</li>" + "<br>";

	input.value = " ";
}
 







