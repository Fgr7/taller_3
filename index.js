//variables de operación
var A;
var B;
var C;
//variables de validación
var ini=0;
var fr=0;
//datos
function init(){
    //variables
    var resultado = document.getElementById("resultado"); 
    var clean = document.getElementById("clean"); 
    var suma = document.getElementById("suma"); 
    var resta = document.getElementById("resta"); 
    var multiplicacion = document.getElementById("multiplicacion"); 
    var division = document.getElementById("division"); 
    var cero = document.getElementById("cero"); 
    var uno = document.getElementById("uno"); 
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var site = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");   
    var punto = document.getElementById("punto");  
    //eventos
    cero.onclick = function(e){
        if(ini==0){
        resultado.textContent="0000"
        limpiar();
        ini=1
        resultado.textContent = resultado.textContent + "0";
        }
        else{
            resultado.textContent = resultado.textContent + "0";
        }
        
    }
    uno.onclick = function(e){
        if(ini==0){
            resultado.textContent="0000"
            limpiar();
            ini=1
            resultado.textContent = resultado.textContent + "1";
            }
            else{
                resultado.textContent = resultado.textContent + "1";
            }

    }
    dos.onclick = function(e){
        if(ini==0){
            resultado.textContent="0000"
            limpiar();
            ini=1
            resultado.textContent = resultado.textContent + "2";
            }
            else{
                resultado.textContent = resultado.textContent + "2";
            }
    }
    tres.onclick = function(e){
        if(ini==0){
            resultado.textContent="0000"
            limpiar();
            ini=1
            resultado.textContent = resultado.textContent + "3";
            }
            else{
                resultado.textContent = resultado.textContent + "3";
            }
    }
    cuatro.onclick = function(e){
        if(ini==0){
            resultado.textContent="0000"
            limpiar();
            ini=1
            resultado.textContent = resultado.textContent + "4";
            }
            else{
                resultado.textContent = resultado.textContent + "4";
            }
    }
    cinco.onclick = function(e){
        if(ini==0){
            resultado.textContent="0000"
            limpiar();
            ini=1
            resultado.textContent = resultado.textContent + "5";
            }
            else{
                resultado.textContent = resultado.textContent + "5";
            }
    }
    seis.onclick = function(e){
        if(ini==0){
            resultado.textContent="0000"
            limpiar();
            ini=1
            resultado.textContent = resultado.textContent + "6";
            }
            else{
                resultado.textContent = resultado.textContent + "6";
            }
    }
    site.onclick = function(e){
        if(ini==0){
            resultado.textContent="0000"
            limpiar();
            ini=1
            resultado.textContent = resultado.textContent + "7";
            }
            else{
                resultado.textContent = resultado.textContent + "7";
            }
    }
    ocho.onclick = function(e){
        if(ini==0){
            resultado.textContent="0000"
            limpiar();
            ini=1
            resultado.textContent = resultado.textContent + "8";
            }
            else{
                resultado.textContent = resultado.textContent + "8";
            }
    }
    nueve.onclick = function(e){
        if(ini==0){
            resultado.textContent="0000"
            limpiar();
            ini=1
            resultado.textContent = resultado.textContent + "9";
            }
            else{
                resultado.textContent = resultado.textContent + "9";
            }
    }
    
    punto.onclick = function (e){
        resultado.textContent = resultado.textContent + ".";
    }

    clean.onclick = function(e){
        resetear();
    }

    suma.onclick = function(e){
        if(fr==0){
            A = resultado.textContent;
            C = "+"
            limpiar();
            fr=1;
            }
            else{
                B = resultado.textContent;
                if(C=="+"){
                    C="+"
                    resolver();
                     limpiar();
                }
                else{
                    resolver();
                    limpiar();
                    C="+";
                }
            }
    }

    resta.onclick = function(e){
        if(fr==0){
            A = resultado.textContent;
            C = "-"
            limpiar();
            fr=1;
            }
            else{
                B = resultado.textContent;
                if(C=="-"){
                    C="-"
                    resolver();
                     limpiar();
                }
                else{
                    resolver();
                    limpiar();
                    C="-";
                }
            }
    }

    multiplicacion.onclick = function(e){
        if(fr==0){
            A = resultado.textContent;
            C = "x"
            limpiar();
            fr=1;
            }
            else{
                B = resultado.textContent;
                if(C=="x"){
                    C="x"
                    resolver();
                     limpiar();
                }
                else{
                    resolver();
                    limpiar();
                    C="x";
                }
            }
    }

    division.onclick = function(e){
        if(fr==0){
            A = resultado.textContent;
            C = "÷"
            limpiar();
            fr=1;
            }
            else{
                B = resultado.textContent;
                if(C=="÷"){
                    C="÷"
                    resolver();
                     limpiar();
                }
                else{
                    resolver();
                    limpiar();
                    C="÷";
                }
            }       
    }

    igual.onclick = function(e){
        B = resultado.textContent;
        resolver();
        A=0;
        B=0;
        C="";
        fr=0;
    }
}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    A=0;
    B=0;
    C="";
    fr=0;
}


function resolver(){
    var res = 0;
    switch(C){
        case "+":
            res = parseFloat(A) + parseFloat(B);
            break;

        case "-":
            res = parseFloat(A) - parseFloat(B);
            break;

         case "x":
            res = parseFloat(A) * parseFloat(B);
            break;

        case "÷":
            res = parseFloat(A)/parseFloat(B);
            break;            
    }
    limpiar();
    resultado.textContent = res;
    A=res;
}