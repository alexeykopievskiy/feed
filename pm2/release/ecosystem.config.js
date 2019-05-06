module.exports = {
    apps: [{
        name: "ssr.production",
        script: "./ssr.js",
        instances: 1,
        env: {
            NODE_ENV: "production",
            SSR_PORT: 3000
        }
    }]
}
