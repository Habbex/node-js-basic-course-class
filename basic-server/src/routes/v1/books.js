const bookRoutes= async (fastify)=>{
    fastify.get('/', async (request, reply)=>{
        reply.send({hello:"world"})
    })
}

module.exports= bookRoutes