const greetingbtn = document.querySelector(`[data-type="greeting"]`)
const cleanroombtn = document.querySelector(`[data-type="clean-room"]`)
const fetchpaperbtn = document.querySelector(`[data-type="fetch-newspaper"]`)
const readlistbtn = document.querySelector(`[data-type="read-shopping-list"]`)
const addToListbtn = document.querySelector(`[data-type="add-to-list"]`)
const randombtn = document.querySelector(`[data-type="random"]`)
const weatherbtn = document.querySelector(`[data-type="weather"]`)
const clearbtn = document.querySelector(`[data-type="clear"]`)
const shopItem = document.querySelector(".shop-item")
const outputContainer = document.querySelector(".output-container")
let fetchedPaper = false
let lastCleaned = undefined
let shoppingList =[]




greetingbtn.addEventListener("click",()=>{
output=`<li>Hello, I am doing great.</li>`
outputContainer.innerHTML+=output
})

cleanroombtn.addEventListener("click",()=>{
    let timeNow = new Date().toLocaleTimeString()
    let timeSinceCleaned=0
    let minutesNow=parseInt(timeNow.slice(3,5))

    let minutesLastCleaned = lastCleaned !=undefined ? parseInt(lastCleaned.slice(3,5)): 0
    if( lastCleaned != undefined && parseInt(timeNow.slice(0,2)) !== parseInt(lastCleaned.slice(0,2)) ){
        minutesNow= minutesNow+60
    }
    if (lastCleaned!=undefined){
        timeSinceCleaned= (minutesNow-minutesLastCleaned)
    }
    if (lastCleaned==undefined || timeSinceCleaned>9){
        lastCleaned=timeNow
    output=`<li> Room is cleaned. It looks tidy now. Job completed at ${lastCleaned}</li>`
    }
else{
    output=`<li>The room was just cleaned ${timeSinceCleaned} minute(s) ago. I hope it's not dirty </li>`
}
outputContainer.innerHTML+=output

})

fetchpaperbtn.addEventListener("click",()=>{
    if (fetchedPaper){
        output=`<li>I think you don't get another newspaper the same day
        </li>`
    }
    else{
        output=`<li>Here is your newspaper.</li>`
        fetchedPaper=true
    }
    
outputContainer.innerHTML+=output
})

readlistbtn.addEventListener("click",()=>{

    if (shoppingList.length==0){
        
        output=`<li>You have no items in your shopping list</li>`
    }
    else{
        output=`<li>Here is your shopping list: ${shoppingList}.</li>`
    }
    
    outputContainer.innerHTML+=output
    
})

addToListbtn.addEventListener("click",()=>{

    if (shopItem.value==""){
        output=`<li>Can not add nothing to the shopping List</li>`
    }
    else if (shoppingList.includes(shopItem.value)){
    output=`<li>You already have ${shopItem.value} in your shopping list</li>`
    }
    else{
    shoppingList.push(shopItem.value)
    output=`<li>${shopItem.value} added to your shopping list.</li>`
    }
    shopItem.value=""
    outputContainer.innerHTML+=output
    
})

randombtn.addEventListener("click",()=>{
    output=`<li>Hmm.. I don't know that</li>`
    outputContainer.innerHTML+=output
    
})

weatherbtn.addEventListener("click",()=>{
    output=`<li>It's pleasant outside. You should take a walk.</li>`
    outputContainer.innerHTML+=output
    
})

clearbtn.addEventListener("click",()=>{
    outputContainer.innerHTML=""
    
})