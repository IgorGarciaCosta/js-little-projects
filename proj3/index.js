const inputBtn = document.querySelector("#input-btn")
const deleteBtn = document.querySelector("#delete-btn")
let myLeads =[]
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
let listItems = ''




var storedLeads = JSON.parse(localStorage.getItem("myLeads"));

if(storedLeads){
    myLeads = storedLeads
    render(myLeads)
}


//buttons listeners
inputBtn.addEventListener("click", handler)
deleteBtn.addEventListener("click", handleDelete)


//buttons functions (handlers)
function handleDelete(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
}
function handler(){
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    inputEl.value = ""
    render(myLeads)
    console.log(myLeads)
}


//other functions
function render(leads){
    
    for(let i =0;i<leads.length;i++){
        listItems+=`
        <li>
            <a href='${leads[i]}' target='_blank'>
                 ${leads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
    listItems=""
}




