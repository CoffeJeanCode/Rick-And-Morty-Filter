const { build } = require('esbuild')

build({
  color: true,
  entryPoints: ['./src/server/index.js'],
  outfile: './dist/server.js',
  loader: {
    '.js': 'jsx',
  },
  bundle: true,
  platform: 'node',
  define: {
    'process.env.NODE_ENV': '"production"',
  },
}).then(() => {
  build({
    color: true,
    entryPoints: ['./src/client/index.js'],
    outfile: './dist/static/client.js',
    loader: {
      '.js': 'jsx',
    },
    bundle: true,
    minify: true,
    platform: 'node',
    define: {
      'process.env.NODE_ENV': '"production"',
    },
  })
})
