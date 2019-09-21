const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// const { host, port } = nuxt.options.server
const heroku_host = process.env.HOST || '127.0.0.1'
const heroku_port = process.env.PORT || 5000

app.set('port', heroku_port)

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(heroku_port, heroku_host)
  consola.ready({
    message: `Server listening on http://${heroku_host}:${heroku_port}`,
    badge: true
  })
}
start()
