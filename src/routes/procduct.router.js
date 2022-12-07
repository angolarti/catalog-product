import router from 'node:router'
import crypto from 'node:crypto'


const productsRoute = router()

route.get('/products', async (req, res, next) => {
    res.status(200).json({
        uuid: crypto.randomUUID(),
        name: 'Dell XPS 17',
        price: 3000000,
    })
})
