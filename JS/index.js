// var name = prompt("Enter name");
// var welcomemsg = "Hello " + name;
// alert(welcomemsg); 

var btnTranslate = document.querySelector("#btn-translate");

var txtinput = document.getElementById("txt-input");

btnTranslate.addEventListener("click",clickHandler);

function clickHandler(){
    console.log("clicked");
    console.log("Input is "+ txtinput.value);
}

var x = 0;
function counter(){
    console.log(x++);
}