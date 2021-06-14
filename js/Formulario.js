//Funcion para sumar dos numeros
function Suma (numero1,numero2) {
	let n1,n2,sum;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	sum=n1+n2;
	//alert("La suma es: "+sum)
	document.getElementById("").innerHTML=sum;
}
//Funcion para restar dos numeros
function Resta (numero1, numero2){
	let n1,n2,res;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	res=n1-n2;
	alert("La resta es: "+res)
}

//Funcion para multiplicar dos numeros
function Multi (numero1, numero2){
	let n1,n2,mult;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	mult=n1*n2;
	alert("La multiplicación es: "+mult)
}

//Funcion para dividir dos numeros
function Div (numero1, numero2){
	let n1,n2,divi;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	divi=n1/n2;
	//alert("La divición es: "+divi)
}

//Funcion para elevar al cuadrado un numero
function cuadrad (numero1){
	let n1,cuadrado;
	n1=parseFloat(numero1);
	cua=n1*n1;
	alert("El numero al cuadrado es: "+cua)
}

//Funcion para sacar raiz de un numero
function raiz (numero1){
	let n1,cuadrado;
	n1=parseFloat(numero1);
	ra=n1/n1;
	alert("La raiz de es: "+ra)
}