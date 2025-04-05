const submitBtn = document.querySelector("#submitBtn");
let inputOne = document.querySelector("#inputOne");
let inputTwo = document.querySelector("#inputTwo");

const submitClick = () =>{
    submitBtn.addEventListener('click', () =>{
        let a = parseInt(inputOne.value);
        let b = parseInt(inputTwo.value);
        let result = a / b;
        alert(result);
    })
};
submitClick();

