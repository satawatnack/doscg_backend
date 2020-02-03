const express = require('express')
const doscgRouter = require('./routers/doscgRouter')
const cors = require("cors")

const app = express()
const port = process.env.port || 3000

app.use(express.json())
app.use(cors())
app.use(doscgRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})