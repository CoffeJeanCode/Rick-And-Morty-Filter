import { config } from 'dotenv'
config()
import express from 'express'
import path from 'path'
import React from 'react'
import ReactDom from 'react-dom/server'
import compression from 'compression'
import { Helmet } from 'react-helmet'

import App from '../client/App'
import StoreProvider from '../client/store/store'

import { getCharacters } from '../services/getCharacters'

const app = express()

app.use(express.json())
app.use(compression())
app.use(express.static(path.join(__dirname, '..', 'dist', 'static')))

app.get('*', async (_, res) => {
  const results = await getCharacters()

  const helmet = Helmet.renderStatic()
  const htmlAttrs = helmet.htmlAttributes.toComponent()
  const bodyAttrs = helmet.bodyAttributes.toComponent()

  const root = (
    <html lang="en" {...htmlAttrs}>
      <head>
        <title>SSR Rick and Morty</title>
        <link rel="stylesheet" href="/normalize.css" />
        <link rel="stylesheet" href="/client.css" />
        <meta name="title" content="SSR Rick and Morty" />
        <meta name="description" content="Server Side Rendering Practice" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ssr-rickandmorty.herokuapp.com/"
        />
        <meta property="og:title" content="SSR Rick and Morty" />
        <meta
          property="og:description"
          content="Server Side Rendering Practice"
        />
        <meta property="og:image" content="/banner.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://ssr-rickandmorty.herokuapp.com/"
        />
        <meta property="twitter:title" content="SSR Rick and Morty" />
        <meta
          property="twitter:description"
          content="Server Side Rendering Practice"
        />
        <meta property="twitter:image" content="/banner.png" />
      </head>
      <body {...bodyAttrs}>
        <div id="app">
          <StoreProvider characters={results}>
            <App />
          </StoreProvider>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.__data__ = ${JSON.stringify(results)}
            `,
          }}
        ></script>
        <script defer src="/client.js"></script>
      </body>
    </html>
  )

  const html = ReactDom.renderToString(root)

  res.send(html)
})

app.listen(process.env.PORT || 3000, () => console.log('Server listening'))
