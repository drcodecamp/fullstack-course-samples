import React from 'react'
import { createGlobalStyle } from 'styled-components'
import SimpleRouter from './Examples/SimpleRouter'
import SharedLayout from './Examples/SharedLayout'
import NestedRoutes from './Examples/Nasted'
import OutletExample from './Examples/OutletExample'
import NotFoundExample from './Examples/NotFoundExmaple'
import ActiveLinkExample from './Examples/ActiveLinkExample'
import UseNavigateExample from './Examples/useNavigate'
import ProtectedRouteExample from './Examples/ProtectedRoute'

const App = () => {
    return (
        <>
            <GlobalStyle />
            {/*<SimpleRouter />*/}
            {/*<SharedLayout />*/}
            {/*<NestedRoutes />*/}
            {/*<OutletExample />*/}
            {/*<NotFoundExample />*/}
            {/*<ActiveLinkExample />*/}
            {/*<UseNavigateExample />*/}
            {/*<ProtectedRouteExample />*/}
        </>
    )
}

const GlobalStyle = createGlobalStyle`
    body {
        font-family: Roboto, sans-serif;
        margin: 0;
        box-sizing: border-box;
    }
`

export default App
