const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api',router)

app.listen(port,() => {
    console.log(`listen to port:${port}`)
})