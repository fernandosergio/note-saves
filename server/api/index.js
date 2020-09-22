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

    const { unit, content, notes, words, del } = req.query

    if (!unit && !content) {

        const query = `
        SELECT units.*
        FROM units
        WHERE EXISTS(
            SELECT units.unit
            FROM units
        )`

        try {
            const db = await database
            const units = await db.all(query)
            return res.render("data.html", { units })
        } catch (error) {
            return res.render('index.html')
        }
    }

    if (del) {
        database.then(async(db) => {
            const unitDeleted = {
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