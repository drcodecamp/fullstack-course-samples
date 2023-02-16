import React from 'react'
import Container from '../Components/Container'

const NotFound = () => {
    return (
        <Container>
            <h1>Sorry, page not found!</h1>
            <div>
                Sorry, we couldn’t find the page you’re looking for. Perhaps
                you’ve mistyped the URL? Be sure to check your spelling.
            </div>
        </Container>
    )
}

export default NotFound
