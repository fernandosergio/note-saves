const express = require('express')
const api = express()

const nunjucks = require('nunjucks')
nunjucks.configure('server/api', {
    express: api,
    noCache: true
})

const cors = require('cors')

const database = require('../database/db')
const createUnit = require('../database/createUnit')
const deleteUnit = require('../database/deleteUnit')

api.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    api.use(cors())
    next()
})

api.get('/', manipulaDados)
    .use(function(req, res) {
        res.status(404)
    })
    .listen(3000, () => console.log('Api is running'))


async function manipulaDados(req, res) {

    const { book, unit, content, notes, words, del } = req.query

    if (!unit && !content) {

        const selecBook1 = `SELECT * FROM book1`
        const selecBook2 = `SELECT * FROM book2`
        const selecBook3 = `SELECT * FROM book3`
        const selecBook4 = `SELECT * FROM book4`

        try {
            const db = await database
            const book1 = await db.all(selecBook1)
            const book2 = await db.all(selecBook2)
            const book3 = await db.all(selecBook3)
            const book4 = await db.all(selecBook4)

            return res.render("data.html", { book1, book2, book3, book4 })
        } catch (error) {
            return res.render('index.html')
        }
    }

    if (del) {
        database.then(async(db) => {
            const unitDeleted = {
                book,
                unit
            }
            await deleteUnit(db, { unitDeleted })
        })
        return res.end("Deletado")
    }

    if (req.query) {
        database.then(async(db) => {
            const unitsValue = {
                unit,
                content,
                notes,
                words
            }

            await createUnit(db, { unitsValue })
        })
        return res.end("Adicionado")
    }

}