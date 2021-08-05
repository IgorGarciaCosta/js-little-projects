const inputBtn = document.querySelector("#input-btn")
const deleteBtn = document.querySelector("#delete-btn")
let myLeads =[]
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
let listItems = ''




var storedLeads = JSON.parse(localStorage.getItem("myLeads"));

if(storedLeads){
    myLeads = storedLeads
    renderLeads()
}


//buttons listeners
inputBtn.addEventListener("click", handler)
deleteBtn.addEventListener("click", handleDelete)


//buttons functions
function handleDelete(){
    localStorage.clear()
    myLeads = []
    renderLeads()
}
function handler(){
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    inputEl.value = ""
    renderLeads()
    console.log(myLeads)
}


//other functions
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




