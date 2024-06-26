const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('5')
})


app.get('/health', (req, res) => {
  // const breaking = true
  // This here to test if we can break the app so it doesn't get updated
  // if (breaking) throw('rikki')
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
