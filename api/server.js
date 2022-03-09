const express = require('express')
const server = express()
const postsRouter = require('./posts/posts-router')


server.use(express.json())

server.use('/api/posts',postsRouter)

server.use('*', (req, res) => {
    res.send('Server is up!!!')
})


module.exports = server