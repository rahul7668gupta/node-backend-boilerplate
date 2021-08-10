import express from 'express'
import { homeRoute } from '../Controllers/home.js'
const router = express.Router()

router.get('/', homeRoute)

export default router