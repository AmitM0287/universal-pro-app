const http = require('http');
const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

/* middlewares */
app.use(cors({
	origin: process.env.ALLOWED_ORIGINS,
	methods: process.env.ALLOWED_METHODS,
	allowedHeaders: process.env.ALLOWED_HEADERS,
}));
app.use((req, res, next) => {
	res.setHeader('X-Coded-By', process.env.X_CODED_BY);
	res.setHeader('Content-Security-Policy', process.env.CONTENT_SECURITY_POLICY);
	res.removeHeader('X-Powered-By');
	next();
});
app.use(express.static(path.resolve('./public')));

server.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT} ...`);
});
