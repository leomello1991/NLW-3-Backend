import express, { request } from 'express'
import {getRepository} from 'typeorm'
import Orphanages from './models/Orphanage'

import './database/connection'

const app = express()
app.use(express.json())

app.post('/orphanages', (resquest, response) =>{
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  } = request.body
  const orphanagesRepository = getRepository(Orphanages)
})

app.listen(3333)