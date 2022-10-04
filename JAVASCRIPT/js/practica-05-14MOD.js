window.onload=principio;

function principio(){
	document.formulario.comprobar.onclick=comprobar;
}

function comprobar(){

let codigo = document.formulario.codigo.value.trim().toLowerCase();

let codigoOk=true;


if (codigo.length < 20 || codigo.length > 26)
		codigoOk=false;
       
else{
    let adicionales="%/?!";
    posicion=0;
    let caracter="@#$&";
    let i= "AN";
    let ii= "ES";
    let iii= "DL";
    let iv= "US";

    while (codigoOk && (posicion < 3  || posicion >  6)){
        if((codigo.charAt(posicion)<"1" || codigo.charAt(posicion) > "9"))
        codigoOk=false;
        posicion+=1;
    }
    
    while ((codigoOk && (posicion > 3 || posicion < 5)) ||
    (codigoOk && (posicion > 4 || posicion < 6)) ||
    (codigoOk && (posicion > 5 || posicion < 7)) || 
    (codigoOk && (posicion > 6 || posicion < 8)))

    {
        if((!i.includes(codigo.charAt(posicion))) 
        || (!ii.includes(codigo.charAt(posicion))) 
        || (!iii.includes(codigo.charAt(posicion))) 
        || (!iv.includes(codigo.charAt(posicion))) )
        codigoOk=false;
        posicion+=1;
              
    }

    posicion=1;
    while ((codigoOk && (posicion > 5 || posicion < 6)) || (codigoOk && (posicion > 6 || posicion < 7)) ||
    (codigoOk && (posicion > 7 || posicion < 8)) || (codigoOk && (posicion > 8 || posicion < 9))){
        if(!caracteres.includes(codigo.charAt(posicion)))
        codigoOk=false;
        posicion+=1;
    }
    posicion=1;
    while ((codigoOk && (posicion > 6 || posicion < 10)) || (codigoOk && (posicion > 6 || posicion < 11)) ||
    (codigoOk && (posicion > 6 || posicion < 12)) || (codigoOk && (posicion > 6 || posicion < 13))
    || (codigoOk && (posicion > 7 || posicion < 11)) || (codigoOk && (posicion > 7 || posicion < 12)) ||
    (codigoOk && (posicion > 7 || posicion < 13)) || (codigoOk && (posicion > 7|| posicion < 14)) ||
    (codigoOk && (posicion > 8 || posicion < 12)) || (codigoOk && (posicion > 8 || posicion < 13)) ||
    (codigoOk && (posicion > 8 || posicion < 14)) || (codigoOk && (posicion > 8|| posicion < 15)) ||
    (codigoOk && (posicion > 9 || posicion < 13)) || (codigoOk && (posicion > 9 || posicion < 14)) ||
    (codigoOk && (posicion > 9 || posicion < 15)) || (codigoOk && (posicion > 9|| posicion < 16)))
    {
        if((codigo.charAt(posicion)<"a" || codigo.charAt(posicion) > "z"))
                codigoOk=false;
                posicion+=1;
    }
    posicion=1;
    while ((codigoOk && (posicion > 10 || posicion < 12)) || 
    (codigoOk && (posicion > 11 || posicion < 13)) ||
    (codigoOk && (posicion > 12 || posicion < 14)) ||
    (codigoOk && (posicion > 13 || posicion < 15)) ||
    (codigoOk && (posicion > 14 || posicion < 16)) ||
    (codigoOk && (posicion > 15 || posicion < 17)) ||
    (codigoOk && (posicion > 16 || posicion < 18))){
        if((codigo.charAt(posicion)<"1" || codigo.charAt(posicion) > "9"))
        codigoOk=false;
        posicion+=1;
    }
    posicion=1;
    while((codigoOk && (posicion > 12 || posicion < 15)) ||
    (codigoOk && (posicion > 13 || posicion < 16)) ||
    (codigoOk && (posicion > 14 || posicion < 17)) ||
    (codigoOk && (posicion > 15 || posicion < 18)) ||
    (codigoOk && (posicion > 16 || posicion < 19)) ||
    (codigoOk && (posicion > 17 || posicion < 20)) ||
    (codigoOk && (posicion > 18 || posicion < 21)))
    {
        if((codigo.charAt(posicion)<"a" || codigo.charAt(posicion) > "z"))
                codigoOk=false;
                posicion+=1;
    }
    posicion=1;
    while((codigoOk && (posicion > 15 || posicion < 20)) ||
    (codigoOk && (posicion > 16 || posicion < 21)) ||
    (codigoOk && (posicion > 17 || posicion < 22)) ||
    (codigoOk && (posicion > 18 || posicion < 23)) ||
    (codigoOk && (posicion > 19 || posicion < 24)) ||
    (codigoOk && (posicion > 20 || posicion < 25)) ||
    (codigoOk && (posicion > 21 || posicion < 26)))
    {
        if ((codigo.charAt(posicion)<"a" || codigo.charAt(posicion) > "z") &&
				!adicionales.includes(codigo.charAt(posicion)))
				codigoOK=false;
			posicion+=1;
    } 
    
}

if (codigoOk)
		document.formulario.mensaje.value="Codigo correcto"
	else 
		document.formulario.mensaje.value="Codigo incorrecto";

}


