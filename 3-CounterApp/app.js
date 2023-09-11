const counterValue = document.querySelector("#counter");

const increment =()=>{
    let value = parseInt(counterValue.innerHTML);
    value = value + 1;
    counterValue.innerText = value;

};

const decrement =()=>{
    let value = parseInt(counterValue.innerHTML);
    value = value - 1;
    counterValue.innerText = value;
};