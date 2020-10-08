module.exports = async function(db, { unitDeleted }) {
    await db.run(`
        DELETE FROM book${unitDeleted.book}
        WHERE unit = ${unitDeleted.unit}
        `)
}