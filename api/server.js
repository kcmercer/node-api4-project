require('dotenv').config()
const express = require('express')
const cors = require('cors')

const Users = require('./users-model')

const server = express()
server.use(express.json())
server.use(cors())

server.get('/api/users/', (req, res) => {
  const users = Users.find()

  res.status(200).json(users)
  return
})

server.post('/api/register/', (req, res) => {
  const body = req.body

  if(body.username && body.password) {
    const id = Users.register({
      username: body.username, 
      password: body.password
    })

    if(id) {
      res.status(201).json(id)
      return
    }else {
      res.status(400).json({
        message: 'This username is already taken'
      })
      return
    }
    
  }else {
    res.status(400).json({
      message: 'Please provide a username and password'
  })
    return
  }
  
})

server.post('/api/login/', (req, res) => {
  const body = req.body

  if(body.username && body.password){
    const authorized = Users.auth(body.username, body.password)

    if(authorized) {
      res.status(200).json({
        message: `Welcome back, ${body.username}`
      })
    }else {
      res.status(401).json({
        message: `This username and password combination don't match`
      })
    }
    
  }else {
    res.status(400).json({
      message: 'Please provide a username and password'
    })
    return
  }
})

module.exports = server