/*const title = document.querySelector("#title");
title.innerHTML="Hi! Form JS";
title.style.color='red';
document.title='I owe you now';*/

/*const title = document.querySelector("#title");

function handleClick(){
    title.style.color="blue";
}

title.addEventListener("click", handleClick);//괄호를 붙이면 함수가 바로 호출됨*/

const age = prompt("How old are you");

if(age >= 18 && age <= 21){
    console.log("you can drink but you should not");
}else if(age > 21){
    console.log("go ahead");
}else{
    console.log("you can't");
}