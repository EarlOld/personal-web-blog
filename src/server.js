import express  from 'express'
import path from 'path'
import fs from 'fs'
import React from 'react'
import ReactDom from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { Provider } from 'react-redux'
import routes from './routes'
import rootReducer from './redux/reducers'
import bodyParser from 'body-parser'
import { createStore } from 'redux'

import User from './models/user'

const store = createStore(rootReducer, {})
const app = express()


// const use = new User({
//   name: 'Test1',
//   password: 'test'
// })
//
// use.save((err, user, affected) => {
//   if (err) {
//     throw err
  //   }
  //   console.log(user);
  //   User.findOne({ name: 'Test1' }, (err, name) => {
  //     console.log(name);
  //   })
  // })

User.findOne({ name: 'Test1' }, (err, name) => {
    console.log(name);
  })
app.get('/about', (req, res) => {
  res.send('API is running')
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'dist')))

app.use((req, res) => {
  if (~req.url.indexOf('img') || ~req.url.indexOf('bundle')) {
    fs.readFile(path.join(__dirname, req.url), (error, data) => {
      if (error) throw error
      res.end(data)
    })
  } else {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (redirectLocation) { // Если необходимо сделать redirect
        return res.redirect(301, redirectLocation.pathname + redirectLocation.search)
      }
      if (error) { // Произошла ошибка любого рода
        return res.status(500).send(error.message)
      }
      if (!renderProps) { // мы не определили путь, который бы подошел для URL
        return res.status(404).send('Not found')
      }
      const componentHTML = ReactDom.renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )

      console.log(req.url)
      return res.end(renderHTML(componentHTML))
    })
  }
})

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050/' : '/'

function renderHTML(componentHTML) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" >
          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">
          <title>Hello React</title>
          <link rel="stylesheet" href="${assetUrl}dist/bundle.css">
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="${assetUrl}dist/bundle.js"></script>
        <script src="https://use.fontawesome.com/e73a2c2dea.js"></script>
      </body>
    </html>
  `
}

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`)
})
