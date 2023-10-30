let talbeListCart = document.getElementById("cart").children[0].children[0]
let totalPrice = document.getElementById("totalPrice")

let listAllProduct = document.getElementsByClassName("hisProduct")
listAllProduct = [...listAllProduct]


let total = 0
listAllProduct.forEach((btn) => {

    btn.addEventListener("click", (e) => {
        e.preventDefault()

        let name = e.target.parentNode.parentNode.children[0].innerText
        let price = e.target.parentNode.parentNode.children[1].innerText


        let newTr = document.createElement("tr")
    
        let newTdName = document.createElement("td")
        newTdName.textContent = name
        newTr.appendChild(newTdName)
    
        let newTdPrice = document.createElement("td")
        newTdPrice.textContent = price
        newTr.appendChild(newTdPrice)
    
    
        talbeListCart.appendChild(newTr)

        total += parseInt(price)
        totalPrice.value = parseInt(total)
    })
})

