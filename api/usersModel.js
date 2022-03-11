const database = []

const register = (user) =>{
  const {username, password} = user
  const id = database.length + 1

  let unique = true

  for(let i = 0; i < database.length; i++){
    if(database[i].username === username){
      unique = false
    }
  }

  if(unique){
    database.push({id, username, password})
    return id
  }else{
    return null
  }
}

const find = () =>{
  const list = []

  console.log(database)

  for(let i = 0; i < database.length; i++){
    console.log(database[i])
    let user = database[i]

    list.push({id: user.id, username: user.username})
  }

  return list
}

const auth = (username, password) =>{
  let success = false

  for(let i = 0; i < database.length; i++){
    if(database[i].username === username && database[i].password === password){
      success = true
    }
  }

  return success

}

module.exports = {
  find,
  register,
  auth,
}