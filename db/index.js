const pgp = require(`pg-promise`)()
const connectionString = 
    "postgressql://postgres:password@localhost:3001/FOOD-TRACKER"

    const db = PGP(connectionStrng)

    module.export = db;