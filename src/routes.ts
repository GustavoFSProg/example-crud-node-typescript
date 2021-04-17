import Router from 'express'
import productController from './controllers/productController'

const routes = Router()

routes.get('/', productController.getAll)
routes.get('/getOne/:id', productController.getById)
routes.get('/findOne', productController.getByTitle)
routes.post('/register', productController.create)
routes.put('/update/:id', productController.update)
routes.delete('/delete/:id', productController.deleteOne)

export default routes
