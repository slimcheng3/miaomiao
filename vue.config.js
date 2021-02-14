module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.97.33.178', //要访问的那个url. 如我的8080端口到4000端口.
                changeOrigin: true,
                // ws: true,
                // pathRewrite: {
                //     '^/api': ''
                // }
            }
        }
    }
};

