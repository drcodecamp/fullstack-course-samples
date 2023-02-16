import React from 'react'
import ConditionalRendering from './components/ConditionalRendering'
import InlineStyles from './components/InlineStyles'
import ModuleStyles from './components/ModuleStyles'
import BasicStyles from './components/BasicStyles'

const App = () => {
  return (
    <>
      <h1>Conditional Rendering</h1>
      <ConditionalRendering />
      <h1>Styles</h1>
      <InlineStyles />
      <BasicStyles />
      <ModuleStyles />
    </>
  )
}
export default App
