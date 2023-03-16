import fastify from 'fastify'

const server = fastify()

server.get('/isUp', async (request, reply) => {
  return 'Server is running and working! You can use now!'
})

server
  .listen({
    port: 3333,
  })
  .then(() => console.log('Server is running at http://localhost:3333'))
