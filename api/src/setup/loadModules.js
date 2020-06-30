//imports
import express from 'express'
import path from 'path'

import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

// load express modules
export default function (server) {
    console.info('SETUP - Loading modules...')
    

    // enable cors
    server.use(cors())

    //request body parser
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))

    // request body cookie parser
    server.use(cookieParser())

    // static files folder
    server.use(express.static(path.join(__dirname, '..', '..', 'public')))

    // http logger
    server.use(morgan('tiny'))
}