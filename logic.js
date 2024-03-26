window.alert("Um alerta qualquer");

function exercise2()
{
    window.alert("Botão pressionado");
}

function exercise3(kind)
{
    switch (kind) {
        case 1:
            var element = document.getElementById("square__31");
            element.style.border = "2px dashed #000";

            break;
        case 2:
            var amount = document.getElementsByTagName("p").length;
            var element = document.getElementById("p__32");
            element.innerText = "Total de tags <p>: " + amount;

            break;
        case 3:
            var amount = document.getElementsByClassName("inline-block").length;
            var element = document.getElementById("p__33");
            element.innerText = "Total de elementos com 'inline-block': " + amount;

            break;
        case 4:
            var element = document.querySelector("div.square, div.test");
            element.style.border = "2px dashed #000";

            break;
        case 5:
            var elements = document.querySelectorAll("div.square2, div.test2");

            elements.forEach((element) => {
                element.style.border = "2px dashed #000";
            })

            break;
    }
}

function exercise4(kind)
{
    switch (kind) {
        case 1:
            var element = document.getElementById("p__41");
            element.style.backgroundColor = "#C70039"

            break;
        case 2:
            var element = document.getElementById("p__42");
            element.style.backgroundColor = "#33ffbd"

            break;
        case 3:
            var element = document.getElementById("p__43");
            element.style.backgroundColor = "#DAF7A6"

            break;
    }
}

// ________________ ****

// SOLUÇÕES PARA O EXERCÍCIO 5
 
// ---- Nomeada
function nomeada() {
    console.log("nomeada");
}

// ---- Com Parâmetro
function nomeadaparam(param) {
    console.log(param);
}

// ---- Por Construtor
var func_contructor = new Function("number", "return number+1");

// ---- Literal
var func_literal = function() {
    console.log("literal");
}

// ---- Arrow Function
var func_arrow = (num1, num2) => num1 + num2;

// ________________ ****

function exercise6()
{
    var element = document.getElementById("button__6");
    element.value = isNaN(element.value) ? 1 : parseInt(element.value)+1;
}

function exercise7(input)
{
    input.value = input.value.toUpperCase();
}

function exercise8(input1, input2, output)
{
    output.value = parseInt(input1.value) + parseInt(input2.value);
}