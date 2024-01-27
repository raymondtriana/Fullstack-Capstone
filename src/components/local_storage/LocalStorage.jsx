export const storeObject = async function (name, obj) {
    let stringifiedObj = await JSON.stringify(obj)
    await localStorage.setItem(name, stringifiedObj)
}

export const getObject = async function (name) {
    let retrievedObj = await JSON.parse(await localStorage.getItem(name))
    return retrievedObj;
}

export const hasItem = async function (name) { 
    if (await localStorage.getItem(name) == null)
        return false
    return true
}

export const removeFromCart = async function (id,setter){
    let cart = await getObject('cart')
    for(let i in cart.products){
        if(cart.products[i].productId == id)
            cart.products.splice(i,1)
    }
    await storeObject('cart',cart)
    setter(cart)
}

export const updateQuantityInCart = async function (id,quantity,setter){
    let cart = await getObject('cart')
    for (let i in cart.products){
        if(cart.products[i].productId == id)
            cart.products[i].quantity = quantity
    }
    await storeObject('cart',cart)
    setter(cart)
}