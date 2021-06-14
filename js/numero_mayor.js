function mayor(numero1,numero2,numero3){
	let n1, n2, n3, res;
	n1 = parseFloat(numero1);
	n2 = parseFloat(numero2);
	n3 = parseFloat(numero3);
	
	/* 
	if (n1>n2){
		if(n2>n3){
			alert("El numero mas grande es "+numero1+" El segundo es "+numero2+" El tercero es "+numero3);
		}if (n3>n2){
			alert("El numero mas grande es "+numero1+" El segundo es "+numero3+" El tercero es "+numero2);
		}
	}if (n2>n1){
		if(n1>n3){
			alert("El numero mas grande es "+numero2+" El segundo es "+numero1+" El tercero es "+numero3);
		}if(n3>n1){
			alert("El numero mas grande es "+numero2+" El segundo es "+numero3+" El tercero es "+numero1);
		}
	}if(n3>n1){
		if(n1>n2){
			alert("El numero mas grande es "+numero3+" El segundo es "+numero1+" El tercero es "+numero2);
		}if(n2>n1){
			alert("El numero mas grande es "+numero3+" El segundo es "+numero2+" El tercero es "+numero1);
		}
	}*/

	if (n1>n2 && n2>n3) {
		alert("El numero mas grande es "+numero1+" El segundo es "+numero2+" El tercero es "+numero3);
	}
	else if (n1>n2 && n3>n2) {
		alert("El numero mas grande es "+numero1+" El segundo es "+numero3+" El tercero es "+numero2);
	}
	else if (n2>n1 && n1>n3) {
		alert("El numero mas grande es "+numero2+" El segundo es "+numero1+" El tercero es "+numero3);
	}
	else if (n2>n1 && n3>n1) {
		alert("El numero mas grande es "+numero2+" El segundo es "+numero3+" El tercero es "+numero1);
	}
	else if (n3>n1 && n1>n2) {
		alert("El numero mas grande es "+numero3+" El segundo es "+numero1+" El tercero es "+numero2);
	}
	else if (n3>n1 && n2>n1) {
		alert("El numero mas grande es "+numero3+" El segundo es "+numero2+" El tercero es "+numero1);
	}





}



