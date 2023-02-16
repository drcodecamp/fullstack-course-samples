import axios from 'axios'

export function apiMiddleware({ dispatch,state}) {
    return (next) => async (action) => {
        if (!action.meta?.api) {
            return next(action)
        }
        const { payload } = action
        const {
            path,
            baseUrl,
            onSuccess,
            data,
            method,
            params,
            headers,
        } = payload
        const requestUrl = `${baseUrl}${path}`
        next(action)
        try {
            const response = await axios({
                method,
                url: requestUrl,
                headers,
                params,
                data,
                timeout: 3000,
                validateStatus: () => true,
            })
            if (response.status === 200) {
                console.log('dispatch set data into store!')
                dispatch(onSuccess(response.data))
            }
        } catch (error) {
            console.log('error', error)
        }
    }
}

export default apiMiddleware
