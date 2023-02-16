import pkg from 'mongodb'

const { MongoClient, ObjectID } = pkg

import { INTERNAL_ERROR, INTERNAL_ERROR_MSG } from '../status/codes.js'
import config from '../../config/vars.js'
import { error } from '../status/status.js'

const { mongo } = config
const { dbUser, dbCollection, dbName, dbUrl, dbPassword } = mongo

const URL = `mongodb+srv://${dbUser}:${dbPassword}@${dbUrl}`
const URL2 = process.env.MONGODB_CONNSTRING || URL

let DatabaseConnection = null

export async function initDatabaseConnection () {
    if (DatabaseConnection) {
        // If instance exists return it.
        return DatabaseConnection
    }
    // Else Create a new Connection.
    try {
        // Establish connection.
        const client = await MongoClient.connect(URL2, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        
        // Set Instance
        const db = client.db('food')
        DatabaseConnection = db
        
        // Return Instance.
        return db
    } catch (err) {
        // Throw Error of.
        throw err
    }
}

/**
 * Get collection data from MongoDb.
 * @return { Promise<*> }.
 */

export async function createCollection () {
    const db = await initDatabaseConnection()
    const collection = await db.collection('test')
    await collection.insertOne({
        random: Math.random(),
        createdAt: Date.now(),
        lastModified: Date.now(),
    })
    return true
}

export async function getCollection () {
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

/**
 * Find 1 Record from Collection.
 * @param  { string } _id - Should be a valid 12-24 string Represent MongoID.
 * @return { object | null }.
 */

export async function findOne (_id) {
    try {
        const collection = await getCollection()
        
        return collection.findOne({ userId: ObjectID(_id) })
    } catch (err) {
        // Throw Connection error.
        throw err
    }
}

/**
 * Find 1 Record from Collection.
 * @param  { object } identifier - Should be a valid RefreshToken.
 * @return { object | null }.
 */

export async function findRecord (identifier) {
    try {
        // Get collection
        const collection = await getCollection()
        // Find one document by the identifier
        return await collection.findOne(identifier)
    } catch (err) {
        // Throw Connection error.
        throw err
    }
}

/**
 * Find Many Records from Collection.
 * @param  { object } collection - Should get Collection instance.
 * @param  { object } filterBy - Object of filters.
 * @return {Promise<Promise|void[]>}.
 */

export async function findMany (collection, filterBy = {}) {
    try {
        return (
            collection
                
                // Find Docs.
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

/**
 * Delete Document into a Collection.
 * @param { object } collection - Should get Collection instance.
 * @param { string } _id - Should be a valid 12-24 string Represent MongoID.
 * @return {Promise<object>}.
 */

export async function deleteOne (collection, _id) {
    try {
        // Delete One object and return MongoStatus Object.
        return await collection.deleteOne({ _id: ObjectID(_id) })
    } catch (err) {
        // Throw Connection Error.
        throw err
    }
}

/**
 * Insert Document into a Collection.
 * @param { object } document - document to insert.
 * @return {Promise<void>}.
 */
export async function insertOne (document) {
    try {
        const collection = await getCollection()
        
        if (document._id) {
            delete document._id
        }
        // Insert One object and return MongoStatus Object.
        await collection.insertOne({
            ...document,
            createdAt: Date.now(),
            lastModified: Date.now(),
        })
    } catch (err) {
        // Throw Connection Error.
        throw error(INTERNAL_ERROR_MSG, INTERNAL_ERROR)
    }
}

/**
 * Update one document into a collection.
 * @param { string } identifier - Should get Collection instance.
 * @param { string } value - Should get Collection instance.
 * @param { object } update - document to insert.
 * @return {Promise<void>}.
 */
export async function updateOne (identifier, value, update) {
    try {
        const collection = await getCollection()
        await collection.updateOne(
            { [identifier]: ObjectID(value) },
            { $set: { ...update, lastModified: Date.now() } },
        )
    } catch (err) {
        // Throw Connection Error.
        throw err
    }
}
