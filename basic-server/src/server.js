const build = require("./app")
const env = require("./config/env")

const app = build(
    { logger: true },
    {
        openapi: {
            openapi: '3.0.0',
            info: {
                title: 'Test Swagger',
                description: 'Testing the Fastify Swagger API',
                version: '0.1.0',
            },
            servers: [
                {
                    url: 'https://redesigned-happiness-5vqqp5vwx6f495x-3000.app.github.dev/',
                    description: 'Development server',
                },
            ],
        },
    },
    {
        routePrefix: '/docs',
        uiConfig: {
            docExpansion: 'full',
            deepLinking: false,
        },
    },{
        connectionString: env.POSTGRES_DB_CONNECTION
    }
);

app.listen({ port: 3000, host: "localhost" }, (err) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
})