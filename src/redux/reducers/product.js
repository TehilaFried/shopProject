import produce from 'immer';

const initialState = {
    products: [
        { id: 1, name: 'שמלה', price: 100, url: 'https://cb-fashion.shop/wp-content/uploads/2021/03/%D7%94%D7%91%D7%A1%D7%91%D7%94%D7%96%D7%A1%D7%91%D7%92%D7%93%D7%91%D7%96%D7%A1.jpg' },
        { id: 2, name: 'חצאית', price: 60, url: 'https://cb-fashion.shop/wp-content/uploads/2021/03/IMG_8480-1-scaled.jpg' },
        { id: 3, name: 'סרפן גינס', price: 120, url: 'https://cb-fashion.shop/wp-content/uploads/2021/05/%D7%A3%D7%A3.jpg' },
        { id: 4, name: 'חולצה', price: 70, url: 'https://cb-fashion.shop/wp-content/uploads/2020/06/DSC01333-667x1001.jpg' }
    ],
    basket: [],
    total:0
}


export default produce((state, action) => {
    // debugger
    switch (action.type) {
        case 'ADD_PRODUCT':
            state.basket.push(action.payload)
        case 'SET_TOTAL':
            state.total += action.payload;
            break;
        case 'DELTE_PRODUCT':
            console.log("delete")
            const index = state.basket.findIndex(p => p.id == action.payload);
            state.basket = state.basket.filter(element => element.id !== action.payload);
            state.basket.splice(index, 1);
            break;
        case 'SET_COUNT':
            console.log("count");
            state.basket.map(item => {
                if (item.url === action.payload.url) {
                    item.count = action.payload.count
                }
                return item;
            })
            break;
    }
}, initialState)