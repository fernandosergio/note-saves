const database = require('sqlite-async')
module.exports = database.open(__dirname + '/database.sqlite').then(execute)

function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS book1 (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            unit INTEGER,
            content TEXT,
            notes TEXT,
            words TEXT
        );
        CREATE TABLE IF NOT EXISTS book2 (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            unit INTEGER,
            content TEXT,
            notes TEXT,
            words TEXT
        );
        CREATE TABLE IF NOT EXISTS book3 (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            unit INTEGER,
            content TEXT,
            notes TEXT,
            words TEXT
        );
        CREATE TABLE IF NOT EXISTS book4 (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            unit INTEGER,
            content TEXT,
            notes TEXT,
            words TEXT
        );
    `)
}