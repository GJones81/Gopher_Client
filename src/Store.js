import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { loadState, saveState } from './StoreStorage'

import reducers from './reducers'

export default ({children}) => {

    const persistedState = loadState()

    const store = createStore(
                    reducers,
                    persistedState,
                    composeWithDevTools(
                        applyMiddleware(
                            thunk
                        )
                    )   
                )

    store.subscribe(() => {
        saveState(store.getState())
    })

    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}