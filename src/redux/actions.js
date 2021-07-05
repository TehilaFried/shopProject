export function addProduct(product){
    return {type:'ADD_PRODUCT', payload:product}
}
export function setTotal(sum){
    return {type:'SET_TOTAL', payload:sum}
}
export function deleteProduct(product){
    return {type:'DELTE_PRODUCT', payload:product}
}
export function setCount(count){
    return {type:'SET_COUNT', payload:count}
}
export function subtractCount(count){
    return {type:'SUBTRACT_COUNT', payload:count}
}