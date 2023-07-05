
const {db} = require('./db/db')
const app = require('./app')

 db.authenticate()
.then(console.log('Database authenticated 🪄'))
.catch( err => console.log(err))

db.sync()
.then(console.log('Database synced 🛡️'))
.catch( err => console.log(err)) 

app.listen(3000, () =>{
  console.log(`The server running`)
})