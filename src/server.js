import path from 'path';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express();
app.use(express.json());
app.use(compression({ threshold: 0 }))
app.use(express.static(path.join(__dirname, '../../../static')));
app.use(sapper.middleware())

app.get('foo/', (req, res, next) => {
	res.send("FOO")
})

app.listen(PORT, err => {
	if (err) console.log('error', err);
});
