const express = require('express')
const app = express()
const port = 80 // use port 80

app.get('/', (req, res) => {
  res.send('Hello World!')
})
.get('/newpaltz', (req, res) => {
res.send('Hello New Paltz!')

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 