const database = require('sqlite-async')
module.exports = database.open(__dirname + '/database.sqlite').then(execute)

function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS unit1 (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            unit INTEGER,
            content TEXT,
            notes TEXT,
            words TEXT
        );
    `)
}