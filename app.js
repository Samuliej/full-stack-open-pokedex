const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('3') // change this string to ensure a new version deployed
})

const breaking = true

app.get('/health', (req, res) => {
  if (breaking) throw('rikki')
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
