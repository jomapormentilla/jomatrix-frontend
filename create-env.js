const fs = require('fs')
fs.writeFileSync('./.env', `AWS_ACCESS_KEY_ID=${process.env.AWS_ACCESS_KEY_ID_NETLIFY}\nAWS_SECRET_ACCESS_KEY=${process.env.AWS_SECRET_ACCESS_KEY_NETLIFY}`)