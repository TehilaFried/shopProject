import produce from 'immer';


const initialState={
    basket:[],
    sum:0
    
}

export default produce((state,action)=>{
    switch(action.type){
        case 'ADD_PRODUCT':
            let addedItem = state.items.find(item=> item.id === action.id)
            //check if the action id exists in the addedItems
           let existed_item= state.addedItems.find(item=> action.id === item.id)
           if(existed_item)
           {
              addedItem.quantity += 1 
               return{
                  ...state,
                   total: state.total + addedItem.price 
                    }
          }
           else{
              addedItem.quantity = 1;
              //calculating the total
              let newSum = state.total + addedItem.price 
              
              return{
                  ...state,
                  basket: [...state.basket, addedItem],
                  sum : newSum
              }
              
          }
            break;
        case 'SET_SUM':
            state.sum=action.payload;
            break;
        case 'DELTE_PRODUCT':
            state.basket=[...state.basket.filter(p=>p.id!=action.payload.id)]
            break;
        case 'SET_COUNT':
            state.basket.map(item=>{
                if(item.id==action.payload.id)
                item.count=action.payload.count
            })
                break;
    }
},initialState)
