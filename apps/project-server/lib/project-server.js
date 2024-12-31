const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
})

app.post('/users',(req,res) => {
  const {id} = req.body;
  if(id) {
    return res.json({
      id,
      name: '张三',
      age: 18
    })
  } else {
    return res.json({
      error: 'id is required'
    })
  }
})

app.listen(8080,() => {
  console.log('Server is running on http://localhost:8080');
})