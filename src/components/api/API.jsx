const BASE_URL = "https://fakestoreapi.com/"

export const getAllProducts = async function (setter){
    try {
        const response = await fetch(BASE_URL + "products");
        const result = await response.json();
        setter(result);
    } catch (error) {
        console.log(error);
        return {};
    }
}