const fs = require('fs-extra')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('../../webpack.config')
const project = require('../../project.config')

const runWebpackCompiler = (webpackConfig) =>
  new Promise((resolve, reject) => {
    webpack(webpackConfig).run((err, stats) => {
      if (err) {
        return reject(err)
      }

      const jsonStats = stats.toJson()
      if (jsonStats.errors.length > 0) {
        return reject(new Error('Webpack compiler encountered errors'))
      } else if (jsonStats.warnings.length > 0) {
      }
      resolve(stats)
    })
  })

const compile = () => Promise.resolve()
  .then(() => runWebpackCompiler(webpackConfig))
  .then((stats) => {
    fs.copySync(
      path.resolve(project.basePath, 'public'),
      path.resolve(project.basePath, project.outDir)
    )
    return stats
  })
  .then((stats) => {
    if (project.verbose) {
    }
  })
  .catch((err) =>({

  }))

compile()
