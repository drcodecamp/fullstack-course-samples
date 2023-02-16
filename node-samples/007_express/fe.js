fetch('http://localhost:3000/dogs').then((response) => {
  return response.json().then((data) => {
    const container = document.getElementById('root')
    container.innerHTML = `We got ${data.length} dogs.`
  })
})
