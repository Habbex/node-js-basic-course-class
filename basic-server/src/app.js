const fastify = require("fastify")
const fastifySwagger= require("@fastify/swagger")
const fastifySwaggerUI = require("@fastify/swagger-ui")
const fastifyPostgres= require("@fastify/postgres")

const bookRoutes = require("./routes/v1/books")
const healthCheck = require("./routes/v1/healthcheck")

const build =(opts={},swaggerOpts={}, swaggerUIOpts={}, fastifyPostgresOpts={})=>{
    const app = fastify(opts)
    app.register(fastifySwagger, swaggerOpts)
    app.register(fastifySwaggerUI,swaggerUIOpts)
    app.register(fastifyPostgres, fastifyPostgresOpts)
    app.register(bookRoutes, {prefix: "/books"})
    app.register(healthCheck, {prefix: "/healthcheck"})
    return app
}

module.exports = build