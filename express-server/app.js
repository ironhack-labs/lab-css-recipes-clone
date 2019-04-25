const express = require('express')

const app = express()

app.get('/', (request, response, next) => {
  //console.log('request', request)
  response.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Node Server 2- HTML</title>
      <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
      <style>
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          background: center / cover no-repeat url('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg');
        }
        h1 {
          margin: 0 auto;
          font-size: 80px;
          font-family: 'Anton', sans-serif;
          letter-spacing: 5px;
          color: white;
        }
      </style>
    </head>
    <body>
      <h1>Hello Ironhackers</h1>
    </body>
    </html>
  `)
})

app.get('/about', (request, response, next) => {
  //console.log('request', request)
  response.send(`<h1>About me - page</h1>`)
})

app.listen(3000, () => {
  console.log('My first express server is up and running')
})



