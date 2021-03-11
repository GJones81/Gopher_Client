import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loadState, saveState } from './LocalStorage'

import reducers from './reducers'
import async from './middlewares/async'

export default ({children}) => {

    const persistedState = loadState()

    const store = createStore(
                    reducers,
                    persistedState,
                    applyMiddleware(
                        async
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