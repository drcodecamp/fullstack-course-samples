import {
  error,
  responseWithError,
  responseWithSuccess,
} from '../status/status.js'
import {
  createDog,
  deleteDogById,
  getDogById,
  getDogs,
  updateDog,
} from '../services/index.js'
import { findOne, updateOne } from '../utils/db.js'

export const onGetDogs = async (req, res) => {
  try {
    const dogs = await getDogs()
    return responseWithSuccess(res, dogs)
  } catch (err) {
    console.log(err)
    responseWithError(res, error('', 500))
  }
}

export const onCreateDog = async (req, res) => {
  const dog = req.body.dog
  try {
    const document = await createDog(dog)
    return responseWithSuccess(res, document)
  } catch (err) {
    responseWithError(res, error('', 500))
  }
}

export const onGetDogById = async (req, res) => {
  const _id = req.params.id
  try {
    const document = await getDogById(_id)
    return responseWithSuccess(res, document)
  } catch (err) {
    console.log(err)
    responseWithError(res, error('', 500))
  }
}

export const onDeleteDogById = async (req, res) => {
  const _id = req.params.id
  try {
    await deleteDogById(_id)
    return res.sendStatus(200)
  } catch (err) {
    console.log(err)
    responseWithError(res, error('', 500))
  }
}

export const onUpdateDogById = async (req, res) => {
  const _id = req.params.id
  const { dog } = req.body
  try {
    const document = await updateDog(_id, dog)
    return responseWithSuccess(res, document)
  } catch (err) {
    responseWithError(res, error(err, 500))
  }
}
