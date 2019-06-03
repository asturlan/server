import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { json } from 'body-parser';
require('dotenv').config()
import con from './connection/dbconn'

//_________________________________________________


const server = express()

server.use(morgan('combined'))
server.use(cors())
server.use(json())

//TEST ROUTE --> NOTE: move to another file(different structure) --> then use something like require('./routes)(server)
server.get('/test', (req, res) => {
    res.send('Hello')
})

//CONNECTING AND SYNCING WITH DB
con.sync().then(() => {
    server.listen(process.env.PORT, () => {
        console.log('Database connection established')
        console.log(`Server running on port ${process.env.PORT}`)
    })
}).catch(err => console.log('Database connection failure'))


