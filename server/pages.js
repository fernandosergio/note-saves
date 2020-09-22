const database = require('./database/db')

const unidades = [
    "Unit 1",
    "Unit 2",
    "Unit 3",
    "Unit 4",
    "Unit 5",
    "Unit 6",
    "Unit 7",
    "Unit 8",
    "Unit 9",
    "Unit 10",
    "Unit 11",
    "Unit 12",
    "Unit 13",
    "Unit 14",
    "Unit 15",
    "Unit 16",
    "Unit 17",
    "Unit 18",
    "Unit 19",
    "Unit 20",
    "Unit 21",
    "Unit 22",
    "Unit 23",
    "Unit 24",
    "Unit 25",
    "Unit 26",
    "Unit 27",
    "Unit 28",
    "Unit 20",
    "Unit 30"
]

function pageIndex(req, res) {
    return res.render("index.html")
}

async function pageBookOne(req, res) {

    const query = `
    SELECT units.*
    FROM units
    WHERE EXISTS(
        SELECT units.unit
        FROM units
        ORDER BY unit ASC
    )`

    try {
        const db = await database
        const units = await db.all(query)
        return res.render("book-one.html", { units })
    } catch (error) {
        console.log(error)
    }

    return res.render("book-one.html")
}

function pageInsertData(req, res) {
    return res.render("insert-content.html", { unidades })
}

module.exports = { pageIndex, pageBookOne, pageInsertData }