const inputBtn = document.querySelector("#input-btn")
let myLeads =[]
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
let listItems = ''

inputBtn.addEventListener("click", handler)

// $(inputBtn).ready(function(){
//     $("#input-btn").click(handler)
// })

function handler(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
    console.log(myLeads)
}

function renderLeads(){
    for(let i =0;i<myLeads.length;i++){
        listItems+=`
        <li>
            <a href='${myLeads[i]}' target='_blank'>
                 ${myLeads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
    listItems=""
}




