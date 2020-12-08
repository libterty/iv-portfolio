
module.exports = {
  apps : [{
    name: 'web',
    script: 'server.js',
    instances: 4,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};