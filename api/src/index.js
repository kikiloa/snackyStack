// Imports
import express from 'express'


// app imports
import setupLoadModules from './setup/loadModules'
import setupGraphQL from './setup/graphql'
import setupStartServer from './setup/startServer'

// express server
const server = express()

// load modules
setupLoadModules(server)

// load graphql
setupGraphQL(server)

// start server
setupStartServer(server)