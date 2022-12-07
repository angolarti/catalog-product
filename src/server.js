import express from 'express'

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '127.0.0.1'


const app = express()
app.use(handler)

async function handler(req, res, next) {
    next()
}

await app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`)
})