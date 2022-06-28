import http from 'http'
import db from './db'
import { DeviceLog, initModels } from './models'

async function run() {
  initModels(db);
  db.authenticate().then(() => {
    console.log(`Db authenticated`);
    
  }).catch(err => {
    console.log("LOG::DB Error",err);
    
  });
  const port = parseInt(process.env.PORT || '3000')
  
  const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World')
  })
  
  server.listen(port, () => {
    console.log(`Server running at ${port}`)
  })
}

run()