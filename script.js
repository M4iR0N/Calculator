let inputOne = document.querySelector("#inputOne");
let inputTwo = document.querySelector("#inputTwo");
let add = document.querySelector("#addBtn");
let subtract = document.querySelector("#subtractBtn");
let multiply = document.querySelector("#multiplyBtn");
let divide = document.querySelector("#divideBtn");

const submitClick = () =>{
    let a = parseInt(inputOne.value);
    let b = parseInt(inputTwo.value);

    add.addEventListener('click', function(){
        alert("add");
    });

    subtract.addEventListener('click', function(){
        alert("subtract");
    });

    multiply.addEventListener('click', function(){
        alert("multiply");
    });

    divide.addEventListener('click', function(){
        alert('divide');
    })
};
submitClick();
