const inputBtn = document.querySelector("#input-btn")
const deleteBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector("#save-tab-btn")
let myLeads =[]
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
let listItems = ''
const tabs = [
    {url:"www.pingas.com"}
]




var storedLeads = JSON.parse(localStorage.getItem("myLeads"));

if(storedLeads){
    myLeads = storedLeads
    render(myLeads)
}


//buttons listeners
inputBtn.addEventListener("click", handler)
deleteBtn.addEventListener("click", handleDelete)
tabBtn.addEventListener("click", handleTab)


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
function handleTab(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    
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




