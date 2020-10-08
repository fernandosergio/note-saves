const database = require('./db')
const createUnit = require('./createUnit')

database.then(async(db) => {

    // dados
    unitsValue = {
        book: 1,
        unit: 1,
        content: "sei la o que vai aqui da aula",
        notes: "tem isso aquilo tarana",
        words: "nao sei o que significa isso"
    }

    // criar os dados
    await createUnit(db, { unitsValue })

    // consultar os dados

    // const selectedUnits = await db.all("SELECT * FROM units")
    //     // console.log(selectedUnits)

    // const selectUnitsAndUnit = await db.all(`
    //     SELECT units.*
    //     FROM units
    //     WHERE units.unit = "1"
    // `)

    // console.log(selectUnitsAndUnit)
})