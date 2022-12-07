import router from 'express'
import crypto from 'node:crypto'


const productsRoute = router()

productsRoute.get('/products', async (req, res, next) => {

    res.status(200).json({
        uuid: crypto.randomUUID(),
        name: 'Dell XPS 17',
        price: (3000000).toLocaleString('pt-AO')
    })
})
