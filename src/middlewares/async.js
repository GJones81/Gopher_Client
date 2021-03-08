// middleware syntax in React
export default ({ dispatch }) => next => action => {

    // Check to see if the action has a Promise on the payload
    // If it does, then wait for the response
    // if it deson't, then send the action to the next middleware  

    if (!action.payload || !action.payload.then){
        return next(action)
    }

    action.payload.then(function(response){
        const newAction = { ...action, payload: response }
        dispatch(newAction)
    })
}