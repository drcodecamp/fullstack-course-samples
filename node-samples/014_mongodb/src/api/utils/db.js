import pkg from 'mongodb'
const { MongoClient, ObjectID } = pkg

import { INTERNAL_ERROR, INTERNAL_ERROR_MSG } from '../status/codes.js'
import config from '../../config/vars.js'
import { error } from '../status/status.js'

const { mongo } = config
const { dbUser, dbCollection, dbName, dbPassword } = mongo

const dbURL = `cluster0-af8ed.mongodb.net/${dbName}?retryWrites=true&w=majority`
const URI = `mongodb+srv://${dbUser}:${dbPassword}@${dbURL}`

let DatabaseConnection = null

export async function initDatabaseConnection() {
  if (DatabaseConnection) {
    return DatabaseConnection
  }
  try {
    const client = await MongoClient.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    const db = client.db(dbName)
    DatabaseConnection = db
    return db
  } catch (err) {
    throw err
  }
}

export async function getCollection() {
  try {
    // Establish Database connection.
    const db = await initDatabaseConnection()

    // Return Collection.
    return db.collection(dbCollection)
  } catch (err) {
    // Throw Connection error.
    throw err
  }
}

export async function findOne(_id) {
  try {
    const collection = await getCollection()
    return await collection.findOne({ _id: ObjectID(_id) })
  } catch (err) {
    throw err
  }
}

export async function findMany(filterBy = {}) {
  const collection = await getCollection()
  try {
    return (
      collection
        .find({ ...filterBy })

        // Project the data and remove unwanted fields .
        .sort({ created: -1 })

        // Project the data and remove unwanted fields .
        .limit(50)

        // Convert the Pointer object into Array
        .toArray()
    )
  } catch (err) {
    // Throw Connection error.
    throw err
  }
}

export async function deleteOne(_id) {
  try {
    const collection = await getCollection()
    return await collection.deleteOne({ _id: ObjectID(_id) })
  } catch (err) {
    throw err
  }
}

export async function insertOne(dog) {
  try {
    const collection = await getCollection()
    const response = await collection.insertOne({
      ...dog,
    })
    return response.ops[0]
  } catch (err) {
    // Throw Connection Error.
    throw error(INTERNAL_ERROR_MSG, INTERNAL_ERROR)
  }
}

export async function updateOne(_id, update) {
  try {
    const collection = await getCollection()
    await collection.updateOne(
      { _id: ObjectID(_id) },
      { $set: { ...update, lastModified: Date.now() } }
    )
  } catch (err) {
    throw err
  }
}
