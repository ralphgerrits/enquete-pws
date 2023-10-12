const sqlite3 = require('sqlite3').verbose();

// Use a file-based database within the /app directory for persistent storage.
const db = new sqlite3.Database('/app/enquete.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS enquete (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        naam TEXT,
        leeftijd TEXT,
        geslacht TEXT,
        beroep TEXT,
        kennis TEXT,
        dagelijkseTechnologieen TEXT,
        voordelen TEXT,
        andereVoordelen TEXT,
        zorgen TEXT,
        arbeidsmarkt TEXT,
        ethiek TEXT,
        privacy TEXT,
        maatschappelijkeRol TEXT,
        onderwijs TEXT,
        toekomst TEXT
    )`);
});

module.exports = db;
