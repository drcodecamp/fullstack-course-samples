const loggerMiddleware = (store) => (next) => (action) => {
    next(action)
}

export default loggerMiddleware

// Middleware written as ES5 functions

// Outer function:
function exampleMiddleware(storeAPI) {
    return function wrapDispatch(next) {
        return function handleAction(action) {
            // Do anything here: pass the action onwards with next(action),
            // or restart the pipeline with storeAPI.dispatch(action)
            // Can also use storeAPI.getState() here

            return next(action)
        }
    }
}

const anotherExampleMiddleware = (storeAPI) => (next) => (action) => {
    // Do something in here, when each action is dispatched
    
    return next(action)
}
