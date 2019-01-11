/*const title = document.querySelector("#title");
title.innerHTML="Hi! Form JS";
title.style.color='red';
document.title='I owe you now';*/

/*const age = prompt("How old are you");

if(age >= 18 && age <= 21){
    console.log("you can drink but you should not");
}else if(age > 21){
    console.log("go ahead");
}else{
    console.log("you can't");
}*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    }else{
        title.className = "";
    }
}

function init(){
    title.addEventListener("click", handleClick);//괄호를 붙이면 함수가 바로 호출됨
}
init();

