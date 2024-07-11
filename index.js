if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
console.log(process.env.STRIPE_SECRET_KEY, 'process.env.NODE_ENV')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.listen(3001)
