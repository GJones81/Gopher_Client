initialState = {
    items: []
}

export function shoppingListReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_ITEM_TO_LIST':
            return {
                ...state,
                items : [
                   ...state.items,
                   {
                       value: action.payload
                   } 
                ]
            }
    }
}