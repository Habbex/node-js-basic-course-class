require("dotenv").config()

const envaild= require("envalid")

module.exports = envaild.cleanEnv(process.env, {
    POSTGRES_DB_CONNECTION: envaild.str({})
})