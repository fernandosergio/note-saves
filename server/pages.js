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
    SELECT *
    FROM book1
    WHERE EXISTS(
        SELECT book1.unit
        FROM book1
        
    )
    ORDER BY unit ASC
    `

    try {
        const db = await database
        const book1 = await db.all(query)

        return res.render("book-one.html", { book1 })
    } catch (error) {
        console.log(error)
    }

    return res.render("book-one.html")
}

async function pageBookTwo(req, res) {
    const query = `
    SELECT *
    FROM book2
    WHERE EXISTS(
        SELECT book2.unit
        FROM book2
        
    )
    ORDER BY unit ASC
    `

    try {
        const db = await database
        const book2 = await db.all(query)

        return res.render("book-two.html", { book2 })
    } catch (error) {
        console.log(error)
    }
}

function pageInsertData(req, res) {
    return res.render("insert-content.html", { unidades })
}

module.exports = { pageIndex, pageBookOne, pageBookTwo, pageInsertData }