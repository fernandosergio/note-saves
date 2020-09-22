const { pageIndex, pageBookOne, pageInsertData } = require('./pages')

const express = require('express')
const server = express()

const nunjucks = require('nunjucks')
nunjucks.configure('server/public/pages', {
    express: server,
    noCache: true
})

server
    .use(express.urlencoded({ extended: true }))
    .use(express.static("server/public"))
    .get('/', pageIndex)
    .get('/book-one', pageBookOne)
    .get('/insert-content', pageInsertData)
    .listen(5000, () => console.log('Server is running!'))