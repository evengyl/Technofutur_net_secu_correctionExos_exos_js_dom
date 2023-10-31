let tableListCart = document.getElementById("cart").children[0].children[0]
let totalPrice = document.getElementById("totalPrice")

let listAllProduct = document.getElementsByClassName("hisProduct")
listAllProduct = [...listAllProduct]


let total = 0
listAllProduct.forEach((tr) => {

    let btn = tr.lastElementChild.lastElementChild

    btn.addEventListener("click", (e) => {
        e.preventDefault()

        let name = e.target.parentNode.parentNode.children[0].innerText
        let price = e.target.parentNode.parentNode.children[1].innerText


        let currentCartList = [...tableListCart.children]
        let indexFinded = currentCartList.findIndex((tr) => {

            let tmpName = tr.children[0].innerText

            if(tmpName === name)
                return true
            else
                return false
        })

        console.log(indexFinded)

        if(indexFinded != -1){
            //ici on est sur que le product est dans au moins une fois dans le cart

            //###############
            //STOP, la manipulation HTML DOM vers JS devient trop lourde pour rien...
            //################
        }

        
        let newTr = document.createElement("tr")
    
        let newTdName = document.createElement("td")
        newTdName.textContent = name
        newTr.appendChild(newTdName)
    
        let newTdPrice = document.createElement("td")
        newTdPrice.textContent = price
        newTr.appendChild(newTdPrice)


        let newTdDelete = document.createElement("td")
        let btnRemover = document.createElement("button")
        btnRemover.innerText = "Remove"
        btnRemover.addEventListener("click", (e) => {
            e.preventDefault()
            //mes actions de suppression

        })
        newTdDelete.appendChild(btnRemover)
        newTr.appendChild(newTdDelete)
    
    
        tableListCart.appendChild(newTr)

        total += parseInt(price)
        totalPrice.value = parseInt(total)
    })
})

