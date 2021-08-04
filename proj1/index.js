let count = 0;
let saveEl = document.getElementById("save-el");
let counter = document.getElementById("count")

function increment(){
    count++;
    counter.innerText = count;
}

function save(){
    let savedValue = count+' - ';
    saveEl.textContent += savedValue;
    count = 0
    counter.innerText = count;
}
