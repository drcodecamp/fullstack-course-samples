import {
  deleteOne,
  findMany,
  findOne,
  getCollection,
  insertOne,
  updateOne,
} from '../utils/db.js'
import { success } from '../status/status.js'

export const getDogs = async (filterBy = {}) => {
  try {
    const documents = await findMany(filterBy)
    return success('dogs', documents)
  } catch (err) {
    console.log(err)
  }
}

export const createDog = async (dog) => {
  try {
    const document = await insertOne(dog)
    return success('dog', document)
  } catch (err) {
    console.log(err)
  }
}

export const getDogById = async (_id) => {
  try {
    const document = await findOne(_id)
    return success('dog', document)
  } catch (err) {
    console.log(err)
  }
}

export const deleteDogById = async (_id) => {
  try {
    await deleteOne(_id)
    return success()
  } catch (err) {
    console.log(err)
  }
}

export const updateDog = async (_id, dog) => {
  try {
    await updateOne(_id, dog)
    return success()
  } catch (err) {
    console.log(err)
  }
}
