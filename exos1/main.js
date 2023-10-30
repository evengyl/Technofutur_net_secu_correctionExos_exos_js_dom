let ajouterbtn = document.getElementById("btn");
let mylist = document.getElementById("mylist");

ajouterbtn.addEventListener("click", (e) => {
 //e = event capturés
    e.preventDefault()
    console.log(e)

    let newelem = document.createElement("li")
    newelem.textContent = "Item"
    mylist.appendChild(newelem)
    
})