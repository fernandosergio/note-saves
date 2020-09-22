module.exports = async function(db, { unitDeleted }) {
    await db.run(`
        DELETE FROM units
        WHERE unit = ${unitDeleted.unit}
        `)
}