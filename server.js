const express = require('express')
const fs = require('fs');
const https = require('https');
const path = require('path');

const certificate = '/etc/letsencrypt/live/tan.gozu.lat/fullchain.pem'
const certificate_key = '/etc/letsencrypt/live/tan.gozu.lat/privkey.pem'
const app = express()
const port = 3000


app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const server = https.createServer({
	key: fs.readFileSync(certificate_key, 'utf8'),
	cert: fs.readFileSync(certificate, 'utf8')
}, app);

await server.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});