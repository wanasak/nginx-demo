const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(`${req.method} ${req.path} from ${req.ip}`)
    res.send('Hello World222')
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})