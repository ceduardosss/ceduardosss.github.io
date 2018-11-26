var btn;
var capital;
var juros;
var saldo;
var meses;

function init (){
	btn = document.getElementById("btn_calc");
	btn.addEventListener("click", calcula);

}

function calcula (){
	capital = Number(document.getElementById("capitalIni").value);
	juros = Number(document.getElementById("juros").value);
	meses = Number(document.getElementById("meses").value);

	saldo=capital*Math.pow(1+juros, meses);
	var r = document.getElementById("result");
	r.innerHTML= "Seu saldo sera:" + saldo;

	alert (saldo);
}

init ();