module.exports = async function(db, { unitsValue }) {
    const insertedUnit = await db.run(`
        INSERT INTO unit1(
            unit,
            content,
            notes,
            words
        ) VALUES (
            ${unitsValue.unit},
            "${unitsValue.content}",
            "${unitsValue.notes}",
            "${unitsValue.words}"
        );
    `)
}