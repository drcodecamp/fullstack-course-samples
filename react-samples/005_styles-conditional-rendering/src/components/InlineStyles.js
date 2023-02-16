import React from 'react'

const InlineStyles = () => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#3b3b3b',
    color: '#cccccc',
    padding: 10,
    height: 250,
  }
  return (
    <div style={style}>
      <div>1.Basic inline styles</div>
      <button style={{ backgroundColor: 'gold' }}>inline button style</button>
    </div>
  )
}

export default InlineStyles
