const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            // 设置代理
            '/api': {
                target: 'http://localhost:9001/api/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}