require('dotenv').config()

const server = require('./api/server')

const port = process.env.PORT || 9000

server.get('/', (req, res) =>{
  res.status(200).json({message: 'Server is running!'})
})

server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})