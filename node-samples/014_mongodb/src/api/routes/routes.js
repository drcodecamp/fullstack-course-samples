import express from 'express'
import {
  onCreateDog,
  onGetDogs,
  onGetDogById,
  onUpdateDogById,
  onDeleteDogById,
} from '../controllers/index.js'

const router = express.Router()

/** Routing */
router.get('/dogs', onGetDogs)
router.get('/dog/:id', onGetDogById)
router.post('/dog', onCreateDog)
router.put('/dog/:id', onUpdateDogById)
router.delete('/dog/:id', onDeleteDogById)

export default router
