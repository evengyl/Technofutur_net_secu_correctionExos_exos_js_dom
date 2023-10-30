let bouton = document.getElementById("monBouton")
let liste = document.getElementById("maListe")
let inputElement = document.getElementById("nouvelleElement")

bouton.addEventListener("click", (e) => {
    e.preventDefault()
    
    let texteElement = inputElement.value

    if (texteElement !== "")
    {
        let nouvelElement = document.createElement("li")
        nouvelElement.textContent = texteElement
        liste.appendChild(nouvelElement)
        inputElement.value =""
    }
    else
    {
        alert("le champ est vide")
    }
})