import cronometroModel from '../models/productModel'
import { Request, Response } from 'express'
import productModel from '../models/productModel'

async function create(req: Request, res: Response) {
  try {
    await productModel.create({
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
    })

    return res.status(201).send({ message: 'Produto Cadastrado com sucesso!' })
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function getAll(req: Request, res: Response) {
  try {
    const data = await productModel.find()

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function getById(req: Request, res: Response) {
  try {
    const data = await productModel.findById(req.params.id)

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function getByTitle(req: Request, res: Response) {
  try {
    const data = await productModel.findOne({ title: req.body.title })

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function update(req: Request, res: Response) {
  try {
    await productModel.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
      },
    })

    return res.status(201).send({ message: 'Tudo Editado com suceso!' })
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function deleteOne(req: Request, res: Response) {
  try {
    await productModel.findByIdAndRemove(req.params.id)

    return res.status(200).send({ message: 'Produto apagado com sucesso! ' })
  } catch (error) {
    return res.status(400).send(error)
  }
}

export default { getAll, getByTitle, getById, create, update, deleteOne }
