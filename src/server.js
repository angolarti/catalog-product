import express from 'express'

import productsRoute from './routes/product.route.js'

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '127.0.0.1'


const app = express()
app.use(handler)
app.use(productsRoute)

async function handler(req, res, next) {
    next()
}

await app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`)
})