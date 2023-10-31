let listArticlesCart = []
let listArticles = []

function init()
{
    listArticles = [
        { id: 1, name : "Chaise", price : 25 },
        { id: 2, name : "Table", price : 150 },
        { id: 3, name : "Meuble TV", price : 250 },
        { id: 4, name : "Pignouf", price : 2500 },
    ]

    //coder mon truc principale directement dans une fct
    showListArticle()
}
init()


function deleteArticle(idToDelete)
{
    let indexFinded = listArticlesCart.findIndex(item => item.id == idToDelete)
    if(indexFinded != -1){
        //on s'est assuré une deuxieme fois qu'il est dedans 
        console.log("ok")
        if(listArticlesCart[indexFinded].qty > 1)
            listArticlesCart[indexFinded].qty --
        else{
             // == 0
             listArticlesCart.splice(indexFinded,1)
        }
    }
    else
        alert("Error Global 500 Pignoufss")

    showListCartArticle()
    updateTotal()
}

function addToCart(newArticle)
{
    //a verifier plus tard
    let indexFinded = listArticlesCart.findIndex(item => item.id == newArticle.id)

    if(indexFinded != -1){
        //on vérifie si ça existe pas déjà 
        listArticlesCart[indexFinded].qty ++
    }
    else{
        newArticle.qty = 1
        listArticlesCart.push(newArticle)
    }


    showListCartArticle()
    updateTotal()
}

function showListCartArticle(){
    let ulListArticleCart = document.getElementById("cartArticle")
    ulListArticleCart.innerHTML = ""

    listArticlesCart.forEach(eachArticle => {

        let newLi = document.createElement("li")
        newLi.innerText = `Id : ${eachArticle.id} | ${eachArticle.name} | ${eachArticle.price} | ${eachArticle.qty}`

        let btnRemove = document.createElement("button")
        btnRemove.innerHTML = "Remove"
        btnRemove.addEventListener("click", () =>{
            deleteArticle(eachArticle.id)
        })
        newLi.appendChild(btnRemove)


        ulListArticleCart.appendChild(newLi)
    })
}




function showListArticle(){

    let tableToInsert = document.getElementById("listArticle")

    listArticles.forEach(eachArticle => {

        let newTr = document.createElement("tr")


        let newTdId = document.createElement("td")
        newTdId.textContent = eachArticle.id
        newTr.appendChild(newTdId)
    
        let newTdName = document.createElement("td")
        newTdName.textContent = eachArticle.name
        newTr.appendChild(newTdName)
    
        let newTdPrice = document.createElement("td")
        newTdPrice.textContent = eachArticle.price
        newTr.appendChild(newTdPrice)


        let newTdAddButton = document.createElement("td")
        let btnAdd = document.createElement("button")
        btnAdd.innerText = "Ajouter"
        btnAdd.addEventListener("click", (e) => {
            e.preventDefault()
            //ajoute à la liste d'article
            let articleToAdd = { id : eachArticle.id, name : eachArticle.name, price : eachArticle.price }
            addToCart(articleToAdd)
        })
        newTdAddButton.appendChild(btnAdd)
        newTr.appendChild(newTdAddButton)
    
    
        tableToInsert.appendChild(newTr)
    })
}


function updateTotal()
{
    let tmpTotal = 0

    listArticlesCart.forEach((article) => {
        tmpTotal += article.price * article.qty
    })

    let totalPrice = document.getElementById("totalPrice")
    totalPrice.value = tmpTotal
}