const capture = require('../src/services/index.js')
const express = require('express')

const app = express()

app.get('/capture', async (req, res) => {
  try {
    await capture(req.query.url)

    res.setHeader('Content-Type', 'application/json')

    const context = {
      url: req.url
    }
    res.send()
  } catch (e) {
    console.log(e)
  }
})

process.setMaxListeners(0)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server listening on port: ${port}`))
